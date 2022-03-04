import React from "react";

export default function BasicInformation() {
  return (
    <div className="mb-3">
      <div className="mb-3 flex justify-between">
        <h3 className="font-medium">Basic Information</h3>
        <div>
          <button className="text-xs bg-green-500 py-1 px-2 rounded-sm text-white">
            Online
          </button>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap text-center">
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">AC Voltage</h3>
          <p className="text-2xl">
            0<span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">AC Frequency</h3>
          <p className="text-2xl">
            0<span className="text-base">Hz</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">PV Input Voltage</h3>
          <p className="text-2xl">
            0<span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">PV Input Current</h3>
          <p className="text-2xl">
            0<span className="text-base">A</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Battery Capacity</h3>
          <p className="text-2xl">
            0<span className="text-base">%</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Charging Current</h3>
          <p className="text-2xl">
            0<span className="text-base">A</span>
          </p>
        </div>
        {/*  */}
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Battery Discarge Current</h3>
          <p className="text-2xl">
            0<span className="text-base">A</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Output Voltage</h3>
          <p className="text-2xl">
            0<span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Output Frequency</h3>
          <p className="text-2xl">
            0<span className="text-base">Hz</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Output Apparent Power</h3>
          <p className="text-2xl">
            0<span className="text-base">VA</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Output Active Power</h3>
          <p className="text-2xl">
            0<span className="text-base">W</span>
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <h3 className="text-sm">Load Percent</h3>
          <p className="text-2xl">
            0<span className="text-base">%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
