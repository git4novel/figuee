import { useContext, useEffect, useState } from "react";
import useTitleHook from "../hooks/useTitleHook";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const AllToy = () => {

    useTitleHook('AllToy')
    const { currentUser } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const url = `https://action-fig-server.vercel.app/mytoy`;
    console.log(allToys);
    useEffect(() => {
      fetch(url)
      .then(res=>res.json())
      .then((data)=>{
        setAllToys(data);
        console.log(data);
      })
    }, []);

    
    return (
        <div className="overflow-x-auto mt-3">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Number</th> 
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>SubCategory</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Details</th>
      </tr>
    </thead> 
    <tbody>
      {
        allToys.map((toy, index) =>(
    <tr className="pb-1" key={toy._id}>
        <th>{index + 1}</th> 
        <td>{toy.seller}</td> 
        <td>{toy.toyname}</td> 
        <td>{toy.category}</td> 
        <td>{toy.price}$</td> 
        <td>{toy.quantity}</td> 
        <Link to={`/singleDetail/${toy._id}`}><button className="px-3 py-1 rounded text-white bg-[#7E4C4F]  ">View Details</button></Link>
      </tr>
        ))}
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
    );
};

export default AllToy;