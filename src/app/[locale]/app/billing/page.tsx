export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Billing</h1>
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Assinatura</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Status atual: <span className="font-semibold text-emerald-500">active</span>
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
            Pagar com cartão (Stripe)
          </button>
          <button className="rounded-full border border-border px-4 py-2 text-sm">
            Pagar com Pix/Boleto (Mercado Pago)
          </button>
        </div>
      </div>
    </div>
  );
}
