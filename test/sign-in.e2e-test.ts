import { expect, test } from '@playwright/test'

test('sign in sucessfully', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  // Ações do usuário
  await page.getByLabel('Seu e-mail').fill('janedoe@mail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu email.',
  )

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2000) // Aguarda 2 segundos para ver no UI do playwright
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  // Ações do usuário
  await page.getByLabel('Seu e-mail').fill('wrong@mail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2000) // Aguarda 2 segundos para ver no UI do playwright
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')

  // await page.waitForTimeout(2000) // Aguarda 2 segundos para ver no UI do playwright
})
