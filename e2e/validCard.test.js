import puppeteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout

describe("Valid Card", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });
  // eslint-disable-next-line jest/expect-expect
  test("test valid Card", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector(".card-validator");
    const form = await page.$(".card-validator");
    const input = await form.$("input");
    const submit = await form.$("button");
    await input.type("4916724819304890");
    await submit.click();
    await page.waitForSelector(".luhn-algorithm-valid");
  });

  // eslint-disable-next-line jest/expect-expect
  test("test invalid Card", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector(".card-validator");
    const form = await page.$(".card-validator");
    const input = await form.$("input");
    const submit = await form.$("button");
    await input.type("67624032257432");
    await submit.click();
    await page.waitForSelector(".luhn-algorithm-invalid");
  });

  afterEach(async () => {
    await browser.close();
  });
});
