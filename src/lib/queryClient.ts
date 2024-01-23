import toast from 'react-hot-toast';
import { QueryCache, QueryClient } from '@tanstack/react-query';

export default new QueryClient({
  queryCache: new QueryCache({
    onError: (_, query) => {
      if (query.meta?.errorMessage) {
        toast.error(
          `${query.meta.errorMessage}`,
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
      }
    },
  }),
});