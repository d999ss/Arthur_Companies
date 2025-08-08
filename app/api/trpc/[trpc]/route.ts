import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

import { createContext } from '@/lib/trpc/context';
import { appRouter } from '@/lib/trpc/routers/_app';

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext({ req }),
    onError: ({ path, error }) => {
      if (process.env.NODE_ENV === 'development') {
        console.error(
          `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
        );
      }
    },
  });

export { handler as GET, handler as POST };
