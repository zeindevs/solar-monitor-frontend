import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionLogout } from "../features/AuthSlice";
import { classNames } from "../helpers/utils";

export default function NavTop() {
  const dispath = useDispatch();

  const handleLogout = () => {
    dispath(actionLogout());
  };
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
              classNames(
                isActive ? "bg-blue-700" : "",
                "py-1 px-3 rounded hover:bg-blue-700 shadow-sm"
              )
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
        <button
          onClick={handleLogout}
          className="text-sm py-1 px-3 rounded bg-red-500 hover:bg-red-600 focus:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
