import type React from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { href: 'app', label: 'Dashboard' },
  { href: 'app/clientes', label: 'Clientes' },
  { href: 'app/produtos', label: 'Produtos' },
  { href: 'app/fornecedores', label: 'Fornecedores' },
  { href: 'app/vendas', label: 'Vendas' },
  { href: 'app/financeiro', label: 'Financeiro' },
  { href: 'app/estoque', label: 'Estoque' },
  { href: 'app/relatorios', label: 'Relatórios' },
  { href: 'app/modulos', label: 'Módulos' },
  { href: 'app/billing', label: 'Billing' },
  { href: 'app/configuracoes/usuarios', label: 'Usuários' }
];

export default function AppLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href={`/${params.locale}/app`} className="text-lg font-semibold">
            Flyp ERP
          </Link>
          <nav className="hidden gap-4 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={`/${params.locale}/${item.href}`} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href={`/${params.locale}/login`}
            className="rounded-full border border-border px-4 py-2 text-sm"
          >
            Sair
          </Link>
        </div>
      </header>
      <main className="px-6 py-8">{children}</main>
      <div className="fixed bottom-6 right-6 w-72 rounded-2xl border border-border bg-card p-4 shadow-lg">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span>Chat com Fy</span>
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
        <div className="mt-3 space-y-2 text-xs text-muted-foreground">
          <p>Fy: Posso ajudar com vendas, cadastros ou relatórios.</p>
          <p>Você: criar venda</p>
          <p>Fy: Abra o módulo Vendas e clique em "Nova venda".</p>
        </div>
      </div>
    </div>
  );
}
