const { test } = require('@playwright/test');
const { GeneratedPage } = require('./pageObject');

test('basic flow', async ({ page }) => {
  const generatedPage = new GeneratedPage(page);
  await generatedPage.goto_httpsapptesting();
  await generatedPage.locator_labelfilterhasT();
  await generatedPage.getByRole_textbox();
  await generatedPage.getByRole_textbox();
  await generatedPage.locator_labelfilterhasT();
  await generatedPage.getByRole_textbox();
  await generatedPage.getByRole_button();
});