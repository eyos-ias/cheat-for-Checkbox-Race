const puppeteer = require('puppeteer');

async function run(){
 const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto('https://checkboxrace.com/');
await delay(1000);
const checkboxHandles = await page.$$('input[type="checkbox"]');
for (const checkboxHandle of checkboxHandles) {
  await checkboxHandle.click();
  await delay(90);
// console.log(checkboxHandle);
}
await page.screenshot({path:'result.png' })
}
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

run();