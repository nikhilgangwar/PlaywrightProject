import { test, expect } from '@playwright/test';
const { firefox } = require('playwright');
const faker = require('faker');


test.only('First test playwright', async ({page}) => {

  await page.goto('https://demoqa.com/automation-practice-form/');
  //Test
   await page.fill('#firstName', 'testzsdkjh');
   await page.fill('#lastName', 'dfgdfgdfg');
   await page.fill('#userEmail', 'dxsjmgbfsd');
   // Single selection matching the value
   
  // await page.selectOption('select#colors', 'blue');
 //  await page.waitForTimeout(1000);
   //await page.close();
});



test.skip('test', async ({page }) => {

  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await page.getByRole('button', { name: 'Add Customer' }).click();
  
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Testfname');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('testlname');
  await page.getByPlaceholder('Post Code').click();
  await page.getByPlaceholder('Post Code').fill('2003');
  await page.getByRole('button', { name: 'Open Account' }).click();
 // await page.locator('#userSelect').selectOption('6');
  await page.locator('#currency').selectOption('Dollar');
  await page.getByRole('button', { name: 'Customers' }).click();
  await page.getByRole('cell', { name: 'Last Name' }).click();
  await page.getByPlaceholder('Search Customer').click();
  await page.getByPlaceholder('Search Customer').fill('testname');
  await page.getByRole('cell', { name: 'Testname' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  
});