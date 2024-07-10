import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Register <span className="text-blue-400"> With QikChat</span>
        </h1>

        <form className="mt-4">
          <div className="mb-4">
            <label className="lebel p-1">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="John Doe "
              className="w-full input input-bordered h-10 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="lebel p-1">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="John-doe"
              className="w-full input input-bordered h-10 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="lebel p-1">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10 mt-1"
            />
          </div>
          <div>
            <label className="lebel p-1">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 mt-1"
            />
          </div>
          <div className="flex">
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900 h-4 w-4"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900 h-4 w-4"
                />
              </label>
            </div>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
