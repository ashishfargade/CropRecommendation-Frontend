import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

export const Login = ({ setNewUser }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-1/2 h-full">
      <div className="pl-5">
        <div className="flex w-full justify-between">
          <h1 className="pt-4 text-3xl font-serif text-gray-700">Login</h1>
          <AiOutlineRollback
            className="w-8 h-8 mr-5 mt-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
      </div>

      <form class="flex flex-col h-full  justify-center">
        <div class="flex items-center mb-6">
          <div class="w-1/3">
            <label
              class="block text-gray-500 font-bold text-center mb-1 md:mb-0 pr-4"
              for="inline-email"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/5">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="email"
              placeholder="abc@gmail.com"
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/5">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
        </div>

        <div class="flex flex-row justify-center w-full">
          <button
            class="shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="flex flex-row justify-center h-min">
          <p
            onClick={() => setNewUser(true)}
            className="italic text-green-800 mt-3 cursor-pointer"
          >
            New User? Click here to Signup
          </p>
        </div>
      </form>
    </div>
  );
};