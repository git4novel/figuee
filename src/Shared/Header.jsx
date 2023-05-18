import { Link } from "react-router-dom";
import "../App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext, auth } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { FaUserCircle } from "react-icons/fa";
// import { Fcu } from 'react-icons/fc';

const Header = () => {
  const { name, setCurrentUser, currentUser, setPhoto, setName, setLoading } =
    useContext(AuthContext);
  const [showDisplayName, setShowDisplayName] = useState(false);

  useEffect(() => {
    setName(currentUser?.displayName);
  }, [currentUser?.displayName, setName]);

  console.log(currentUser);
  console.log(currentUser?.displayName);

  const handleMouseEnter = () => {
    setShowDisplayName(true);
  };

  const handleMouseLeave = () => {
    setShowDisplayName(false);
  };

  // onclick log out user  firebase work function
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "LogOut Successfully",
          text: "Successfully logOut",
        });
        setPhoto(null);
        setName(null);
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Can't Log out!`,
        });
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            style={{ fontFamily: 'Pacifico' }}
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-semibold italic">
              <Link to={"/"}>Home</Link>
            </li>
            {/* <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li className="font-semibold italic">
              <Link>All Toys</Link>
            </li>
            {currentUser && (
            <div  className="">
              <li className="font-semibold italic">
                <Link>My Toys</Link>
              </li>
              <li className="font-semibold italic">
                <Link>Add a toy</Link>
              </li>
            </div>
          )}
            <li className="font-semibold italic">
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img
            className="w-28 rounded-lg py-1 my-2 mx-3"
            src="https://i.ibb.co/K2rTd31/cover.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul style={{ fontFamily: 'Pacifico' }} className="menu menu-horizontal px-1">
          <li className="font-semibold italic">
            <Link>Home</Link>
          </li>
          {/* <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>All Toys</Link>
              </li>
            </ul>
          </li> */}
          <li className="hover:bg-[#FBEDDC] font-semibold italic">
            <Link>All Toys</Link>
          </li>
          {currentUser && (
            <div  className="flex">
              <li className="font-semibold italic">
                <Link>My Toys</Link>
              </li>
              <li className="font-semibold italic">
                <Link>Add a toy</Link>
              </li>
            </div>
          )}
          <li className="italic font-semibold">
            <Link to={'/blog'}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {currentUser && (
            <div>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="border-2 border-[#7E4C4F] hover:border-[#F6AB4A] rounded-full my-3 me-2"
                  style={{ width: "40px", height: "40px" }}
                  src={currentUser?.photoURL}
                  alt="User Profile"
                />
                {showDisplayName && (
                  <div className="absolute text-sm font-bold text-[#7E4C4F]">
                    {currentUser.displayName}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div>
          {currentUser ? (
            <button
              onClick={logOut}
              className="bg-[#7E4C4F] hover:bg-[#F6AB4A] btn border"
            >
              Log Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="bg-[#7E4C4F] hover:bg-[#F6AB4A] btn border"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
