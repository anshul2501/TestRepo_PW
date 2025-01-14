import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config()

test.describe('multiple browsers',()=> {

    // test.beforeAll(async ({page}) => {
    //     await page.goto('https://github.com/');
    // });

    // test.use({browserName: 'firefox',});

    test('test on firefox', async ({page})=> {
        await page.goto('https://github.com/login');
        await expect(page).toHaveTitle(/GitHub/);
    })

    // test.use({browserName: 'chromium',});

    test('test on chromium', async ({page})=> {
        await page.goto('https://github.com/login');
        await expect(page).toHaveURL('https://github.com/login');
        await page.fill('//input[@name="login"]', process.env.GITHUB_USERNAME || '');
        await page.fill('//input[@name="password"]', process.env.GITHUB_PASSWORD || '');

        await page.click('//input[@name="commit"]')
    })

});
