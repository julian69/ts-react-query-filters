import { FC } from "react";

import UsersForm from "@/components/UsersForm/UsersForm";
import UsersList from "@/components/UsersList/UsersList";

const SearchUsers: FC = () => (
  <section className="mt-10 w-full">
    <UsersForm />
    <UsersList />
  </section >
);

export default SearchUsers;