import React from "react";
import { NavLink } from "react-router-dom";

export default function NavTop() {
  return (
    <div className="bg-blue-600 flex text-white px-5 py-2 items-center justify-between">
      <div className="flex gap-2 items-center">
        <div>
          <NavLink to="/" className="text-xl">
            <span className="font-medium text-blue-200">Solar</span>
            <span className="">Monitor</span>
          </NavLink>
        </div>
        <div className="flex gap-1 items-center">
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-3 rounded-md bg-blue-700 hover:bg-blue-700 shadow-sm"
                : "py-1 px-3 rounded-md hover:bg-blue-700"
            }
          >
            Stats
          </NavLink> */}
          <NavLink
            to="/devices"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-3 rounded-md bg-blue-700 hover:bg-blue-700 shadow-sm"
                : "py-1 px-3 rounded-md hover:bg-blue-700"
            }
          >
            Devices
          </NavLink>
          {/* <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-3 rounded-md bg-blue-700 hover:bg-blue-700 shadow-sm"
                : "py-1 px-3 rounded-md hover:bg-blue-700"
            }
          >
            Users
          </NavLink> */}
        </div>
      </div>
      <div>
        <p>email@gmail.com</p>
      </div>
    </div>
  );
}
