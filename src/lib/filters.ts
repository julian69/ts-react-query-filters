import { IFilters, IUser } from "@/types/users";

// All this logic should be handled in the backend.
const filterByZipCode = (user: IUser, zipCode?: string) =>
  zipCode
    ? user.address.zipcode === zipCode
    : true;

const filterByName = (user: IUser, name?: string) =>
  name
    ? user.name.toLowerCase().includes(name.toLowerCase())
    : true;

const filterByEmail = (user: IUser, email?: string) =>
  email
    ? user.email === email
    : true;

const filterByCompany = (user: IUser, companyName?: string) =>
  companyName
    ? user.company.name.toLowerCase().includes(companyName.toLowerCase())
    : true;

const applyFilters = (user: IUser, filters: IFilters): boolean => (
  filterByZipCode(user, filters.zipcode) &&
  filterByName(user, filters.name) &&
  filterByEmail(user, filters.email) &&
  filterByCompany(user, filters.companyName)
);

export const filterUsers = (data: IUser[], filters?: IFilters): IUser[] =>
  !filters
    ? data
    : data.filter((user) => applyFilters(user, filters));