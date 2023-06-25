import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardStata from "./DashboardStata";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";
import axios from "axios";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [heads, setHeads] = useState("state");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (param) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/state`);
      setData(response.data);
    } catch (err) {
      console.error("error", err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <DashboardStata onDataFetch={setData} heading={setHeads} />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart graphData={data} graphHead={heads} />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
      </div>
    </div>
  );
}
