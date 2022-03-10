import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../helpers/utils";

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
              classNames(isActive ? 'bg-blue-700' : '', 'py-1 px-3 rounded hover:bg-blue-700 shadow-sm') 
            }
          >
            Devices
          </NavLink>
          {/* <NavLink
            to="/users"
            className={({ isActive }) =>
              classNames(isActive ? 'bg-blue-700' : '', 'py-1 px-3 rounded hover:bg-blue-700 shadow-sm') 
            }
          >
            Users
          </NavLink> */}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p>email@gmail.com</p>
        <button className="text-sm py-1 px-3 rounded bg-red-500 hover:bg-red-600 focus:bg-red-600">Logout</button>
      </div>
    </div>
  );
}
