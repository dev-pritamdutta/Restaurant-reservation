import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const ListMenu = ({ token }) => {
  const [list, setList] = useState([]);
  console.log("Token being sent:", localStorage.getItem("token"));

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list", {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error fetching menu list");
      console.error("Error fetching menu list:", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // for delete functionality
  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      console.log("Token being sent:", token); // Debugging log

      const response = await axios.delete(
        `${backendUrl}/api/product/remove/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setList(list.filter((item) => item._id !== id)); // Remove the deleted item from the list
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error deleting the item");
      console.error("Error deleting the item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className=" w-2/5 mx-auto text-2xl text-center p-5 bg-blue-600 font-bold text-white rounded-xl mb-6">
        Menu List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left w-1/3">Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr
                key={index}
                className="border-b text-black hover:bg-blue-300 transition duration-200"
              >
                {/* Image */}
                <td className="py-3 px-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </td>
                {/* Name */}
                <td className="py-3 font-semibold px-6">{item.name}</td>
                {/* Category */}
                <td className="py-3 px-6">{item.category}</td>
                {/* Price */}
                <td className="py-3 px-6">${item.price}</td>
                {/* Action */}
                <td className="py-3 px-6">
                  <button
                    className="text-red-600 cursor-pointer hover:text-red-800"
                    onClick={() => {
                      // Add delete functionality here
                      deleteItem(item._id);
                    }}
                  >
                    <MdDeleteForever size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListMenu;
