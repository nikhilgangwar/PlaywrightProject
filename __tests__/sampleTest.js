const { firefox } = require('playwright');
const faker = require('faker');

(async () => {
  const browser = await firefox.launch({headless:false});
  
  const context = await browser.newContext();
  
  const page = await context.newPage();


  try {

    await page.goto('https://demoqa.com/automation-practice-form/');
    //Test
     await page.fill('#firstName', 'testzsdkjh');
     await page.fill('#lastName', 'dfgdfgdfg');
     await page.fill('#userEmail', 'dxsjmgbfsd');
     // Single selection matching the value
     
    // await page.selectOption('select#colors', 'blue');
     await page.waitForTimeout(1000)
     await browser.close();
  }
  catch (e)
{
  console.log("Closed the browser")
    await browser.close();
}  
})();