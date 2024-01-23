import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css';
import App from './App/App.tsx';
import queryClient from '@/lib/queryClient.ts';

ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools initialIsOpen />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
