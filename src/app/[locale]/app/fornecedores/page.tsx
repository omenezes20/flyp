const suppliers = [
  { name: 'Fornecedor XP', email: 'contato@xp.com', status: 'Ativo' },
  { name: 'Tech Parts', email: 'sales@techparts.com', status: 'Ativo' }
];

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Fornecedores</h1>
        <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
          Novo fornecedor
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
            {suppliers.map((supplier) => (
              <tr key={supplier.email} className="border-t border-border">
                <td className="py-3 font-medium">{supplier.name}</td>
                <td className="py-3 text-muted-foreground">{supplier.email}</td>
                <td className="py-3">{supplier.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
