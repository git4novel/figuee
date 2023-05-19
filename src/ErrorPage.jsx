import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500  rounded-xl">
      <div className="relative p-14 my-16 rounded-lg">
        <p className="text-center italic font-extrabold text-5xl lg:text-9xl">
          404
        </p>
        <p className="text-center font-bold text-3xl lg:text-6xl">Opps!.... This Page DoesNot Exist</p>
        <div className="flex justify-around mt-9">
        <Link to={'/'}><button className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-3 py-2  rounded-lg text-white font-bold">Go Back to Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
