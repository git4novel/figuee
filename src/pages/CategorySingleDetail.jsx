import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategorySingleDetail = () => {
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
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{toyname}!</h1>
          <p className="mt-3 font-bold">Seller Name_: {seller}</p>
          <p className="mt-3 font-bold">Seller Email: {email}</p>
          <p className="mt-3 font-bold">Price : {price}</p>
          <p className="mt-3 font-bold">Rating: {rating}</p>
          <p className="mt-3 font-bold">Available Quantity: {quantity}</p>
          <p className="mt-3 font-bold"> Detail Description: {description}</p>
        </div>
      </div>
    </div>
    );
};

export default CategorySingleDetail;
