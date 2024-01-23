import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@/test/utils';
import { describe, expect, it, vi } from 'vitest';

import InputText from './InputText';

const mockedProps = {
  value: 'test',
  label: 'test',
  onChange: vi.fn(),
};

describe('<InputText />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<InputText {...mockedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show the correct props and trigger the onChange with the right value', () => {
    render(<InputText {...mockedProps} />);
    const expected = 'hi';
    const input = screen.getByDisplayValue(mockedProps.value);
    const value = screen.getByText(mockedProps.value);
    const label = screen.getByText(mockedProps.label);

    expect(value).toBeInTheDocument();
    expect(label).toBeInTheDocument();

    fireEvent.change(input, { target: { value: expected } });

    expect(mockedProps.onChange).toHaveBeenCalledWith(expected);
  });
});