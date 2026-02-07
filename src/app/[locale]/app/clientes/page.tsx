const customers = [
  { name: 'Mercado Lima', email: 'contato@lima.com', status: 'Ativo' },
  { name: 'Oficina Europa', email: 'equipe@oficinaeuropa.com', status: 'Ativo' },
  { name: 'Concessionária Ponto', email: 'vendas@ponto.com', status: 'Prospect' }
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Clientes</h1>
        <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
          Novo cliente
        </button>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="pb-3">Nome</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.email} className="border-t border-border">
                <td className="py-3 font-medium">{customer.name}</td>
                <td className="py-3 text-muted-foreground">{customer.email}</td>
                <td className="py-3">{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
