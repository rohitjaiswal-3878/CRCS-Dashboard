import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function TransactionChart({
  graphData,
  graphHead,
  onRecordFetch,
}) {
  const convertFirstLetterToUpperCase = (str) => {
    if (str.length === 0) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const convertDataToArray = (d) => {
    return Object.entries(d).map(([label, value]) => ({ label, value }));
  };
  const graphDataSet = convertDataToArray(graphData);

  const [selectedBarData, setSelectedBarData] = useState([]);

  const handleBarClick = async (data, index) => {
    console.log(data.label + " clicked ");
    setSelectedBarData(data.label);
    const getrecordsdata = async (name) => {
      await axios
        .get(
          `http://localhost:5000/api/records?label=${name}&chart=${graphHead}`
        )
        .then((response) => {
          let returndata = JSON.parse(response.data);
          console.log(returndata);
          onRecordFetch(returndata);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getrecordsdata(data.label);
  };

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">
        {convertFirstLetterToUpperCase(graphHead)}-wise Chart
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={graphDataSet}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0ea5e9" onClick={handleBarClick} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
