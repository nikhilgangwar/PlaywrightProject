const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
  
    // Open new page
    const page = await context.newPage();
  
    // Go to https://possalesclient.staging.myopenpay.com.au/
    await page.goto('https://possalesclient.staging.myopenpay.com.au/');
  
    // Select R-10000000000001903
    await page.selectOption('select[id="Retailer"]', 'R-10000000000001903');
  
    // Select 1eE1Y+pJfkVGYOUta9eeMdGCABw7NDwyU32qBWp+Ws4vAGOxWCTok0JgwRy4/Ju1vBuMUnrsQVWpGK3qXWoa4vBLf5uIqHp/pJNQbanNSebZp+KLEoX+yJpfjQDaW6I/
    await page.selectOption('select[id="AuthToken"]', '1eE1Y+pJfkVGYOUta9eeMdGCABw7NDwyU32qBWp+Ws4vAGOxWCTok0JgwRy4/Ju1vBuMUnrsQVWpGK3qXWoa4vBLf5uIqHp/pJNQbanNSebZp+KLEoX+yJpfjQDaW6I/');
  
    // Click input[type="text"]
    await page.click('input[type="text"]');
  
    // Click //tbody[starts-with(normalize-space(.), 'Retailer: 15 Dental 20/20 Eyewear 20/20 Sight & Style 24/7 Golf 24x7 Dental Suit')]/tr[8]/td/input[normalize-space(@type)='text']
    await page.click('//tbody[starts-with(normalize-space(.), \'Retailer: 15 Dental 20/20 Eyewear 20/20 Sight & Style 24/7 Golf 24x7 Dental Suit\')]/tr[8]/td/input[normalize-space(@type)=\'text\']');
  
    // Click //tbody[starts-with(normalize-space(.), 'Retailer: 15 Dental 20/20 Eyewear 20/20 Sight & Style 24/7 Golf 24x7 Dental Suit')]/tr[10]/td/input[normalize-space(@type)='text']
    await page.click('//tbody[starts-with(normalize-space(.), \'Retailer: 15 Dental 20/20 Eyewear 20/20 Sight & Style 24/7 Golf 24x7 Dental Suit\')]/tr[10]/td/input[normalize-space(@type)=\'text\']');
  
    // Double click //tbody[starts-with(normalize-space(.), 'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:')]/tr[2]/td/input[normalize-space(@type)='text']
    await page.dblclick('//tbody[starts-with(normalize-space(.), \'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:\')]/tr[2]/td/input[normalize-space(@type)=\'text\']');
  
    // Press Home with modifiers
    await page.press('//tbody[starts-with(normalize-space(.), \'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:\')]/tr[2]/td/input[normalize-space(@type)=\'text\']', 'Shift+Home'); 
  
    // Fill //tbody[starts-with(normalize-space(.), 'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:')]/tr[2]/td/input[normalize-space(@type)='text']
    await page.fill('//tbody[starts-with(normalize-space(.), \'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:\')]/tr[2]/td/input[normalize-space(@type)=\'text\']', '100');
  
    // Click //tbody[starts-with(normalize-space(.), 'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:')]/tr[6]/td/input[normalize-space(@type)='text']
    await page.click('//tbody[starts-with(normalize-space(.), \'Price: Plan Creation Type: Instant Pending Retailer Order No: Plan ID: Response:\')]/tr[6]/td/input[normalize-space(@type)=\'text\']');
  
    // Click //button[normalize-space(.)='New Plan ID']
    await page.click('//button[normalize-space(.)=\'New Plan ID\']');
  
    // Click //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[2]/td/input[normalize-space(@type)='text']
    await page.click('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[2]/td/input[normalize-space(@type)=\'text\']');
  
    // Fill //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[2]/td/input[normalize-space(@type)='text']
    await page.fill('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[2]/td/input[normalize-space(@type)=\'text\']', 'sdfdsf');      
  
    // Double click //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[4]/td/input[normalize-space(@type)='text']
    await page.dblclick('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[4]/td/input[normalize-space(@type)=\'text\']');
  
  
    // Fill //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[4]/td/input[normalize-space(@type)='text']
    await page.fill('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[4]/td/input[normalize-space(@type)=\'text\']', 'Thirteensdfsdf');
  
    // Double click //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[6]/td/input[normalize-space(@type)='text']
    await page.dblclick('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[6]/td/input[normalize-space(@type)=\'text\']');
  
    // Triple click //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[6]/td/input[normalize-space(@type)='text']
    await page.click('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[6]/td/input[normalize-space(@type)=\'text\']', {
      clickCount: 3
    });
  
    // Fill //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[6]/td/input[normalize-space(@type)='text']
    await page.fill('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[6]/td/input[normalize-space(@type)=\'text\']', 'xcvsdf');      
  
    // Select F
    await page.selectOption('select[id="Gender"]', 'F');
  
    // Click //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[12]/td/input[normalize-space(@type)='text']
    await page.click('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[12]/td/input[normalize-space(@type)=\'text\']');
  
    // Press Home
    await page.press('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[12]/td/input[normalize-space(@type)=\'text\']', 'Home');      
  
    // Press End with modifiers
    await page.press('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[12]/td/input[normalize-space(@type)=\'text\']', 'Shift+End'); 
  
  
    // Fill //tbody[starts-with(normalize-space(.), 'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen')]/tr[12]/td/input[normalize-space(@type)='text']
    await page.fill('//tbody[starts-with(normalize-space(.), \'First Name: Middle Name: Last Name: Date Of Birth (strictly as DD MMM YYYY): Gen\')]/tr[12]/td/input[normalize-space(@type)=\'text\']', 'fdgdskjh@.com');
  
    // Click text="Select Plan"
    await page.click('text="Select Plan"');
    // assert.equal(page.url(), 'https://possales.staging.myopenpay.com.au/Plan/NewPlan?CallbackURL=https://possalesclient.staging.myopenpay.com.au/&AuthToken=1eE1Y+pJfkVGYOUta9eeMdGCABw7NDwyU32qBWp+Ws4vAGOxWCTok0JgwRy4/Ju1vBuMUnrsQVWpGK3qXWoa4vBLf5uIqHp/pJNQbanNSebZp+KLEoX+yJpfjQDaW6I/&PlanID=1000001150477&RetailerOrderNo=x13&GoodsDescription=frocks&EmployeeCode=2897&InvoiceNo=37237H&PurchasePrice=100&FirstName=sdfdsf&OtherNames=Thirteensdfsdf&FamilyName=xcvsdf&Gender=F&DateOfBirth=13 Jan 1989&Email=fdgdskjh@.com&PhoneNumber=0403113348&Address1=L13, 520 Collins&Address2=St&Suburb=Melbourne&State=VIC&PostCode=3000');
  
    // Click input[name="Customer.LicenseNum"]
    await page.click('input[name="Customer.LicenseNum"]');
  
    // Fill input[name="Customer.LicenseNum"]
    await page.fill('input[name="Customer.LicenseNum"]', '324234324');
  
    // Click text="Return to Shop"
    await page.click('text="Return to Shop"');
  
    // Click //button[normalize-space(.)='Yes' and normalize-space(@role)='button']
    await page.click('//button[normalize-space(.)=\'Yes\' and normalize-space(@role)=\'button\']');
  
    // Close page
    await page.close();
  
    // ---------------------
    await context.close();
    await browser.close();
  })();