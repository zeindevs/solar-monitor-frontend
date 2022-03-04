import {
  CogIcon,
  // TerminalIcon
} from "@heroicons/react/outline";
import React from "react";
import { NavLink } from "react-router-dom";

function Devices({ data }) {
  if (data.length <= 0) {
    return (
      <div className="bg-gray-100 text-sm text-center border rounded mb-2 p-3 hover:bg-gray-200 hover:border-gray-300">
        <span>devices not available</span>
      </div>
    );
  }

  return data.map((item, index) => (
    <NavLink
      to={"/devices/" + item?.uid}
      className="bg-gray-100 border rounded mb-2 p-3 flex justify-between items-center hover:bg-gray-200 hover:border-gray-300"
    >
      <div className="flex gap-3">
        <div>
          <p className="text-xs">Device ID</p>
          <p>{item?.uid}</p>
        </div>
        <div>
          <p className="text-xs">Serial Number</p>
          <p>{item?.serial}</p>
        </div>
        <div>
          <p className="text-xs">Owner</p>
          <p>{item?.owner}</p>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        {item?.status ? (
          <p className="bg-green-500 mr-2 text-white rounded-md text-xs px-1">
            Online
          </p>
        ) : (
          <p className="bg-red-500 mr-2 text-white rounded-md text-xs px-1">
            Offline
          </p>
        )}
        {/* <button className="hover:bg-gray-300 p-1 rounded-full">
          <TerminalIcon className="h-5 w-5 text-gray-800" />
        </button> */}
        <button className="hover:bg-gray-300 p-1 rounded-full">
          <CogIcon className="h-5 w-5 text-gray-800" />
        </button>
      </div>
    </NavLink>
  ));
}

export default function DevicesList({ data }) {
  return (
    <div className="bg-white p-3">
      <div className="mb-3 flex justify-between">
        <div>
          <h3 className="font-medium">Devices</h3>
        </div>
        <div>
          <button className="text-xs bg-blue-500 py-1 px-2 rounded-sm text-white hover:bg-blue-600 focus:bg-blue-700">
            Add Device
          </button>
        </div>
      </div>
      <div>
        <Devices data={data} />
      </div>
    </div>
  );
}
