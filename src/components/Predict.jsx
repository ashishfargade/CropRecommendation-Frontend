import React from "react";

export const Predict = () => {

  const prediction = null
// After fetching the prediction assign it to this value.

  return (
    <div className="w-full p-10 flex flex-col">
      <div className="text-gray-700 font-bold text-4xl flex flex-row justify-center">
        <h1>PREDICT</h1>
      </div>

      <div className="border-2 border-green-700 pb-5 pt-2 m-11 mx-20 shadow-2xl rounded-xl">
        <form class="w-full pr-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-20 ">
              <label className="self-center p-2 font-medium">Nitrogen</label>
              <input
                type="number"
                className="p-1 bg-gray-200 border border-green-800 rounded-md"
              />
            </div>
            <div className="flex flex-col w-20 ">
              <label className="self-center p-2 font-medium">Phosphorus</label>
              <input
                type="number"
                className="p-1 bg-gray-200 border border-green-800 rounded-md"
              />
            </div>
            <div className="flex flex-col w-20 ">
              <label className="self-center p-2 font-medium">Potassium</label>
              <input
                type="number"
                className="p-1 bg-gray-200 border border-green-800 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-around px-[20%]">
            <div className="flex flex-col justify-center pt-8">
              <label className="self-center p-2 font-medium ">
                Temperature 🌡️
              </label>
              <input
                type="number"
                className="px-4 w-[50%] h-9 bg-gray-200 border border-green-800 rounded-md self-center"
              />
            </div>

            <div className="flex flex-col justify-center pt-8">
              <label className="self-center p-2 font-medium ">pH 🧪</label>
              <input
                type="number"
                className="px-4 w-[50%] h-9 bg-gray-200 border border-green-800 rounded-md self-center"
              />
            </div>
          </div>

          <div className="flex justify-around px-[20%]">
            <div className="flex flex-col justify-center pt-8">
              <label className="self-center p-2 font-medium ">Rainfall 🌧️</label>
              <input
                type="number"
                className="px-4 w-[50%] h-9 bg-gray-200 border border-green-800 rounded-md self-center"
              />
            </div>

            <div className="flex flex-col justify-center pt-8">
              <label className="self-center p-2 font-medium ">Humidity ♨️</label>
              <input
                type="number"
                className="px-4 w-[50%] h-9 bg-gray-200 border border-green-800 rounded-md self-center"
              />
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button
              className="mt-9 w-20 h-10 bg-green-950 rounded-xl text-white"
              type="submit"
            >
              Predict
            </button>
          </div>
        </form>

        {/* Prediction goes here */}

        <div className={"flex flex-row justify-center pr-10 h-20 pt-7 text-2xl " + (prediction ? " block" : "hidden ")} >
          The data you provided suggests that you should cultivate: {prediction}
        </div>
  

      </div>
    </div>
  );
};
