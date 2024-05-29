import { Link, useRouteError } from 'react-router-dom'

export const Error = () => {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-6xl font-bold">Opa, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação. Abaixo mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Voltar para o Dashboard
        </Link>
      </p>
    </div>
  )
}
