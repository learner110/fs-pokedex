const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8080',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
})