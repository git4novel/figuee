import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateAToy = () => {
  const { currentUser } = useContext(AuthContext);

  const loadedToy = useLoaderData();
  const {
    photo,
    toyname,
    seller,
    email,
    category,
    price,
    rating,
    quantity,
    description,
    _id,
  } = loadedToy;

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photoUrl.value;
    const toyname = form.toyname.value;
    const seller = form.sellername.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const UpdatedToy = {
      photo,
      toyname,
      seller,
      email,
      category,
      price,
      rating,
      quantity,
      description,
    };

    fetch(`https://action-fig-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Toy is Updated SuccessFully",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="">
      <p
        style={{ fontFamily: "Pacifico" }}
        className="text-center text-lg lg:text-3xl mt-4 font-bold mb-4 text-[#7E4C4F]"
      >
        Update <span className="text-[#F6AB4A]">Your Toy</span>
      </p>
      {/* div for form */}
      <form
        onSubmit={handleUpdateToy}
        className="mx-auto my-1 border-2 px-3 py-4 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
          <div className="mb-4 w-full">
            <label htmlFor="pictureUrl" className="text-normal">
              Picture URL of the toy
            </label>
            <input
              type="text"
              id="pictureUrl"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter picture URL"
              name="photoUrl"
              defaultValue={photo}
            />
          </div>
          <div className="w-full mb-4 md:mb-0">
            <label htmlFor="name" className="text-normal">
              Toy Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter toy name"
              name="toyname"
              defaultValue={toyname}
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="sellerName" className="text-normal">
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter seller name"
              name="sellername"
              defaultValue={seller}
            />
          </div>
          <div className="w-full mb-4 md:mb-0">
            <label htmlFor="sellerEmail" className="text-normal">
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter seller email"
              name="email"
              defaultValue={email}
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="subCategory" className="text-normal">
              Category
            </label>
            <select
              id="subCategory"
              className="w-full px-3 py-2 border rounded"
              name="category"
              defaultValue={category}
            >
              <option value="Avenger Toys">Avengers Toy</option>
              <option value="DC Toys">DC Toy</option>
              <option value="Anime Toys">Anime Toy</option>
            </select>
          </div>
          <div className="w-full mb-4 md:mb-0">
            <label htmlFor="price" className="text-normal">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter price"
              name="price"
              defaultValue={price}
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="rating" className="text-normal">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter rating"
              name="rating"
              defaultValue={rating}
            />
          </div>
          <div className="w-full mb-4 md:mb-0">
            <label htmlFor="quantity" className="text-normal">
              Available Quantity
            </label>
            <input
              type="text"
              id="quantity"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter quantity"
              name="quantity"
              defaultValue={quantity}
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="description" className="text-normal">
              Detail Description
            </label>
            <textarea
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter description"
              name="description"
              defaultValue={description}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <button
            type="submit"
            className=" bg-[#7E4C4F] py-2 px-3 w-1/2 justify-around items-center align-middle text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAToy;
