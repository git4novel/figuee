import { useContext, useEffect, useState } from "react";
import useTitleHook from "../hooks/useTitleHook";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import '../AddAToyPage/AddAToy.css' 

const AllToy = () => {
  useTitleHook("AllToy");
  const { currentUser } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = `https://action-fig-server.vercel.app/mytoy`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = allToys.filter((toy) =>
    toy.toyname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto mt-3">
      <div className="mx-auto text-center mt-2 mb-3">
        <p className="text-lg font-bold">Search Product Name</p>
        <input
          name="search"
          type="text"
          className="rounded shadow-xl border-2 border-dashed bg-slate-100"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>SubCategory</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Photo</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy, index) => (
            <tr className="pb-1" key={toy._id}>
              <th>{index + 1}</th>
              <td>{toy.seller}</td>
              <td>{toy.toyname}</td>
              <td>{toy.category}</td>
              <td>{toy.price}$</td>
              <td>{toy.quantity}</td>
              <td><img src={toy.photo} className="w-8 h-8" alt="" /></td>
              <td><Link to={`/singleDetail/${toy._id}`}>
                <button className="px-3 py-1 rounded text-white bg-[#7E4C4F]">
                  View Details
                </button>
              </Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>SubCategory</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Photo</th>
            <th>Details</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllToy;
