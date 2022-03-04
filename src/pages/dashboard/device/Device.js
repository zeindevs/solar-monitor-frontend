import React from "react";
import NavTop from "../../../components/NavTop";
import DevicesList from "../../../components/DevicesList";
import DeviceInfo from "../../../components/DeviceInfo";

const devices = [
  {
    uid: "D001",
    serial: "0000-0000-0000",
    status: true,
  },
  {
    uid: "D002",
    serial: "0000-0000-0000",
    status: true,
  },
  {
    uid: "D003",
    serial: "0000-0000-0000",
    status: false,
  },
];

export default function Device() {
  return (
    <div className="bg-gray-100">
      <NavTop />
      <div className="bg-blue-500 flex justify-between py-2 px-10 text-white">
        <div>
          <h3>Devices</h3>
        </div>
        <div></div>
      </div>
      <div className="p-3 flex flex-row gap-3">
        <div className="bg-white w-3/4 p-3">
          <DevicesList data={devices} />
        </div>
        <div className="bg-white w-3/12 p-3">
          <DeviceInfo />
        </div>
      </div>
    </div>
  );
}
