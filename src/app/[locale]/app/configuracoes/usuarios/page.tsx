const users = [
  { name: 'Demo Owner', email: 'demo@flyp.com', role: 'OWNER' }
];

const limit = 1;

export default function UsersPage() {
  const canInvite = users.length < limit;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Usuários</h1>
          <p className="text-sm text-muted-foreground">
            Plano Essence permite até {limit} usuário.
          </p>
        </div>
        <button
          className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
          disabled={!canInvite}
        >
          Convidar usuário
        </button>
      </div>
      {!canInvite ? (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-700">
          Limite atingido. Faça upgrade para adicionar mais usuários.
        </div>
      ) : null}
      <div className="rounded-2xl border border-border bg-card p-6">
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="pb-3">Nome</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t border-border">
                <td className="py-3 font-medium">{user.name}</td>
                <td className="py-3 text-muted-foreground">{user.email}</td>
                <td className="py-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
