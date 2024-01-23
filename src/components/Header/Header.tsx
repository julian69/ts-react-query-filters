import { FC } from 'react';
import { Link } from 'react-router-dom';

import logUrl from '@/assets/logo.svg';

const Header: FC = () => (
  <header className="flex justify-center pt-6">
    <Link to="https://tanstack.com/" target="_blank">
      <img src={logUrl} alt="hero" width="50" />
    </Link>
  </header >
);

export default Header;
