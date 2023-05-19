import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddAToyPage = () => {

    const {currentUser} = useContext(AuthContext);

    const handleAddAToy = (e) =>{
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const photo = form.photoUrl.value;
        const toyname = form.toyname.value;
        const seller = form.sellername.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(photo, toyname,seller, email, category, price, rating, quantity, description);

        
    
    }

  return (
    <div className="">
      <p
        style={{ fontFamily: "Pacifico" }}
        className="text-center text-lg lg:text-3xl mt-4 font-bold mb-4 text-[#7E4C4F]"
      >
        Add A Toy by <span className="text-[#F6AB4A]">Completing Form</span>
      </p>
      {/* div for form */}
          <form onSubmit={handleAddAToy} className="mx-auto my-1 border-2 px-3 py-4 rounded-lg">
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
                  defaultValue={currentUser.displayName}
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
                  defaultValue={currentUser.email}
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

export default AddAToyPage;
