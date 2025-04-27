import React from "react";
import shoeSignup from "../assets/shoeSignup.svg";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="flex w-[80%] shadow-2xl rounded-lg overflow-hidden bg-white">
        {/* Left Image Section */}
        <div className="w-1/2 flex justify-center items-center bg-blue-100">
          <img
            src={shoeSignup}
            alt="Signup Shoe"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Signup Form Section */}
        <form className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Create Your Account:
          </h1>

          <div className="flex gap-6">
            {/* Left side of inputs */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="text-sm font-medium text-gray-900 my-2">
                Enter Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2"
              />

              <label htmlFor="email" className="text-sm font-medium text-gray-900 my-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2"
              />

              <label htmlFor="password" className="text-sm font-medium text-gray-900 my-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2"
              />
            </div>

            {/* Right side of inputs */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="gender" className="text-sm font-medium text-gray-900 my-2">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="age" className="text-sm font-medium text-gray-900 my-2 mt-4">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="18"
                className="rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2"
              />

              <label htmlFor="mobile" className="text-sm font-medium text-gray-900 my-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="9876543210"
                className="rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2"
              />
            </div>
          </div>

          {/* Centered Terms and Button Section */}
          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center mb-4">
              <input type="checkbox" name="terms" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the{" "}
                <span className="text-blue-600 cursor-pointer">Terms and Conditions</span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-8 rounded-2xl hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
