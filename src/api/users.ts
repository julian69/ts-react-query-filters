import { filterUsers } from "@/lib/filters";
import { IFilters, IUser } from "@/types/users";

export const getUsers = async (filters?: IFilters): Promise<IUser[]> => {
  const response = await fetch(import.meta.env.VITE_MOCK_API_URL);
  const data = await response.json();
  return filterUsers(data, filters); // In a real world scenario, this filtering should be done in the backend.
}

