import { test, expect } from '@playwright/test';

test.beforeAll(async ({page}) => {
    await page.goto('https://github.com/');
});