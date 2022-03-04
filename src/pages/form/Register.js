import React from "react";

export default function Register() {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white p-5 shadow-sm rounded-md max-w-sm w-full">
        <div className="mb-3 text-center">
          <h2 className="text-2xl">
            <span className="font-medium text-blue-500">Solar</span>
            <span className="">Monitor</span>
          </h2>
        </div>
        <div className="flex flex-col mb-3">
          <label>Full Name</label>
          <input className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500" />
        </div>
        <div className="flex flex-col mb-3">
          <label>Email Address</label>
          <input className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500" />
        </div>
        <div className="flex flex-col mb-3">
          <label>Phone Number</label>
          <input className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500" />
        </div>
        <div className="flex flex-col mb-3">
          <label>Password</label>
          <input className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500" />
        </div>
        <div className="flex flex-col mb-3">
          <label>Repeat Password</label>
          <input className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500" />
        </div>
        <div className="flex flex-col mb-3">
          <button className="py-2 px-3 bg-blue-600 text-white rounded-sm focus:border-blue-700 hover:border-blue-600">Register</button>
        </div>
        <div className="flex mb-3 justify-center gap-1">
          <span>Have an account?</span>
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
