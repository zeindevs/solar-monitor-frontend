import React from "react";
import NavTop from "../../components/NavTop";

export default function User() {
  return (
    <>
      <NavTop />
      <div className="bg-blue-500 flex justify-between py-2 px-10 text-white">
        <div>Users / Setting</div>
        <div></div>
      </div>
      <div>User</div>
    </>
  );
}
