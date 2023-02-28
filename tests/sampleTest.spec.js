import { test, expect } from '@playwright/test';
const { firefox } = require('playwright');
//const faker = require('faker');
const { faker } = require('@faker-js/faker');


test('Test with Random user', async ({page}) => {

  await page.goto('https://demoqa.com/automation-practice-form/');
  const randomeFirstName = faker.name.firstName();
  const randomeLastName = faker.name.lastName();
  const randomeEmail = faker.internet.email();  
  const randomeAddress = faker.address.streetAddress();
  
   await page.fill('#firstName', randomeFirstName);
   await page.fill('#lastName', randomeLastName);
   await page.fill('#userEmail', randomeEmail);
   await page.getByText('Male', { exact: true }).click();
   await page.getByText('Reading').click();
   await page.getByText('Sports').click();
   await page.fill('#currentAddress', randomeAddress);
   await page.close();
});

test.only('Test Customeer Deposit and Withdrwal', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('2');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transactions' }).click();
  await page.getByRole('button', { name: 'Back' }).click();

  await page.getByRole('button', { name: 'Deposit' }).click();
  //await page.getByPlaceholder('amount').click();
  await page.getByPlaceholder('amount').fill('100');
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
  await page.getByText('Deposit Successful').click(); 

  //await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Withdrawl' }).click();
  
  await page.waitForTimeout(1000);
  //await page.getByPlaceholder('amount').click();
  await page.getByPlaceholder('amount').fill('100');
  //await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
  await page.getByRole('form').getByRole('button', { name: 'Withdraw' }).click();
  await page.getByText('Transaction successful').click();
  await page.getByRole('button', { name: 'Transactions' }).click();

  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();

});
