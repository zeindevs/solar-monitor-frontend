import {
  CogIcon,
  // TerminalIcon
} from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deviceSelectors, getAllDevices } from "../../features/DeviceSlice";
import store from "../../store/store";

function Devices({ data }) {
  if (data?.length <= 0) {
    return (
      <div className="bg-gray-100 text-sm text-center border rounded mb-2 p-3 hover:bg-gray-200 hover:border-gray-300">
        <span>devices not available</span>
      </div>
    );
  }

  return data.map((item, index) => (
    <NavLink
      to={"/devices/" + item?.uid}
      key={index}
      className="bg-gray-100 border rounded mb-2 p-3 flex justify-between items-center hover:bg-gray-200 hover:border-gray-300"
    >
      <div className="flex gap-3">
        <div>
          <p className="text-xs">Device ID</p>
          <p>{item?.uid}</p>
        </div>
        <div>
          <p className="text-xs">Device Name</p>
          <p>{item?.name}</p>
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

// const devices = [
//   {
//     uid: "D001",
//     serial: "0000-0000-0000",
//     owner: "owner1@gmail.com",
//     status: true,
//   },
//   {
//     uid: "D002",
//     serial: "0000-0000-0000",
//     owner: "owner1@gmail.com",
//     status: true,
//   },
//   {
//     uid: "D003",
//     serial: "0000-0000-0000",
//     owner: "owner1@gmail.com",
//     status: false,
//   },
// ];

export default function DevicesList() {
  const devices = useSelector(deviceSelectors.selectAll)
  const { device } = store.getState((state) => state.device);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDevices());
  }, [dispatch]);

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
        {device.isFetching ? (
          <div className="bg-gray-100 text-sm text-center border rounded mb-2 p-3 hover:bg-gray-200 hover:border-gray-300">
            <span>load data...</span>
          </div>
        ) : (
          <Devices data={devices} />
        )}
      </div>
    </div>
  );
}
