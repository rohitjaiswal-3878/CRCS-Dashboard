import React from "react";
import { Link } from "react-router-dom";
import DashboardStata from "./DashboardStata";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStata />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
      </div>
    </div>
  );
}
