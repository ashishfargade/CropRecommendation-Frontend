import React from "react";
import { useNavigate } from "react-router-dom";
import { country_list } from "../data/countryList";
import { AiOutlineRollback } from "react-icons/ai";

export const Signup = ({setNewUser}) => {
  const countries = country_list;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-1/2 h-full px-5">
      <div className="flex w-full justify-between">
        <h1 className="pt-4 text-3xl font-serif text-gray-700">Sign Up</h1>
        <AiOutlineRollback
          className="w-8 h-8 mt-4 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex flex-col w-full h-full justify-evenly lg:pr-9">
        <form>
          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-full-name"
              >
                Email
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="email"
                placeholder="abc@gmail.com"
                required
              />
            </div>
          </div>

          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-full-name"
              >
                Set Password
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="password"
                placeholder="********"
                required
              />
            </div>
          </div>

          <div class="flex items-center w-full mb-6">
            <div class="w-1/3">
              <label
                class="block text-center text-gray-500 font-bold mb-1 pr-4"
                for="inline-full-name"
              >
                Your Farm Area
              </label>
            </div>
            <div class="w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="number"
                placeholder="In metres square"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div class="flex items-center w-1/2 mb-6 pr-4">
              <div class="w-2/5">
                <label
                  class="block text-center text-gray-500 font-bold mb-1"
                  for="inline-full-name"
                >
                  Country
                </label>
              </div>
              <div class="w-3/5">
                <select
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-full-name"
                  defaultValue={"India"}
                >
                  {countries.map((country, id) => (
                    <option key={id}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            <div class="flex items-center w-1/2 mb-6">
              <div class="w-1/3">
                <label
                  class="block text-center text-gray-500 font-bold mb-1"
                  for="inline-full-name"
                >
                  Zip Code
                </label>
              </div>
              <div class="w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="inline-full-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              className="bg-green-900 px-4 py-1 rounded-md text-white shadow-md shadow-gray-500"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
