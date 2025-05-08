import React from "react";
import upload_img from "../assets/upload_img.png";
import { useState } from "react";

const AddMenu = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl p-5 bg-amber-200 font-bold text-gray-800 text-center mb-6">
          Add Menu Item
        </h2>
        <form className="space-y-6">
          {/* Upload Image */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </p>
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4">
              <label htmlFor="image" className="cursor-pointer">
                <img
                  src={!image ? upload_img : URL.createObjectURL(image)}
                  alt="upload_img"
                  className="w-32 h-28 object-cover rounded-lg"
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
            </div>
          </div>

          {/* Product Name */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Product Name
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Product Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product Description */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Product Description
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product Description"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            ></textarea>
          </div>
          {/* category and price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Product Category
              </p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="Spaghetti">Spaghetti</option>
                <option value="Pizza">Pizza</option>
                <option value="Rice">Rice</option>
                <option value="Noodles">Noodles</option>
                <option value="Chicken">Chicken</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>

            {/* Product Price */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Product Price
              </p>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="$40"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Product Category */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
