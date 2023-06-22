import React from "react";
import { IoMdAnalytics } from "react-icons/io";

export default function DashboardStata() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-sky-500 ">
          <IoMdAnalytics className="text-2xl text-white" />
        </div>
        <div className="pl-4 flex items-center ">
          <span className="text-lg text-gray-800 font-bold">State-wise</span>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-sky-500 ">
          <IoMdAnalytics className="text-2xl text-white" />
        </div>
        <div className="pl-4 flex items-center ">
          <span className="text-lg text-gray-800 font-bold">Year-wise</span>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center  bg-sky-500 ">
          <IoMdAnalytics className="text-2xl text-white" />
        </div>
        <div className="pl-4 flex items-center ">
          <span className="text-lg text-gray-800 font-bold">Type-wise</span>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center rounded-xl  justify-center">
      {children}
    </div>
  );
}
