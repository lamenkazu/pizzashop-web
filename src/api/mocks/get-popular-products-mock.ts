import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-product'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'pizza 01', amount: 5 },
    { product: 'pizza 02', amount: 2 },
    { product: 'pizza 03', amount: 4 },
    { product: 'pizza 04', amount: 1 },
    { product: 'pizza 05', amount: 5 },
  ])
})
