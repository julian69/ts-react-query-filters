import { IFilters } from "@/types/users";

export const deserializeUrl = (params: URLSearchParams): IFilters => ({
  name: params.get('name') || '',
  email: params.get('email') || '',
  company: params.get('company') || '',
  zipcode: params.get('zipcode') || '',
});


