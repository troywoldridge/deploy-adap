import { AuthCodeService } from './AuthCodeService'; // Ensure the correct path to AuthCodeService
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

export class UpsShippingService {
  private accessToken: string | null = null;

  constructor(private authCodeService: AuthCodeService, private clientId: string, private clientSecret: string) {}

  async setAccessToken(authCode: string, redirectUri: string) {
    const tokenResponse = await this.authCodeService.getAccessToken(
      this.clientId, 
      this.clientSecret, 
      redirectUri, 
      authCode
    );
    this.accessToken = tokenResponse.access_token; // Ensure 'access_token' exists in AuthTokenResponse
  }
  

  // Calculate shipping rates using the UPS API
  public async getShippingEstimate(weight: number, length: number, width: number, height: number, postalCode: string) {
    if (!this.accessToken) {
      throw new Error('Access token not set');
    }
  
    const url = 'https://onlinetools.ups.com/ship/v1/rating/RateShopping';
    const requestBody = {
      "ShipmentRequest": {
        "Shipment": {
          "Shipper": {
            "Address": {
              "PostalCode": postalCode,
              "CountryCode": "US"
            }
          },
          "ShipTo": {
            "Address": {
              "PostalCode": postalCode,
              "CountryCode": "US"
            }
          },
          "Package": [
            {
              "PackagingType": { "Code": "02" },
              "Dimensions": {
                "UnitOfMeasurement": { "Code": "IN" },
                "Length": length,
                "Width": width,
                "Height": height
              },
              "PackageWeight": {
                "UnitOfMeasurement": { "Code": "LBS" },
                "Weight": weight
              }
            }
          ]
        }
      }
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Capture API error response
        throw new Error(`Failed to get shipping rates: ${errorText}`);
      }
  
      return await response.json(); // Only call `json()` if response is valid
    } catch (error) {
      console.error('Error fetching shipping rates:', error);
      throw new Error('UPS API request failed');
    }
  }
}