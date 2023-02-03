import React from "react";

const Login = () => {
  return (
    <div>
      <div className="max-w-md ml-52 mt-8">
        <div className="border-t-4 border-blue-400 overflow-hidden rounded shadow-lg">
          <h3 className="text-xl text-center mt-8 mb-8">Welcome back!</h3>
          <div className="px-4 mb-4">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray rounded w-full p-3"
            />
          </div>
          <div className="px-4 mb-4">
            <input
              type="text"
              placeholder="Password"
              className="border border-gray rounded w-full p-3"
            />
          </div>
          <div className="px-4 mb-4 flex gap-5">
            <div className="w-1/2 flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer"
                id="remember-me"
              />
              <label
                for="remember-me"
                className="text-gray-700 text-md cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <div className="w-1/2 text-right">
              <p href="#" className="font-semibold no-underline text-black">
                Forgot your password?
              </p>
            </div>
          </div>
          <div className="px-4 mb-6">
            <button className="border border-blue-500 bg-blue-400 rounded w-full px-4 py-3 text-white font-semibold">
              Sign in
            </button>
          </div>
          <div className="bg-gray-100 text-center text-gray-700 py-5">
            Don't have a account?
            <p className="font-semibold no-underline text-black">
              Signup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
