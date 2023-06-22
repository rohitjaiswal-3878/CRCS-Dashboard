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

export default function TransactionChart() {
  const [societyTotals, setSocietyTotals] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/society_totals")
      .then((response) => {
        setSocietyTotals(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(societyTotals);
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Type-Wise Chart</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={Object.entries(societyTotals)}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="0" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="1" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
