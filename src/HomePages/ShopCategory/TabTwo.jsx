import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const TabTwo = ({notify}) => {

    const [data, setData] = useState([])
    const url = `https://action-fig-server.vercel.app/categoryToy?category=${`DC Toys`}`;
    useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setData(data)
      })
    },[])

    return (
        <div className="flex flex-col md:flex-row lg:flex-row-reverse gap-2 md:gap-4 mx-auto  mt-6">
           {
            data.map(d => (
              <div className="card card-compact mx-auto  w-72 md:w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src={d.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{d.toyname}!</h2>
                <p className="text-xl italic">Price: {d.price}$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                   <Rating readOnly style={{ maxWidth: 100 }}  value={d.rating}></Rating>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/categoryToy/${d._id}`}><button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button></Link>
                </div>
              </div>
            </div>
            ))
           }
          </div>
    );
};

export default TabTwo;