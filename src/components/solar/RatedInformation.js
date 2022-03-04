import React from "react";

export default function RatedInformation() {
  return (
    <div className="mb-3 bg-white p-3">
      <div className="mb-3 flex justify-between">
        <h3 className="font-medium">Rated Information</h3>
      </div>
      <div className="flex gap-3 flex-wrap text-center">
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal AC Voltage</h3>
          <p className="text-2xl">
            0<span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal AC Current</h3>
          <p className="text-2xl">
            0<span className="text-base">A</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Rated Battery Voltage</h3>
          <p className="text-2xl">
            0<span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Voltage</h3>
          <p className="text-2xl">
            0<span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Frequency</h3>
          <p className="text-2xl">
            0<span className="text-base">Hz</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Current</h3>
          <p className="text-2xl">
            0<span className="text-base">A</span>
          </p>
        </div>
        {/*  */}
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Apparent Current</h3>
          <p className="text-2xl">
            0<span className="text-base">VA</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-sm">Nominal Output Active Power</h3>
          <p className="text-2xl">
            0<span className="text-base">W</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}
