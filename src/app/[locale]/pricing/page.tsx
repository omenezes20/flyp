import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';

const plans = [
  {
    key: 'essence',
    name: 'Essence',
    price: 'R$ 89,90',
    users: '1 usuário',
    features: ['PDV básico', 'Estoque', 'Relatórios']
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 'R$ 299,90',
    users: '3 usuários',
    features: ['Todos os módulos', 'IA Fy Lite', 'Multi-loja', 'Suporte']
  },
  {
    key: 'max',
    name: 'Max',
    price: 'R$ 599,90',
    users: '5 usuários',
    features: ['Todos os módulos', 'IA Fy Standard', 'Integrações API', 'Suporte 24/7']
  },
  {
    key: 'ultimate',
    name: 'Ultimate',
    price: 'R$ 899,90',
    users: 'Usuários ilimitados',
    features: ['Todos os módulos', 'IA Fy Premium', 'Multi-empresa', 'Gerente dedicado']
  }
];

export default async function PricingPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('pricing');
  const locale = params.locale;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <Link href={`/${locale}`} className="text-xl font-semibold">
          Flyp ERP
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </header>
      <main className="px-8 pb-20">
        <section className="mx-auto max-w-4xl text-center py-16">
          <h1 className="text-4xl font-semibold">{t('title')}</h1>
          <p className="mt-4 text-slate-300">{t('subtitle')}</p>
        </section>
        <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.key} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-300">{plan.users}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Link
                href={`/${locale}/onboarding?plan=${plan.key}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold"
              >
                {t('cta')}
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
