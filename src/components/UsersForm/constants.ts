import { FILTERS } from "@/constants/filters";
import { IFilters } from "@/types/users";

export const filtersInitialState: IFilters = {
  [FILTERS.NAME]: '',
  [FILTERS.EMAIL]: '',
  [FILTERS.COMPANY]: '',
  [FILTERS.ZIPCODE]: '',
};