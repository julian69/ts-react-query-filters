import { FC } from 'react';

import useUsersForm from './hooks/useUsersForm';
import { FILTERS } from '@/constants/filters';
import Button from '@/components/Button/Button';
import InputText from '@/components/InputText/InputText';

const UsersForm: FC = () => {
  const { filters, handleSubmit, handleReset, handleFiltersChange } = useUsersForm();

  return (
    <form className="rounded-xl md:border border-gray-200 bg-white p-6 pt-0 mb-10 mt-3 md:shadow-lg">
      <header className="py-4 flex justify-center md:justify-start">
        <h2 className="font-bold">Enter user details</h2>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <InputText
          label={'Name'}
          value={filters[FILTERS.NAME]}
          onChange={value => handleFiltersChange(FILTERS.NAME, value)} />
        <InputText
          label={'Email'}
          value={filters[FILTERS.EMAIL]}
          onChange={value => handleFiltersChange(FILTERS.EMAIL, value)} />
        <InputText
          label={'Company'}
          value={filters[FILTERS.COMPANY]}
          onChange={value => handleFiltersChange(FILTERS.COMPANY, value)} />
        <InputText
          label={'Zip Code'}
          value={filters[FILTERS.ZIPCODE]}
          onChange={value => handleFiltersChange(FILTERS.ZIPCODE, value)} />
      </div>
      <footer className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex pt-4">
        <Button
          value="Reset"
          onClick={handleReset}
          color="bg-gray-200 text-gray-700"
          isDisabled={!Object.values(filters).some(Boolean)} />
        <Button
          value="Find Users"
          onClick={handleSubmit}
          isDisabled={!Object.values(filters).some(Boolean)} />
      </footer>
    </form>
  );
};

export default UsersForm;
