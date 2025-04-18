const AWS = require('aws-sdk');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const FormData = require('form-data');

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.S3_REGION,
});

const BUCKET = process.env.S3_BUCKET;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_UPLOAD_URL = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`;

async function listS3Files() {
  const params = {
    Bucket: BUCKET,
    MaxKeys: 1000,
  };

  const allKeys = [];

  while (true) {
    const data = await s3.listObjectsV2(params).promise();
    allKeys.push(...data.Contents.map(obj => obj.Key));
    if (!data.IsTruncated) break;
    params.ContinuationToken = data.NextContinuationToken;
  }

  return allKeys;
}

async function uploadToCloudflare(filename, buffer) {
  const formData = new FormData();
  formData.append('file', buffer, filename);

  try {
    const response = await axios.post(CLOUDFLARE_UPLOAD_URL, formData, {
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        ...formData.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const result = response.data.result;
    console.log(`✅ Uploaded: ${filename} → ${result.id}`);
  } catch (err) {
    console.error(`❌ Failed: ${filename}`, err.response?.data || err.message);
  }
}

async function migrateAllImages() {
  const files = await listS3Files();
  console.log(`Found ${files.length} files in S3.`);

  for (const key of files) {
    try {
      const obj = await s3.getObject({ Bucket: BUCKET, Key: key }).promise();
      await uploadToCloudflare(path.basename(key), obj.Body);
    } catch (err) {
      console.error(`❌ Error downloading ${key} from S3:`, err.message);
    }
  }
}

migrateAllImages();
