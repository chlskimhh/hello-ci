
const { Builder, By, until } = require('selenium-webdriver');
 
describe('home page', () => {
let driver;
 
beforeAll(async () => {
driver = await new Builder()
.usingServer(
process.env.SELENIUM_REMOTE_URL ||
'http://selenium:4444/wd/hub'
)
.forBrowser('chrome')
.build();
});
 
afterAll(async () => {
if (driver) {
await driver.quit();
}
});
 
test('shows the welcome header', async () => {
const appUrl = process.env.APP_URL || 'http://localhost:3000';
 
await driver.get(appUrl);
 
const header = await driver.wait(
until.elementLocated(By.css('h1')),
10000
);
 
await driver.wait(
until.elementIsVisible(header),
10000
);
 
await expect(header.getText()).resolves.toBe('Welcome to DevOps');
});
});

