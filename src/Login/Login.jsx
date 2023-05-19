import { useContext, useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, auth } from "../providers/AuthProvider";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


const Login = () => {
  const { setCurrentUser, loading, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user = result.user;
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'SignIn successful'
        })
        setCurrentUser(user);
        navigate(from)
        console.log(user);
    })
    .catch(error=>{
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `rytyhrftghdfg!`,
          })
    })
    // Reset the form
    form.reset()
  };

  const provider = new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    .then(result =>{
        const user = result.user;
        console.log(user);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'SignIn successful'
        })
        setCurrentUser(user);
        navigate(from)
    })
    .catch(error=>{
        console.log(error?.message);
    })
  };

  return (
    <div className="mt-4 bg-[#E5E7EB] flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-6 bg-white border border-gray-300 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-start mb-6">
            Please Login Here!
          </h2>
          <form onSubmit={handleSubmit}>
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
                placeholder="Your Email here"
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
                placeholder="Put Your Password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-[#7E4C4F] text-white hover:bg-[#F6AB4A] px-4 py-2 rounded-lg w-full"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm font-bold">
            New Here go to{" "}
            <Link to={"/register"}>
              <span className="hover:text-[#F6AB4A] text-[#7E4C4F]">
                Register!
              </span>
            </Link>
          </p>
          <div className="flex items-center justify-center">
            <span className="mr-2">Or login with:</span>
            <button
              onClick={handleGoogleLogin}
              className="bg-[#7E4C4F] text-white px-4 py-2 rounded-lg hover:bg-[#F6AB4A]"
            >
              <span className="inline-flex justify-center align-middle my-auto">
                {" "}
                Google <FcGoogle className="ml-3 my-auto" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ textShadow: "3px 3px 3px rgba(1, 1, 0.5, 1)" }}
        className="mt-2 shadow-2xl rounded-xl relative lg:w-1/2  text-white my-3 mx-3 flex items-center justify-center"
      >
        <h1 className="shadow-xl absolute text-[#F6AB4A] top-4 text-center text-4xl italic font-bold">
          <span className="text-[#7E4C4F]">Welcome</span> to figuee
        </h1>
        <img
          className="mx-2 rounded-xl"
          src="https://i.ibb.co/Jkgn5cD/azmathulla-shaik-K5-Tfhhr-Ns20-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
