import puppeteer from "puppeteer";
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe("Valid Card", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: true, // show gui
      // slowMo: 250,
      // devtools: false, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  // test('should add do something', async () => {
  //   await page.goto(baseUrl);
  // });
    // eslint-disable-next-line jest/expect-expect
  test("test valid Card", async () => {
    // await page.goto(baseUrl);
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
    // await page.goto(baseUrl);
    await page.waitForSelector(".card-validator");
    const form = await page.$(".card-validator");
    const input = await form.$("input");
    const submit = await form.$("button");
    await input.type("67624032257432");
    await submit.click();
    await page.waitForSelector(".luhn-algorithm-invalid");
  });
});
