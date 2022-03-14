import React from "react";
import NavTop from "../../../components/NavTop";
import DevicesList from "../../../components/device/DevicesList";
import DeviceInfo from "../../../components/device/DeviceInfo";

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
        <div className="md:w-3/4 w-full" >
          <DevicesList/>
        </div>
        <div className="bg-white md:w-3/12 p-3m md:block hidden">
          <DeviceInfo />
        </div>
      </div>
    </div>
  );
}
