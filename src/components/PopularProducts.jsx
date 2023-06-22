import React from "react";
import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "https://example.com/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "https://example.com/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image: "https://example.com/product3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    image: "https://example.com/product4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 59.99,
    image: "https://example.com/product5.jpg",
  },
];

function PopularProducts() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]">
      <strong className="text-gray-700 font-medium">Popular Orders</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((item) => (
          <Link to={`/products/${item.id}`} className="flex hover:no-underline">
            <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{item.name}</p>
            </div>
            <div className="text-xs text-gray-400 pl-4">{item.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
