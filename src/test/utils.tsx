import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type CustomRenderTypes = {
  initialRoute?: string;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
};

const AllProviders: FC<{ children: ReactElement }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

const customRender = (element: ReactElement, options?: CustomRenderTypes) => {
  const optionsDefault = options || {};
  const { initialRoute, renderOptions } = optionsDefault;

  if (initialRoute) {
    window.history.pushState({}, '', initialRoute);
  }

  return render(
    element,
    { wrapper: AllProviders, ...renderOptions }
  );
};

export * from '@testing-library/react';
export { customRender as render };
