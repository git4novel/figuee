import { useState } from "react";
import "./Login.css";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // Reset the form
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () =>{

  }

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
          <p className="text-sm font-bold">New Here go to <Link to={'/register'}><span className="hover:text-[#F6AB4A] text-[#7E4C4F]">Register!</span></Link></p>
          <div className="flex items-center justify-center">
            <span className="mr-2">Or login with:</span>
            <button onClick={handleGoogleLogin} className="bg-[#7E4C4F] text-white px-4 py-2 rounded-lg hover:bg-[#F6AB4A]">
             <span className="inline-flex justify-center align-middle my-auto"> Google  <FcGoogle className="ml-3 my-auto" /></span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 shadow-2xl rounded-xl relative lg:w-1/2  text-white my-3 mx-3 flex items-center justify-center">
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
