import { FC, SyntheticEvent } from 'react';

interface ButtonProps {
  onClick: (e: SyntheticEvent) => void;
  value: string;
  color?: string;
  isDisabled?: boolean;
  type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({ onClick, value, type, isDisabled, color }) => {
  return (
    <button
      disabled={isDisabled}
      type={type || 'submit'}
      onClick={e => onClick(e)}
      className={`rounded-lg ${color || 'bg-blue-600 text-white'} text-sm px-8 py-2 font-medium  outline-none hover:opacity-80 focus:ring" ${isDisabled ? 'opacity-50' : ''}`}>
      {value}
    </button>
  );
};

export default Button;

