import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const demoEmail = process.env.DEMO_USER_EMAIL ?? 'demo@flyp.com';
        const demoPassword = process.env.DEMO_USER_PASSWORD ?? 'demo123';

        if (
          credentials?.email === demoEmail &&
          credentials?.password === demoPassword
        ) {
          return {
            id: 'demo-user',
            email: demoEmail,
            name: 'Demo Owner',
            role: 'OWNER',
            tenantId: 'demo-tenant'
          };
        }
        return null;
      }
    })
  ],
  session: { strategy: 'jwt' as const },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.role = user.role;
        token.tenantId = user.tenantId;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.role = token.role;
      session.user.tenantId = token.tenantId;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
