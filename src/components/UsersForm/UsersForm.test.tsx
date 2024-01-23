import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

import { fireEvent, render, screen } from '@/test/utils';
import UsersForm from "@/components/UsersForm/UsersForm";

describe('<UsersForm />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<UsersForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should enable buttons on change', () => {
    render(<UsersForm />);
    const inputName = screen.getByLabelText('Name');
    const submit = screen.getByText('Find Users');
    const reset = screen.getByText('Find Users');

    expect(submit).toBeDisabled();
    expect(reset).toBeDisabled();

    fireEvent.change(inputName, { target: { value: '23' } });

    expect(submit).not.toBeDisabled();
    expect(reset).not.toBeDisabled();
  });

  it('should reset form when "Reset" button is clicked', () => {
    render(<UsersForm />);
    const input = screen.getByLabelText('Name');

    fireEvent.change(input, { target: { value: 'gra' } });

    const resetButton = screen.getByText('Reset');
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;

    fireEvent.click(resetButton);
    expect(nameInput.value).toBe('');
  });
});
