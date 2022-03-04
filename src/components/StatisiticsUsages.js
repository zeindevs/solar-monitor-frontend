import React from "react";
import ChartACVoltage from "./chart/ChartACVoltage";
import ChartOutputVoltage from "./chart/ChartOutputVoltge";

export default function StatisiticsUsages() {
  return (
    <div className="mb-3">
      <div className="mb-3 flex justify-between">
        <h3 className="font-medium">Statistics Usages</h3>
        <div>
          <button className="text-xs bg-blue-500 py-1 px-2 rounded-l-sm text-white hover:bg-blue-600 focus:bg-blue-700">
            Hour
          </button>
          <button className="text-xs bg-blue-600 py-1 px-2 text-white hover:bg-blue-600 focus:bg-blue-700">
            Day
          </button>
          <button className="text-xs bg-blue-500 py-1 px-2 text-white hover:bg-blue-600 focus:bg-blue-700">
            Week
          </button>
          <button className="text-xs bg-blue-500 py-1 px-2 text-white hover:bg-blue-600 focus:bg-blue-700">
            Month
          </button>
          <button className="text-xs bg-blue-500 py-1 px-2 rounded-r-sm text-white hover:bg-blue-600 focus:bg-blue-700">
            Year
          </button>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap text-center mb-3">
        <div className="bg-gray-100 p-2 rounded w-full">
          {/* <h3 className="text-sm">AC Voltage</h3> */}
          <ChartACVoltage />
        </div>
        <div className="bg-gray-100 p-2 rounded w-full">
          {/* <h3 className="text-sm">Output Voltage</h3> */}
          <ChartOutputVoltage />
        </div>
      </div>
      {/* <div className="flex gap-3 flex-row text-center mb-3">
        <div className="bg-gray-100 p-2 rounded w-2/4">
          <h3 className="text-sm">AC Frequency</h3>
        </div>
        <div className="bg-gray-100 p-2 rounded w-2/4">
          <h3 className="text-sm">Output Frequency</h3>
        </div>
      </div>
      <div className="flex gap-3 flex-row text-center mb-3">
        <div className="bg-gray-100 p-2 rounded w-2/4">
          <h3 className="text-sm">Battery Capacity</h3>
        </div>
        <div className="bg-gray-100 p-2 rounded w-2/4">
          <h3 className="text-sm">Load Percent</h3>
        </div>
      </div> */}
    </div>
  );
}
