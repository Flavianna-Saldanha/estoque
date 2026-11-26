'use client'

import { useActionState } from 'react'
import { loginAction } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/logo'

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginAction, null)

  return (
    <main className="login-shell">
      <section className="login-art" aria-label="Gestão inteligente de estoque">
        <div className="login-art-brand"><Logo /></div>
        <div className="login-art-copy">
          <span className="login-art-eyebrow">Gestão simples, negócio em dia</span>
          <h2>Seu estoque, em equilíbrio.</h2>
          <p>Acompanhe produtos e movimentações em um só lugar, com clareza para cuidar do que importa.</p>
        </div>
        <p className="login-art-foot text-sm text-sidebar-foreground/60">Controle de estoque • Casa de Queijo Araçar</p>
      </section>

      <section className="login-form-panel">
        <p className="login-art-eyebrow text-primary">Acesso ao sistema</p>
        <h1>Bem-vindo de volta</h1>
        <p>Entre com suas credenciais para continuar.</p>
        <div className="login-form-card">
          <form action={action} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>

            {state?.error && (
              <p className="rounded-lg bg-destructive/10 p-3 text-center text-sm text-destructive">{state.error}</p>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={isPending}>
              {isPending ? 'Entrando...' : 'Entrar no sistema'}
            </Button>
          </form>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Acesso restrito à equipe autorizada</p>
      </section>
    </main>
  )
}
