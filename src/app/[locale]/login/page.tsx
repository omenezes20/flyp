'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage({ params }: { params: { locale: string } }) {
  const [email, setEmail] = useState('demo@flyp.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || `/${params.locale}/app`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl
    });

    if (result?.error) {
      setError('Credenciais inválidas.');
      return;
    }

    router.push(callbackUrl);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
        <h1 className="text-2xl font-semibold">Acessar Flyp ERP</h1>
        <p className="mt-2 text-sm text-slate-300">
          Use as credenciais demo: demo@flyp.com / demo123.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-200">Email</label>
            <input
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-white"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
          </div>
          <div>
            <label className="text-sm text-slate-200">Senha</label>
            <input
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-white"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </div>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
