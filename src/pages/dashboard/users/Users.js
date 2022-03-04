import React from "react";
import NavTop from "../../../components/NavTop";
import UsersList from "../../../components/users/UsersList";

export default function Users() {
  return (
    <div className="bg-gray-100">
      <NavTop />
      <div className="bg-blue-500 flex justify-between py-2 px-10 text-white">
        <div>Users</div>
        <div></div>
      </div>
      <div className="p-3 flex flex-row gap-3">
        <div className="w-3/4">
          <UsersList data={[]} />
          </div>
        <div className="bg-white w-3/12 p-3">{/* <DeviceInfo /> */}</div>
      </div>
    </div>
  );
}
