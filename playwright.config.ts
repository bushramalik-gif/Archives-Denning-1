import { defineConfig, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = defineConfig({
  timeout: 90_000,

  // yahan 'allure-playwright' add karein
  reporter: [
    ['line'],                            // terminal mein simple output
     ['html'],                      
    ['allure-playwright'],          // Allure ke liye results generate karega
  ],

  use: {
      headless: !!process.env.CI,
    viewport: { width: 1366, height: 768 },
    video: 'on',
    screenshot: 'on',
    trace: 'on',
    actionTimeout: 15000,
    navigationTimeout: 30000,
     launchOptions: {
    slowMo: 800,   // har Playwright action ke beech 800ms delay
  },
  },


});

export default config;
