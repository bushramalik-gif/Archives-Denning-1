import { test, expect } from '@playwright/test';

test('Archives Homepage and Admin Verification', async ({ page }) => {
  // Open Website
  await page.goto('https://archives.denning.edu.pk/');
  // Verify URL
  await expect(page).toHaveURL('https://archives.denning.edu.pk/');
  // Verify Page Title
  await expect(page).toHaveTitle(/Denning Archive/i);
  // Verify Logo is visible
  await expect(
    page.getByRole('link', { name: /Denning Archive/i })
  ).toBeVisible();
  // click the Denning Archive title
  await page.getByTitle('Home').click();

  // Verify Username and Password textbox
  await page.getByRole('textbox', { name: 'Denning email' }).press('ArrowDown');
  await page.getByText('Denning Students Your event').click();
  await page.getByRole('textbox', { name: 'Archive password' }).click();
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.getByRole('button', { name: 'Need help? Open support chat' }).click();
  await page.getByRole('textbox', { name: 'Your name' }).click();
  await page.getByRole('textbox', { name: 'Your name' }).fill('B');
  await page.getByRole('textbox', { name: 'Your name' }).fill('BU');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('BU@gmail.com');
  await page.getByRole('textbox', { name: 'Contact number' }).click();
  await page.getByRole('textbox', { name: 'Contact number' }).fill('03222332323');
  await page.getByRole('button', { name: 'Start chat →' }).click();
  await page.getByRole('textbox', { name: 'Type your message…' }).fill('test');
  await page.getByRole('textbox', { name: 'Type your message…' }).press('Enter');
  await page.getByRole('button', { name: 'Send message' }).click();

  // --- Admin panel verification ---
  // Credentials are read from environment variables (never hardcoded)
  await page.goto('https://archives.denning.edu.pk/admin#');
  await expect(page).toHaveURL('https://archives.denning.edu.pk/admin#');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ADMIN_USERNAME || '');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ADMIN_PASSWORD || '');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Students' }).click();
  await page.getByRole('button', { name: 'Reset password' }).click();
});