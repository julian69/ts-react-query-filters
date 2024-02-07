import { IFilters } from "@/types/users";
import { searchParams } from "./constants";

export const deserializeUrl = (params: URLSearchParams): IFilters => ({
  name: params.get('name') || '',
  email: params.get('email') || '',
  company: params.get('company') || '',
  zipcode: params.get('zipcode') || '',
});

export const setSearchParams = (filters?: IFilters) => {
  if (!filters) {
    window.history.pushState(null, '', '/');
    return;
  }

  Object.keys(filters).forEach((key) => {
    searchParams.has(key)
      ? searchParams.set(key, filters[key])
      : searchParams.append(key, filters[key]);
  });

  window.history.pushState(null, '', `?${searchParams.toString()}`);
};