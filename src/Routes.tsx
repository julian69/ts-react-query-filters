import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import NoMatch from '@/pages/NoMatch';
import SearchUsers from '@/pages/SearchUsers';

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<SearchUsers />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default AppRoutes;
