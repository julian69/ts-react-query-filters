import { ChangeEvent, FC } from 'react';

interface InputTextProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const InputText: FC<InputTextProps> = ({ value, label, onChange }) => {
  const id = label.split(' ').join().toLowerCase();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  return (
    <div className="mr-5">
      <label htmlFor={id} className="text-sm font-medium text-stone-600">{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
    </div>
  );
};

export default InputText;