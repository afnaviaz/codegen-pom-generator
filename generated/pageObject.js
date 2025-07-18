class GeneratedPage {
  constructor(page) { this.page = page; }

  async goto_httpsapptesting() { await page.goto('https://app-testing.finkargo.com.mx/auth/login'); }
  async locator_labelfilterhasT() { await page.locator('label').filter({ hasText: 'Usuario *' }).dblclick(); }
  async getByRole_textbox() { await page.getByRole('textbox', { name: 'Usuario *' }).click(); }
  async getByRole_textbox() { await page.getByRole('textbox', { name: 'Usuario *' }).fill('fsdaf'); }
  async locator_labelfilterhasT() { await page.locator('label').filter({ hasText: 'Contraseña *' }).click(); }
  async getByRole_textbox() { await page.getByRole('textbox', { name: 'Contraseña *' }).fill('sadfadsf'); }
  async getByRole_button() { await page.getByRole('button', { name: 'Ingresar' }).click(); }
}
module.exports = { GeneratedPage };