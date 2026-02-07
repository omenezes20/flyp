import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';

export default async function HomePage({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('landing');
  const locale = params.locale;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-xl font-semibold">Flyp ERP</div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href={`/${locale}/#modules`} className="text-sm text-slate-200 hover:text-white">
            {t('modules')}
          </Link>
          <Link href={`/${locale}/pricing`} className="text-sm text-slate-200 hover:text-white">
            {t('pricing')}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href={`/${locale}/login`}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950"
          >
            {t('access')}
          </Link>
        </div>
      </header>

      <main className="px-8 pb-20">
        <section className="mx-auto max-w-5xl py-24 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {t('subtitle')}
          </p>
          <h1 className="mt-6 text-4xl font-semibold text-white md:text-6xl">Flyp ERP</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            {t('headline')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}/onboarding`}
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white"
            >
              {t('ctaStart')}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white"
            >
              {t('ctaPlans')}
            </Link>
          </div>
        </section>

        <section id="modules" className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            t('moduleRetail'),
            t('moduleMarket'),
            t('moduleWorkshop'),
            t('moduleDealer'),
            t('moduleServices'),
            t('moduleControl')
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm text-slate-300">{t('moduleDesc')}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
