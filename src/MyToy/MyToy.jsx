import { key } from "localforage";
import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const MyToy = () => {
  const { currentUser } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `https://action-fig-server.vercel.app/mytoy?email=${currentUser.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

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

{
  /* <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      contentLabel="Update Toy Modal"
      ariaHideApp={false} // Disable the aria-hidden warning
    >

      <div className="relative bg-white">
        <p onClick={handleModalClose} className="text-red-600 font-bold absolute top-0 right-0">X</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga quae quia ea vitae, fugit perspiciatis voluptate reiciendis minus voluptas porro amet quas culpa iste eos blanditiis molestiae aspernatur eum qpsam sequi officiis, nisi dolore soluta tempora voluptatibus. Officia error suscipit eius. Dicta earum iste sit omnis totam, ipsa consequuntur, et culpa voluptatibus repellat error ipsmquam! Quaerat agni laboriosam fugit, officia temporibus hic, rem dignissimos, eveniet tenetur dolore! Quae repellat officiis id? Dolorem, iste.</p>
      </div>
    </ReactModal> */
}
