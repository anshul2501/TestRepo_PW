import {test, expect, type Page} from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config()

test.describe("To verify the validation message when used invalid credentials", () => {

    test.beforeEach(async ({page}) => {
        // Go to the website
        await page.goto('https://qa-app-01.qventus.com/');
    });

    test("Login with bad username", async ({page}) => {
        // Verify that the email field is visible
        await expect(page.locator('input[name="username"]')).toBeVisible();
        // Enter the invalid username
        await page.fill('input[name="username"]', process.env.INVALID_USERNAME || '');
        // Verify that the 'Next' button is visible and click on it
        await expect(page.locator('input[class="button button-primary"]')).toBeEnabled();
        await page.click('input[class="button button-primary"]');
        // Verify that the password field is visible
        await expect(page.locator('input[name="password"]')).toBeVisible();
        // Enter the invalid password
        await page.fill('input[name="password"]', process.env.INVALID_PASSWORD || '');
        // Verify that the 'Sign In' button is visible and click on it
        await expect(page.locator('input[class="button button-primary"]')).toBeEnabled();
        await page.click('input[class="button button-primary"]');
        // Verify that the validation message appears
        await expect(page.locator('[role="alert"] > p')).toHaveText('Unable to sign in');
    });
});