import { SyntheticEvent, useEffect, useState } from 'react';

import { IFilters } from '@/types/users';
import { deserializeUrl, setSearchParams } from '../utils';
import { filtersInitialState, searchParams } from '../constants';
import { useQueryClient } from '@tanstack/react-query';
import { useQueryUsers, usersQueryKey } from '@/hooks/useQueryUsers';

export const useUsersForm = () => {
  const urlFilters = deserializeUrl(searchParams);
  const defaultFilterValues = Object.values(urlFilters).some(Boolean) ? urlFilters : filtersInitialState;

  const [filters, setFilters] = useState<IFilters>(defaultFilterValues);

  const queryClient = useQueryClient();
  const { refetch } = useQueryUsers(filters);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setSearchParams(filters);
    refetch();
  }

  const handleReset = (event: SyntheticEvent) => {
    event.preventDefault();
    setFilters(filtersInitialState);
    setSearchParams();
    queryClient.resetQueries({ queryKey: usersQueryKey });
  };

  const handleFiltersChange = (type: string, value: any) => setFilters(filters => ({
    ...filters,
    [type]: value
  }));

  useEffect(() => {
    if (searchParams.size) {
      setFilters(urlFilters);
      refetch();
    }
  }, []);

  return ({
    filters,
    handleReset,
    handleSubmit,
    handleFiltersChange
  });
};

export default useUsersForm;
