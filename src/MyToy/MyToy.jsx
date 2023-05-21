import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import useTitleHook from "../hooks/useTitleHook";

const MyToy = () => {
  const { currentUser } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitleHook("MyToy");

  const [sortOrder, setSortOrder] = useState("asc");
  const url = `https://action-fig-server.vercel.app/mytoy?email=${currentUser.email}&sort=${sortOrder}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Sort the data based on sortOrder
        const sortedToys = data.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
        setToys(sortedToys);
      });
  }, [sortOrder]);

  const handleSortAscending = () => {
    setSortOrder("asc");
  };

  const handleSortDescending = () => {
    setSortOrder("desc");
  };

  // delete functionality
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure You want to Delete Specific Toy?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://action-fig-server.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((t) => t._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-end mb-2">
        <button
          onClick={handleSortAscending}
          className="px-3 py-2 mr-2 bg-[#7E4C4F] hover:bg-[#5a3a3c] text-white rounded"
        >
          Sort Ascending
        </button>
        <button
          onClick={handleSortDescending}
          className="px-3 py-2 bg-[#7E4C4F] hover:bg-[#5a3a3c] text-white rounded"
        >
          Sort Descending
        </button>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <th>
                <Link to={`/update/${toy._id}`}>
                  <button className="bg-[gold] px-3 py-2 rounded">
                    Update
                  </button>
                </Link>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={toy.photo}
                        className=""
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toy.toyname}</div>
                  </div>
                </div>
              </td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <th>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="px-3 py-2 bg-red-500 rounded"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MyToy;
