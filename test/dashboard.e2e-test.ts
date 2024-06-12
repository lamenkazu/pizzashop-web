import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle', // Depois de navegar para a página de login eu quero esperar que todas as requisições javasscript estejam finalizadas.
  })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})
