import { FC } from "react";

import { IUser } from "@/types/users";

interface UserItemProps {
  data: IUser;
}

const UserItem: FC<UserItemProps> = ({ data }) => {
  const randomCollectionNumber = Math.floor(Math.random() * 1000) + 1; // Generates a random number between 1 and 1000 to mock the user avatar

  return (
    <li className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto bg-white">
        <a href="#" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
          <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
            <img
              alt="User Avatar"
              className="h-12 w-12 rounded-full ring ring-white"
              src={`https://source.unsplash.com/collection/${randomCollectionNumber}/perfil?face&fit=facearea&facepad=3.25&w=256&h=256&q=0`} />
          </div>
        </a>
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">User</h3>
          <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">{data.name}</a>
          <p className="overflow-hidden pr-7 text-sm">
            {data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}<br />
            Phone: {data.phone}<br />
            Email: {data.email}<br />
            Website: {data.website}
          </p>
          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">Company:<span className="ml-2 mr-3 rounded-full bg-purple-100 px-2 py-0.5 text-purple-900">{data.company.name}</span></div>
            <div className="">Username:<span className="ml-2 mr-3 rounded-full bg-yellow-100 px-2 py-0.5 text-yellow-900">{data.username}</span></div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default UserItem;