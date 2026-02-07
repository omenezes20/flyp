const payables = [
  { id: 'P-203', vendor: 'Fornecedor XP', amount: 'R$ 2.100', due: '10/09' }
];

const receivables = [
  { id: 'R-998', customer: 'Mercado Lima', amount: 'R$ 3.200', due: '08/09' }
];

export default function FinancePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Financeiro</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Contas a pagar</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {payables.map((item) => (
              <li key={item.id}>
                {item.vendor} • {item.amount} • venc. {item.due}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Contas a receber</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {receivables.map((item) => (
              <li key={item.id}>
                {item.customer} • {item.amount} • venc. {item.due}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
