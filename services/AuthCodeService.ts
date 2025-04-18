import fetch from 'node-fetch'

interface AuthTokenResponse {
  access_token: string
  expires_in: number
  token_type: string
  scope: string
}

export class AuthCodeService {
  private clientId: string
  private clientSecret: string

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  public async getAccessToken(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    authCode: string
  ): Promise<AuthTokenResponse> {
    // Specify the response type
    const url = 'https://wwwcie.ups.com/security/v1/oauth/token'
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64') // Encode clientId & secret

    const formData = new URLSearchParams()
    formData.append('grant_type', 'authorization_code')
    formData.append('code', authCode)
    formData.append('redirect_uri', redirectUri)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`🚨 Failed to get access token: ${errorText}`)
      }

      return (await response.json()) as AuthTokenResponse // Cast response to AuthTokenResponse
    } catch (error) {
      console.error('�� Error fetching UPS access token:', error)
      throw error
    }
  }
}
