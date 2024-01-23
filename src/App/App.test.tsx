import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest';
import { render, screen } from '@/test/utils';

import App from './App';

const testApp = (route: string, expected: string): void => {
  render(<App />, { initialRoute: route });
  expect(screen.getByText(expected)).toBeInTheDocument();
};

describe('<App />', () => {
  it('should render the offers page when the route is /', () => testApp('/', 'Enter user details'));
  it('should render the Not Found page when the rout is invalid', () => testApp('/whatever', 'No match for'));
});
