import axios from "axios";
import classNames from "classnames";
import React, { useState } from "react";
import { IoMdAnalytics } from "react-icons/io";

const labclass =
  "bg-white rounded-sm p-4 flex-1 flex-row border border-gray-200 flex items-center rounded-xl  justify-center";

export default function DashboardStata({ onDataFetch, heading }) {
  const fetchData = async (param) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/${param}`);
      onDataFetch(response.data);
      heading(param);
    } catch (err) {
      console.error("error", err);
    }
  };
  const [selectedButton, setSelectedButton] = useState("state");
  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  console.log(selectedButton);
  return (
    <div className="flex gap-4 w-full">
      <button
        className={classNames(
          selectedButton === "state"
            ? "bg-neutral-100 shadow-[0_0px_12px_-5px_rgb(179,179,179)] shadow-black"
            : "",
          labclass
        )}
        onClick={() => {
          fetchData("state");
          handleClick("state");
        }}
      >
        <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-sky-500 ">
          <IoMdAnalytics className="text-2xl text-white" />
        </div>
        <div className="pl-4 flex items-center ">
          <span className="text-lg text-gray-800 font-bold">State-wise</span>
        </div>
      </button>

      <button
        className={classNames(
          selectedButton === "year"
            ? "bg-neutral-100 shadow-[0_0px_12px_-5px_rgb(179,179,179)] shadow-black"
            : "",
          labclass
        )}
        onClick={() => {
          fetchData("year");
          handleClick("year");
        }}
      >
        <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-sky-500 ">
          <IoMdAnalytics className="text-2xl text-white" />
        </div>
        <div className="pl-4 flex items-center ">
          <span className="text-lg text-gray-800 font-bold">Year-wise</span>
        </div>
      </button>
      <button
        className={classNames(
          selectedButton === "type"
            ? "bg-neutral-100 shadow-[0_0px_12px_-5px_rgb(179,179,179)] shadow-black"
            : "",
          labclass
        )}
        onClick={() => {
          fetchData("type");
          handleClick("type");
        }}
      >
        <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-sky-500 ">
          <IoMdAnalytics className="text-2xl text-white" />
        </div>
        <div className="pl-4 flex items-center ">
          <span className="text-lg text-gray-800 font-bold">Type-wise</span>
        </div>
      </button>
    </div>
  );
}
