import { StrictMode } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';

export const renderWithQueryClient = (ui: ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </StrictMode>
  );
};
