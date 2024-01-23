import { FILTERS } from "@/constants/filters";

export interface IFilters {
  [key: string]: any;
  [FILTERS.NAME]: string;
  [FILTERS.EMAIL]: string;
  [FILTERS.COMPANY]: string;
  [FILTERS.ZIPCODE]: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

