const products = [
  { name: 'Notebook Flyp', type: 'Produto', price: 'R$ 4.900' },
  { name: 'Assinatura Suporte', type: 'Serviço', price: 'R$ 490' },
  { name: 'POS Mobile', type: 'Produto', price: 'R$ 1.200' }
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Produtos & Serviços</h1>
        <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
          Novo produto
        </button>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="pb-3">Nome</th>
              <th className="pb-3">Tipo</th>
              <th className="pb-3">Preço</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name} className="border-t border-border">
                <td className="py-3 font-medium">{product.name}</td>
                <td className="py-3 text-muted-foreground">{product.type}</td>
                <td className="py-3">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
