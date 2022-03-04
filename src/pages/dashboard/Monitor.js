import React from "react";
import NavTop from "../../components/NavTop";

export default function Monitor() {
  return (
    <div className="bg-gray-100">
      <NavTop />
      <div className="bg-blue-500 flex justify-between py-2 px-10 text-white">
        <div>Dashboard</div>
        <div></div>
      </div>
    </div>
  );
}
