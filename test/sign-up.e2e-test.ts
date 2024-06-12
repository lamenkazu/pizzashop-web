import { expect, test } from '@playwright/test'

test('sign up sucessfully', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  // Ações do usuário
  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Jane Doe')
  await page.getByLabel('Seu e-mail').fill('janedoe@mail.com')
  await page.getByLabel('Seu telefone').fill('31999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com suesso.')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000) // Aguarda 2 segundos para ver no UI do playwright
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  // Ações do usuário
  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('Jane Doe')
  await page.getByLabel('Seu e-mail').fill('janedoe@mail.com')
  await page.getByLabel('Seu telefone').fill('31999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000) // Aguarda 2 segundos para ver no UI do playwright
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
