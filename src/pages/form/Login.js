import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionLogin } from "../../features/AuthSlice";
import store from "../../store/store";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const { auth } = store.getState((state) => state.auth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit({ email, password }) {
    dispatch(actionLogin({ email, password }))
  }

  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-5 shadow-sm rounded-md max-w-sm w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 text-center">
            <h2 className="text-2xl">
              <span className="font-medium text-blue-500">Solar</span>
              <span className="">Monitor</span>
            </h2>
          </div>
          {auth?.isError && (
            <div className="mb-3 text-sm text-center border rounded bg-red-300 p-2 border-red-400">
              <span className="text-red-700">{auth?.errorMessage}</span>
            </div>
          )}
          <div className="flex flex-col mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500"
              {...register("email", { required: true })}
              autoComplete="email"
            />
            <span className="text-sm text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <label>Password</label>
            <input
              type="password"
              className="bg-white py-2 px-3 border outline-none border-gray-300 rounded-sm focus:border-blue-500"
              {...register("password", { required: true })}
              autoComplete="password"
            />
            <span className="text-sm text-red-500">
              {errors.password?.message}
            </span>
          </div>
          <div className="flex flex-col mb-3">
            <a href="/forget-password" className="text-blue-500">
              Forget password?
            </a>
          </div>
          <div className="flex flex-col mb-3">
            <button className="py-2 px-3 bg-blue-600 text-white rounded-sm focus:border-blue-700 hover:border-blue-600">
              Login
            </button>
          </div>
          <div className="flex mb-3 justify-center gap-1">
            <span>Don't have account?</span>
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
