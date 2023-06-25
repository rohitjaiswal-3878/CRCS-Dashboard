import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecentOrders() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const getrecords = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setRecords(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getrecords();
  }, []);
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Reg. Socities Data</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>Id</td>
              <td>State</td>
              <td>Number_of_Societies_Registered</td>
              <td>Year_of_Register</td>
              <td>Types_of_Society</td>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item.Id}>
                <td>
                  <Link to={`/products/${item.Id}`}>{item.Id}</Link>
                </td>
                <td>{item.State}</td>
                <td>{item.Number_of_Societies_Registered}</td>
                <td>{item.Year_of_Register}</td>
                <td>{item.Types_of_Society}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
