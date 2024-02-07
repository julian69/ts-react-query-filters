import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest';
import { render, screen } from '@/test/utils';

import App from './App';

describe('<App />', () => {
  it('should render the offers page when the route is /', () => {
    render(<App />);
    expect(screen.getByText('Enter user details')).toBeInTheDocument();
  });
});
