import React from "react";
import { NavLink, useParams } from "react-router-dom";
import BasicInformation from "../../../components/BasicInformation";
import StatisiticsUsages from "../../../components/StatisiticsUsages";
import DeviceInfo from "../../../components/DeviceInfo";
import NavTop from "../../../components/NavTop";

export default function DeviceMonitor() {
  let params = useParams();
  return (
    <div className="bg-gray-100">
      <NavTop />
      <div className="bg-blue-500 flex justify-between py-2 px-10 text-white">
        <div>
          <NavLink to="/devices">Devices</NavLink> / {params.id}
        </div>
        <div></div>
      </div>
      <div className="p-3 flex flex-row gap-3">
        <div className="bg-white w-3/4 p-3">
          <BasicInformation />
          <StatisiticsUsages />
        </div>
        <div className="bg-white w-3/12 p-3">
          <DeviceInfo />
        </div>
      </div>
    </div>
  );
}
