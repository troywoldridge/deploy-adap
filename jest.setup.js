// Instead of using the import statement:
import fetchMock from 'jest-fetch-mock'

// Enable fetch mock
fetchMock.enableMocks()

process.env.UPS_CLIENT_ID = 'test-client-id'
process.env.UPS_CLIENT_SECRET = 'test-client-secret'
process.env.UPS_REDIRECT_URI = 'http://localhost/callback'
