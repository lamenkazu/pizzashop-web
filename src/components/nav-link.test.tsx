import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

/** TESTES COM CONTEXTO: TESTAR COMPONENTES QUE PRECISAM DE PROVIDER.
 *
 * Todas as rotas estão dentro do contexto do React,
 * e não dá pra usar o NavLink sem o contexto de rotas.
 *
 * Para saber qual é a rota ativa, utilizamos o wrapper do link em um holder.
 *
 * Para isso é utilizado o wrapper do render, que recebe um componente que recebe o children,
 * e retorna exatamente como se fosse o App, uma estrutura que contém os providers necessarios.
 *
 * Ao invés de utilizar o CreateBrowserRouter do react-router-dom, utilizamos o MemoryRouter,
 * que é uma navegação que fica em memória ao invés de depender de um browser.
 *
 * */

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter
              initialEntries={['/about']} // Recebe um array que recebe qual é a rota ativa.
            >
              {children}
            </MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})
