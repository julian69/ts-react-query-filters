import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css';
import App from './App/App.tsx';
import queryClient from '@/lib/queryClient.ts';

ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </StrictMode>
  );
