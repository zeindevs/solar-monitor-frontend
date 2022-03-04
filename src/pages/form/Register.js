import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().min(8).required(),
});

export default function Register() {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit({ fullname, email, phone, password }) {
    dispath()
      .unwarp()
      .then(() => {
        navigate("/");
      })
      .catch();
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white p-5 shadow-sm rounded-md max-w-sm w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 text-center">
            <h2 className="text-2xl">
              <span className="font-medium text-blue-500">Solar</span>
              <span className="">Monitor</span>
            </h2>
          </div>
          <div className="flex flex-col mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500"
              {...register("fullname", { required: true })}
            />
            <span className="text-sm text-red-500">
              {errors.fullname?.message}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500"
              {...register("email", { required: true })}
            />
            <span className="text-sm text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500"
              {...register("phone", { required: true })}
            />
            <span className="text-sm text-red-500">
              {errors.phone?.message}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <label>Password</label>
            <input
              type="password"
              className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500"
              {...register("password", { required: true })}
            />
            <span className="text-sm text-red-500">
              {errors.password?.message}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <button className="py-2 px-3 bg-blue-600 text-white rounded-sm focus:border-blue-700 hover:border-blue-600">
              Register
            </button>
          </div>
          <div className="flex mb-3 justify-center gap-1">
            <span>Have an account?</span>
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
