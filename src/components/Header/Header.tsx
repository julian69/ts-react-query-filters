import { FC } from 'react';

import logUrl from '@/assets/logo.svg';

const Header: FC = () => (
  <header className="flex justify-center pt-6">
    <a href="https://tanstack.com/" target="_blank">
      <img src={logUrl} alt="hero" width="50" />
    </a>
  </header >
);

export default Header;
