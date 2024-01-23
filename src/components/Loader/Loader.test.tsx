import '@testing-library/jest-dom';
import { render } from '@/test/utils';
import { describe, expect, it } from 'vitest';

import Loader from './Loader';

describe('<Loader />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});