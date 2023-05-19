import { useEffect, useState } from "react";
import image1 from "../../assets/highreso/ima.jpg";
import image2 from "../../assets/highreso/imaa.jpg";
import image3 from "../../assets/highreso/img.jpg";
import image4 from "../../assets/highreso/imgg.jpg";
import image5 from "../../assets/highreso/imggg.jpg";
import image6 from  '../../assets/highreso/justin-lim-tloFnD-7EpI-unsplash.jpg'
// #3D4451
import "./Banner.css";
import Typist from "react-typist";
// import Typing from "react-typing-effect";

const Banner = () => {
 
  return (
    <div className="carousel   max-h-[700px]  w-full">
    {/* slide one */}
    <div id="slide1" className="carousel-item relative w-full">
      <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            animation: "fadeIn 2s",
          }}
          className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide "
        >
          Figuee
        </h1>
        <Typist avgTypingDelay={100} cursor={{ show: false }}>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            Find Your Toy Find Your Joy
          </p>
        </Typist>
        <Typist  avgTypingDelay={200} cursor={{ show: false }}>
        <p className="italic text-lg leading-relaxed">
          <span className="font-bold">Figuee</span> is a Platform for finding Your toy for loved ones. Its a collection. You can have your collection as well. These are the Materials for connecting bond.
        </p>
        </Typist>
      </div>
      <img
        src={image1}
        className="w-full rounded-md"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
        <a href="#slide6" className="hover:bg-gray-800 bg-[#7E4C4F] btn btn-circle text-white">
          ❮
        </a>
        <a
          href="#slide2"
          className="hover:bg-gray-800 btn btn-circle text-white bg-[#7E4C4F]"
        >
          ❯
        </a>
      </div>
    </div>
    {/* slide 2 */}
    <div id="slide2" className="carousel-item relative w-full">
      <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            animation: "fadeIn 2s",
          }}
          className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide "
        >
          Figuee
        </h1>
        <Typist avgTypingDelay={100} cursor={{ show: false }}>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            Find Your Toy Find Your Joy
          </p>
        </Typist>
        <Typist  avgTypingDelay={200} cursor={{ show: false }}>
        <p className="italic text-lg leading-relaxed">
          <span className="font-bold">Figuee</span> is a Platform for finding Your toy for loved ones. Its a collection. You can have your collection as well. These are the Materials for connecting bond.
        </p>
        </Typist>
      </div>
      <img
        src={image2}
        className="w-full rounded-md"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
        <a href="#slide1" className="hover:bg-gray-800 bg-[#7E4C4F] btn btn-circle text-white">
          ❮
        </a>
        <a
          href="#slide3"
          className="hover:bg-gray-800 btn btn-circle text-white bg-[#7E4C4F]"
        >
          ❯
        </a>
      </div>
    </div>
    {/* slide 3 */}
    <div id="slide3" className="carousel-item relative w-full">
      <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            animation: "fadeIn 2s",
          }}
          className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide "
        >
          Figuee
        </h1>
        <Typist avgTypingDelay={100} cursor={{ show: false }}>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            Find Your Toy Find Your Joy
          </p>
        </Typist>
        <Typist  avgTypingDelay={200} cursor={{ show: false }}>
        <p className="italic text-lg leading-relaxed">
          <span className="font-bold">Figuee</span> is a Platform for finding Your toy for loved ones. Its a collection. You can have your collection as well. These are the Materials for connecting bond.
        </p>
        </Typist>
      </div>
      <img
        src={image3}
        className="w-full rounded-md"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
        <a href="#slide2" className="hover:bg-gray-800 bg-[#7E4C4F] btn btn-circle text-white">
          ❮
        </a>
        <a
          href="#slide4"
          className="hover:bg-gray-800 btn btn-circle text-white bg-[#7E4C4F]"
        >
          ❯
        </a>
      </div>
    </div>
    {/* slide 4 */}
    <div id="slide4" className="carousel-item relative w-full">
      <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            animation: "fadeIn 2s",
          }}
          className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide "
        >
          Figuee
        </h1>
        <Typist avgTypingDelay={100} cursor={{ show: false }}>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            Find Your Toy Find Your Joy
          </p>
        </Typist>
        <Typist  avgTypingDelay={200} cursor={{ show: false }}>
        <p className="italic text-lg leading-relaxed">
          <span className="font-bold">Figuee</span> is a Platform for finding Your toy for loved ones. Its a collection. You can have your collection as well. These are the Materials for connecting bond.
        </p>
        </Typist>
      </div>
      <img
        src={image4}
        className="w-full rounded-md"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
        <a href="#slide3" className="hover:bg-gray-800 bg-[#7E4C4F] btn btn-circle text-white">
          ❮
        </a>
        <a
          href="#slide5"
          className="hover:bg-gray-800 btn btn-circle text-white bg-[#7E4C4F]"
        >
          ❯
        </a>
      </div>
    </div>
    {/* slide 5 */}
    <div id="slide5" className="carousel-item relative w-full">
      <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            animation: "fadeIn 2s",
          }}
          className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide "
        >
          Figuee
        </h1>
        <Typist avgTypingDelay={100} cursor={{ show: false }}>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            Find Your Toy Find Your Joy
          </p>
        </Typist>
        <Typist  avgTypingDelay={200} cursor={{ show: false }}>
        <p className="italic text-lg leading-relaxed">
          <span className="font-bold">Figuee</span> is a Platform for finding Your toy for loved ones. Its a collection. You can have your collection as well. These are the Materials for connecting bond.
        </p>
        </Typist>
      </div>
      <img
        src={image5}
        className="w-full rounded-md"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
        <a href="#slide4" className="hover:bg-gray-800 bg-[#7E4C4F] btn btn-circle text-white">
          ❮
        </a>
        <a
          href="#slide6"
          className="hover:bg-gray-800 btn btn-circle text-white bg-[#7E4C4F]"
        >
          ❯
        </a>
      </div>
    </div>
    {/* slide 6 */}
    <div id="slide6" className="carousel-item relative w-full">
      <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            animation: "fadeIn 2s",
          }}
          className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide "
        >
          Figuee
        </h1>
        <Typist avgTypingDelay={100} cursor={{ show: false }}>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            Find Your Toy Find Your Joy
          </p>
        </Typist>
        <Typist  avgTypingDelay={200} cursor={{ show: false }}>
        <p className="italic text-lg leading-relaxed">
          <span className="font-bold">Figuee</span> is a Platform for finding Your toy for loved ones. Its a collection. You can have your collection as well. These are the Materials for connecting bond.
        </p>
        </Typist>
      </div>
      <img
        src={image6}
        className="w-full rounded-md"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
        <a href="#slide5" className="hover:bg-gray-800 bg-[#7E4C4F] btn btn-circle text-white">
          ❮
        </a>
        <a
          href="#slide1"
          className="hover:bg-gray-800 btn btn-circle text-white bg-[#7E4C4F]"
        >
          ❯
        </a>
      </div>
    </div>
  </div>
  );
};

export default Banner;