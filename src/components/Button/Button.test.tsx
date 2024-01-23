import '@testing-library/jest-dom';
import { render } from '@/test/utils';
import { describe, expect, it, vi } from 'vitest';

import Button from './Button.tsx'

describe('<Button />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button value="test" onClick={vi.fn}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});