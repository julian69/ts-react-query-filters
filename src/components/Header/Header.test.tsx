import '@testing-library/jest-dom';
import { render } from '@/test/utils';
import { describe, expect, it } from 'vitest';

import Header from './Header';

describe('<Header />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});