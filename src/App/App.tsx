import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

// import AppRoutes from '@/Routes';
import Header from '@/components/Header/Header';
import SearchUsers from '@/pages/SearchUsers';

const App: FC = () => (
  <>
    <Header />
    <main className="container mx-auto">
      <SearchUsers />
      <Toaster
        reverseOrder={false}
        position="bottom-right"
      />
    </main>
  </>
);

export default App;
