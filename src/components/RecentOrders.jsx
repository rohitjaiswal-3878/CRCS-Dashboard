import React from "react";
import { Link } from "react-router-dom";

const recent = [
  {
    id: 1,
    name: "ABC Society",
    year_of_register: 2010,
    number_of_people: 100,
    state: "Maharashtra",
  },
  {
    id: 2,
    name: "XYZ Society",
    year_of_register: 2012,
    number_of_people: 150,
    state: "Karnataka",
  },
  {
    id: 3,
    name: "PQR Society",
    year_of_register: 2015,
    number_of_people: 200,
    state: "Tamil Nadu",
  },
  {
    id: 4,
    name: "LMN Society",
    year_of_register: 2011,
    number_of_people: 120,
    state: "Uttar Pradesh",
  },
  {
    id: 5,
    name: "EFG Society",
    year_of_register: 2013,
    number_of_people: 180,
    state: "Gujarat",
  },
  {
    id: 6,
    name: "RST Society",
    year_of_register: 2014,
    number_of_people: 250,
    state: "West Bengal",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Reg. Socities Data</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>Id</td>
              <td>name</td>
              <td>year_of_register</td>
              <td>number_of_people</td>
              <td>state</td>
            </tr>
          </thead>
          <tbody>
            {recent.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link to={`/products/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.name}</td>
                <td>{item.year_of_register}</td>
                <td>{item.number_of_people}</td>
                <td>{item.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
