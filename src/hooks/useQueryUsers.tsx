import { useQuery } from '@tanstack/react-query';

import { getUsers } from '@/api/users';
import { IFilters } from '@/types/users';

export const usersQueryKey = ["users"];

export const useQueryUsers = (filters?: IFilters) => useQuery({
  queryKey: usersQueryKey,
  queryFn: () => getUsers(filters),
  meta: { errorMessage: 'Failed to fetch users' },
  refetchOnWindowFocus: false,
  enabled: false
});

