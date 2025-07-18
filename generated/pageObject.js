class GeneratedPage {
  constructor(page) { this.page = page; }

  async getByRole_button() { await page.getByRole('button', { name: 'Ingresar' }).click(); }
  async getByRole_button() { await page.getByRole('button', { name: 'Descartar' }).click(); }
}
module.exports = { GeneratedPage };