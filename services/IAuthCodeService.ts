export interface IAuthCodeService {
  login(queryParams?: Record<string, string>): Promise<UpsOauthResponse<LoginInfo>>
  getAccessToken(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    authCode: string
  ): Promise<UpsOauthResponse<TokenInfo>>
  getAccessTokenFromRefreshToken(
    clientId: string,
    clientSecret: string,
    refreshToken: string
  ): Promise<UpsOauthResponse<TokenInfo>>
}

export interface UpsOauthResponse<T> {
  response: T | null
  error: ErrorResponse | null
}

export interface LoginInfo {
  redirectUri: string
}

export interface ErrorResponse {
  code: string
  message: string
  details?: string
}

export interface TokenInfo {
  access_token: string
  expires_in: number
  token_type: string
}
