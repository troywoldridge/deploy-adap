import AWS from 'aws-sdk';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Configure AWS
const s3 = new AWS.S3({
  region: 'us-east-1', // or your bucket region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Cloudflare config
const CLOUDFLARE_ACCOUNT_ID = '720ec85be65a483a3e34400d56dba5d8';
const CLOUDFLARE_TOKEN = 'k5WFV_rm3Azd92kJyTjy0FuchYsU_R5ZgLlomXEn';
const CLOUDFLARE_UPLOAD_URL = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`;

const BUCKET = 'adap-assets';

async function listS3Objects() {
  const data = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
  return data.Contents.map(obj => obj.Key);
}

async function downloadS3Object(key) {
  const tmpPath = path.join(os.tmpdir(), path.basename(key));
  const file = fs.createWriteStream(tmpPath);
  return new Promise((resolve, reject) => {
    s3.getObject({ Bucket: BUCKET, Key: key })
      .createReadStream()
      .on('error', reject)
      .pipe(file)
      .on('finish', () => resolve(tmpPath));
  });
}

async function uploadToCloudflare(filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  const response = await axios.post(CLOUDFLARE_UPLOAD_URL, form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
    },
  });

  return response.data.result.id;
}

(async () => {
  const keys = await listS3Objects();
  console.log(`Found ${keys.length} images to migrate...`);

  for (const key of keys) {
    try {
      console.log(`Migrating ${key}...`);
      const filePath = await downloadS3Object(key);
      const imageId = await uploadToCloudflare(filePath);
      console.log(`✅ https://imagedelivery.net/pJ0fKvjCAbyoF8aD0BGu8Q/${imageId}/public`);
    } catch (err) {
      console.error(`❌ Failed to migrate ${key}`, err.message);
    }
  }

  console.log('Migration complete!');
})();
