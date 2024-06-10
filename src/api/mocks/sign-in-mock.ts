import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'

/** Criação de um mock
 *
 * Toda vez que eu chamar a rota authenticate
 * eu vou retornar uma Resposta HTTP definida.
 *
 * Nos meus testes, a autenticação apenas vai funcioanr com o email definido na condicional.
 *
 * O cookie JWT auth que ficará salvo no browser será o "sample-jwt"
 * funcionando como o back-end da aplicação.
 */

export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'janedoe@mail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
