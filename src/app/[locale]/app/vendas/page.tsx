const sales = [
  { id: 'V-1203', customer: 'Mercado Lima', total: 'R$ 3.200', status: 'Pago' },
  { id: 'V-1204', customer: 'Oficina Europa', total: 'R$ 1.480', status: 'Pendente' }
];

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Vendas</h1>
        <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
          Nova venda
        </button>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="pb-3">ID</th>
              <th className="pb-3">Cliente</th>
              <th className="pb-3">Total</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-t border-border">
                <td className="py-3 font-medium">{sale.id}</td>
                <td className="py-3 text-muted-foreground">{sale.customer}</td>
                <td className="py-3">{sale.total}</td>
                <td className="py-3">{sale.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
