const modules = [
  { name: 'PDV', tier: 'Essence' },
  { name: 'Estoque', tier: 'Essence' },
  { name: 'Compras', tier: 'Pro' },
  { name: 'Financeiro', tier: 'Pro' },
  { name: 'Fiscal', tier: 'Max' },
  { name: 'Contábil', tier: 'Max' },
  { name: 'RH', tier: 'Ultimate' },
  { name: 'CRM', tier: 'Pro' },
  { name: 'ADM', tier: 'Max' },
  { name: 'TI', tier: 'Ultimate' },
  { name: 'Assina', tier: 'Pro' },
  { name: 'Desk', tier: 'Pro' }
];

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Módulos do Sistema</h1>
      <p className="text-muted-foreground">
        Ative módulos conforme o plano e as feature flags do seu tenant.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {modules.map((module) => (
          <div key={module.name} className="rounded-2xl border border-border bg-card p-4">
            <h2 className="text-lg font-semibold">{module.name}</h2>
            <p className="mt-2 text-xs text-muted-foreground">Disponível no {module.tier}</p>
            {module.tier !== 'Essence' ? (
              <button className="mt-4 rounded-full border border-border px-4 py-2 text-xs">
                Faça upgrade
              </button>
            ) : (
              <button className="mt-4 rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">
                Ativo
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
