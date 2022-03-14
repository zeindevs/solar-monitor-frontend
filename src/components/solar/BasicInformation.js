import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentSolar, solarSelectors } from "../../features/SolarSlice";
// import store from "../../store/store";

export default function BasicInformation() {
  const dispatch = useDispatch();
  const params = useParams();
  // const { solar } = store.getState((state) => state.solar);
  const solars = useSelector(solarSelectors.selectAll);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCurrentSolar(params.id));
    }, 2000);
  }, [solars, dispatch, params]);

  // console.log(solars);

  return (
    <div className="mb-3 bg-white p-3">
      <div className="mb-3 flex justify-between">
        <h3 className="font-medium">Basic Information</h3>
        <div>
          <button className="text-xs bg-green-500 py-1 px-2 rounded-sm text-white">
            Online
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 flex-wrap text-center">
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">AC Voltage</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].ac_voltage : "-"}
            <span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">AC Frequency</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].ac_frequency : "-"}
            <span className="text-base">Hz</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">PV Input Voltage</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].pv_input_voltage : "-"}
            <span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">PV Input Current</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].pv_input_current : "-"}
            <span className="text-base">A</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Battery Capacity</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].battery_capacity : "-"}
            <span className="text-base">%</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Charging Current</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].charging_current : "-"}
            <span className="text-base">A</span>
          </p>
        </div>
        {/*  */}
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Battery Discarge Current</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].battery_discharge_current : "-"}
            <span className="text-base">A</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Output Voltage</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].output_voltage : "-"}
            <span className="text-base">V</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Output Frequency</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].output_frequency : "-"}
            <span className="text-base">Hz</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Output Apparent Power</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].output_apparent_power : "-"}
            <span className="text-base">VA</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Output Active Power</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].output_active_power : "-"}
            <span className="text-base">W</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 rounded">
          <h3 className="text-xs">Load Percent</h3>
          <p className="text-2xl">
            {solars[0] ? solars[0].load_percent : "-"}
            <span className="text-base">%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
