import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

import { fireEvent, render, screen } from '@/test/utils';
import UsersForm from "@/components/UsersForm/UsersForm";
import { deserializeUrl, setSearchParams } from './utils';

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

describe('deserializeUrl', () => {
  it('should deserialize URLSearchParams into IFilters object', () => {
    const mockParams = new URLSearchParams("name=John&email=john@example.com&company=ABC&zipcode=12345");
    const result = deserializeUrl(mockParams);

    expect(result).toEqual({
      name: 'John',
      email: 'john@example.com',
      company: 'ABC',
      zipcode: '12345',
    });
  });

  it('should handle missing parameters', () => {
    const mockParams = new URLSearchParams("name=John&zipcode=12345");
    const result = deserializeUrl(mockParams);

    expect(result).toEqual({
      name: 'John',
      email: '',
      company: '',
      zipcode: '12345',
    });
  });
});

describe('setSearchParams', () => {
  it('should set search params in window history', () => {
    const mockFilters = {
      name: 'John',
      email: 'john@example.com',
      company: 'ABC',
      zipcode: '12345',
    };
    setSearchParams(mockFilters);
    expect(window.location.search).toBe('?name=John&email=john%40example.com&company=ABC&zipcode=12345');
  });

  it('should handle undefined filters', () => {
    setSearchParams();
    expect(window.location.search).toBe('');
  });
});