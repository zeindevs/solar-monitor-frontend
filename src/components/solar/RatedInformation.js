import React from "react";
import { useSelector } from "react-redux";
import { solarSelectors } from "../../features/SolarSlice";

export default function RatedInformation() {
  const solars = useSelector(solarSelectors.selectAll);

  return (
    <div className="mb-3 bg-white p-3">
      <div className="mb-3 flex justify-between">
        <h3 className="font-medium">Rated Information</h3>
      </div>
      <div className="flex gap-3 flex-wrap text-center">
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal AC Voltage</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_ac_voltage : "-"}
            <span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal AC Current</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_ac_current : "-"}
            <span className="text-base">A</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Rated Battery Voltage</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].rated_battery_voltage : "-"}
            <span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Voltage</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_output_voltage : "-"}
            <span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Frequency</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_output_frequency : "-"}
            <span className="text-base">Hz</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Current</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_output_current : "-"}
            <span className="text-base">A</span>
          </p>
        </div>
        {/*  */}
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Apparent Power</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_output_apparent_power : "-"}
            <span className="text-base">VA</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Active Power</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].nominal_output_active_power : "-"}
            <span className="text-base">W</span>
          </p>
        </div>
      </div>
    </div>
  );
}
