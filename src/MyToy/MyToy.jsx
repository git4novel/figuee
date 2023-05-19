import { key } from "localforage";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys)


  const handleDelete= (id) =>{
    Swal.fire({
        title: 'Are you sure You want to Delete Specific Toy?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data =>{
            if(data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining =toys.filter(t => t._id !== id)
              setToys(remaining)
            }
          })
        }
      })
  }

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
            <tr key={toy.id}>
              <th>
                <Link to={`/toys/${toy.id}`}>
                    <button  htmlFor="my-modal-5" className="bg-[gold] px-3 py-2 rounded">
                    Update
                    </button>
                </Link>

              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={toy.photo} className="" alt="Avatar Tailwind CSS Component" />
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
                <button onClick={()=>handleDelete(toy._id)} className="px-3 py-2 bg-red-500 rounded">Delete</button>
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

