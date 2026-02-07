const movements = [
  { id: 'M-34', product: 'Notebook Flyp', qty: -2, reason: 'Venda' },
  { id: 'M-35', product: 'POS Mobile', qty: 10, reason: 'Compra' }
];

export default function StockPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Estoque</h1>
        <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
          Nova movimentação
        </button>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="pb-3">ID</th>
              <th className="pb-3">Produto</th>
              <th className="pb-3">Quantidade</th>
              <th className="pb-3">Motivo</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((movement) => (
              <tr key={movement.id} className="border-t border-border">
                <td className="py-3 font-medium">{movement.id}</td>
                <td className="py-3 text-muted-foreground">{movement.product}</td>
                <td className="py-3">{movement.qty}</td>
                <td className="py-3">{movement.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
