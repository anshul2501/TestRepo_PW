import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe.configure({ mode: 'parallel' });

test.describe('GitHub Login Tests', () => {
  test('Test on Firefox', async ({ page }) => {
    await page.goto('https://github.com/login');
    await expect(page).toHaveTitle(/GitHub/);
    await expect(page).toHaveURL('https://github.com/login');
    await page.fill('input[name="login"]', process.env.GITHUB_USERNAME || '');
    await page.fill('input[name="password"]', process.env.GITHUB_PASSWORD || '');
    await page.click('input[name="commit"]');
  });

  test('Test on Chromium', async ({ page }) => {
    await page.goto('https://github.com/login');
    await expect(page).toHaveTitle(/GitHub/);
    await expect(page).toHaveURL('https://github.com/login');
    await page.fill('input[name="login"]', process.env.GITHUB_USERNAME || '');
    await page.fill('input[name="password"]', process.env.GITHUB_PASSWORD || '');
    await page.click('input[name="commit"]');
  });
});
