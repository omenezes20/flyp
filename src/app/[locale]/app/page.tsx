import { getTranslations } from 'next-intl/server';

const cards = [
  { title: 'Receita do mês', value: 'R$ 128.400', change: '+12%' },
  { title: 'Vendas abertas', value: '42', change: '+4%' },
  { title: 'Clientes ativos', value: '1.238', change: '+8%' },
  { title: 'Tickets em aberto', value: '6', change: '-2%' }
];

const activities = [
  'Venda #V-1203 aprovada',
  'Conta a pagar para Fornecedor XP',
  'Estoque abaixo do mínimo: Produto A',
  'Novo cliente cadastrado: Mercado Lima',
  'Boleto compensado: R$ 3.200'
];

export default async function DashboardPage() {
  const t = await getTranslations('dashboard');

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </header>
      <section className="grid gap-4 md:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{card.title}</p>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-xl font-semibold">{card.value}</span>
              <span className="text-xs text-emerald-500">{card.change}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold">{t('modules')}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              'PDV',
              'Estoque',
              'Compras',
              'Financeiro',
              'Fiscal',
              'Contábil',
              'RH',
              'Control',
              'CRM',
              'ADM',
              'TI',
              'Assina',
              'Desk'
            ].map((module) => (
              <div key={module} className="rounded-xl border border-border bg-muted px-4 py-3 text-sm font-medium">
                {module}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">{t('activities')}</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {activities.map((activity) => (
              <li key={activity}>• {activity}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
