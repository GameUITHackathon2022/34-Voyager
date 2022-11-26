import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FC, ReactNode } from "react";
import { useState } from "react";
import { queryClient } from "./lib/queryClient";

import "./lib/dayjsPlugins";

type Props = {
  children: ReactNode;
};

export const AppProviders: FC<Props> = ({ children }) => {
  // This ensures that data is not shared
  // between different users and requests
  const [queryClientState] = useState(() => queryClient);

  return (
    <QueryClientProvider client={queryClientState}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
