import React, { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { categoryItem } from "../assets/assets";

const Menu = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState("All");
  return (
    <div className="p-6 container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Discover Our Menu</h1>
      </div>
      {/* category btn */}
      <div className="mb-8">
        <h2 className="text-2xl text-center font-semibold text-gray-700 mb-4">
          Explore Our Categories
        </h2>
        <ul className="flex flex-wrap gap-4 justify-center">
          {categoryItem.map((item, index) => (
            <li
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category_title ? "All" : item.category_title
                )
              }
              className={`cursor-pointer px-4 py-2 rounded-lg text-white ${
                category === item.category_title
                  ? "bg-blue-600"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {item.category_title}
            </li>
          ))}
        </ul>
      </div>
      {/* menu display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {products.length > 0 ? (
          products
            .filter(
              (product) => category === "All" || product.category === category
            )
            .map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden flex h-3/3 p-5"
              >
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <h2 className="text-lg font-semibold text-gray-800 flex-1">
                      {product.name}
                    </h2>
                    <div className="flex items-center">
                      <hr className="w-12 border-blue-600 border-2 mr-2" />
                      <span className="text-blue-600 text-lg font-semibold">
                        ${product.price}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))
        ) : (
          <h2 className="text-center text-xl font-semibold text-gray-700 col-span-full">
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Menu;
