const reports = [
  { name: 'Vendas por período', status: 'Atualizado hoje' },
  { name: 'Contas em aberto', status: 'Atualizado hoje' },
  { name: 'Fluxo de caixa', status: 'Atualizado ontem' }
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Relatórios</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <div key={report.name} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">{report.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{report.status}</p>
            <button className="mt-4 rounded-full border border-border px-4 py-2 text-xs">
              Ver relatório
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
