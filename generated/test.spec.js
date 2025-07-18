const { test } = require('@playwright/test');
const { GeneratedPage } = require('./pageObject');

test('basic flow', async ({ page }) => {
  const generatedPage = new GeneratedPage(page);
  await generatedPage.getByRole_button();
  await generatedPage.getByRole_button();
});