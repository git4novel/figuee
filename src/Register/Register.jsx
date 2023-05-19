import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../providers/AuthProvider";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';



const Register = () => {
    
const {currentUser, setCurrentUser, loading, setLoading } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if(password)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user = result.user;
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'SignUp successful'
        })
        
        setCurrentUser(user);
        console.log(user);
        
    })
    .catch((error)=>{
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error?.message}!`,
          })
    })
    console.log(name,email, password, photo);
    // Reset the form
    form.reset()
  };

  return (
    <>
    <h1 className="text-center text-4xl italic font-bold">
          <span className="text-[#F6AB4A]" >Welcome </span> to Figuee
    </h1>
    <div className="mt-8 bg-[#E5E7EB] flex flex-col md:flex-row rounded-lg min-h-screen">
      <div className="mx-3 md:mx-0 rounded-lg w-full md:w-1/2 bg-gray-200 flex items-center justify-center">
        <div className=" max-w-md w-full mx-auto p-6 bg-white border border-gray-300 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-start mb-6">
            Please Register Quick!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBEDDC] w-full"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBEDDC] w-full"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBEDDC] w-full"
                name="password"
                required
                placeholder="Your Password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                PhotoUrl
              </label>
              <input
                type="text"
                id="photo"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBEDDC] w-full"
                name="photo"
                required
                placeholder="Your Photo URL"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-[#7E4C4F] text-white hover:bg-[#F6AB4A] px-4 py-2 rounded-lg w-full"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-sm font-bold">
            Already an User go
            <Link to={"/login"}>
              <span className="hover:text-[#F6AB4A] text-[#7E4C4F]">
                Login!
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div style={{ textShadow: "3px 3px 3px rgba(1, 1, 0.5, 1)" }} className="hidden md:flex mt-20 pt-6 w-full  rounded-xl relative md:w-1/2  text-[#7E4C4F] my-3 mx-3 items-center justify-center">
        <img
          className="mx-2 rounded-xl absolute"
          src="https://i.ibb.co/MgpH4CN/mulyadi-MO7-HNb-W1-Mew-unsplash-removebg-preview.png"
          alt=""
        />
        <h1 className="absolute top-1/3 text-center text-4xl italic font-bold">
          <span className="text-[#F6AB4A]" >Welcome </span>
        
        </h1>
      </div>
    </div>
    </>
  );
};

export default Register;
