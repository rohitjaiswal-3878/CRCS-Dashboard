import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function RecentOrders({ listRecords }) {
  const [records, setRecords] = useState([]);
  const [displayedRecords, setDisplayedRecords] = useState(10);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setRecords(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update the records state when listRecords prop changes
    setRecords(listRecords);
  }, [listRecords]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container.scrollTop + container.clientHeight + 1 >=
        container.scrollHeight
      ) {
        loadMoreRecords();
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadMoreRecords = () => {
    setDisplayedRecords((prevDisplayedRecords) => prevDisplayedRecords + 10);
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Reg. Societies Data</strong>
      <div
        className="mt-3"
        ref={containerRef}
        style={{ height: "300px", overflowY: "scroll" }}
      >
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Registration No</th>
              <th>Society name</th>
              <th>State</th>
              <th>Date of Registration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {records.slice(0, displayedRecords).map((item) => (
              <tr key={item.registration_no}>
                <td>
                  <Link to={`/products/${item.registration_no}`}>
                    {item.registration_no}
                  </Link>
                </td>
                <td>{item.Society_name}</td>
                <td>{item.State}</td>
                <td>{item.date_of_registration}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
