'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function OnboardingPage({ params }: { params: { locale: string } }) {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get('plan') ?? 'essence';
  const [plan, setPlan] = useState(initialPlan);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-10">
        <h1 className="text-3xl font-semibold">Onboarding Flyp ERP</h1>
        <p className="mt-2 text-slate-300">
          Crie sua empresa, escolha o plano e inicie o checkout.
        </p>
        <div className="mt-8 grid gap-4">
          <label className="text-sm">Nome da empresa</label>
          <input className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2" placeholder="Flyp Store" />
          <label className="text-sm">Plano</label>
          <select
            className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2"
            value={plan}
            onChange={(event) => setPlan(event.target.value)}
          >
            <option value="essence">Essence</option>
            <option value="pro">Pro</option>
            <option value="max">Max</option>
            <option value="ultimate">Ultimate</option>
          </select>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold">
            Iniciar Checkout
          </button>
          <Link
            href={`/${params.locale}/app`}
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold"
          >
            Ir para o app demo
          </Link>
        </div>
      </div>
    </div>
  );
}
