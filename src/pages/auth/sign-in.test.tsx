import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={['/sign-in?email=janedoe@mail.com']} // Recebe um array que recebe qual é a rota ativa.
            >
              <QueryClientProvider
                client={queryClient} // Posso usar o mesmo client global da aplicação sem problemas
              >
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })

    const emailInput = wrapper.queryByLabelText(
      'Seu e-mail',
    ) as HTMLInputElement

    expect(emailInput.value).toEqual('janedoe@mail.com')
  })
})
