import { FC } from 'react';

import Loader from '@/components/Loader/Loader';
import UserItem from '@/components/UserItem/UserItem';
import { useQueryUsers } from '@/hooks/useQueryUsers';


const UsersList: FC = () => {
  const { data, isLoading, isFetched } = useQueryUsers();

  const renderUsers = () => data?.length
    ? data.map(user => <UserItem key={user.id} data={user} />)
    : 'No users found'

  return isFetched ? (
    <>
      <h2 className="font-bold text-lg mb-4">Users</h2>
      {
        isLoading
          ? <div className="w-full flex justify-center">
            <Loader />
          </div>
          : <ul>{renderUsers()}</ul>
      }
    </>
  ) : null
}

export default UsersList;
