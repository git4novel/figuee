import { useEffect, useState } from "react";
import image1 from "../assets/highreso/ima.jpg";
import image2 from "../assets/highreso/imaa.jpg";
import image3 from "../assets/highreso/img.jpg";
// import image3 from "../assets/highreso/imgg.jpg";
// import image3 from "../assets/highreso/imggg.jpg";
// import image2 from "../assets/bannerImage/image2.jpg";
// import image3 from "../assets/bannerImage/image3.jpg";
// #3D4451
import "./Banner.css";
import Typist from "react-typist";
// import Typing from "react-typing-effect";

const Banner = () => {
  // tried typing but not worked
  /*   const [text, setText] = useState("");
  const sentence = "Find Your Toy Find Your Joy ";
  const typingDelay = 100; // Delay between typing each letter

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer;

    const trimmedSentence = sentence.trim(); // Trim the sentence to remove leading/trailing spaces

    const typeSentence = () => {
      if (currentIndex < trimmedSentence.length) {
        setText((prevText) => prevText + trimmedSentence[currentIndex]);
        currentIndex++;
        typingTimer = setTimeout(typeSentence, typingDelay);
      } else if (currentIndex === trimmedSentence.length) {
        clearTimeout(typingTimer);
      }
    };

    typeSentence();

    return () => {
      clearTimeout(typingTimer);
    };
  }, []); */

  return (
    <div className="carousel  max-h-[700px]  w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="text-white absolute text-start w-full lg:w-1/3 mx-10 lg:mx-28 top-3 lg:top-1/3">
          <h1
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              animation: "fadeIn 2s",
            }}
            className="text-[#7E4C4F] drop-shadow-2xl text-4xl lg:text-7xl  mb-3 font-extrabold leading-tight tracking-wide"
          >
            Figuee
          </h1>
          {/* <p
            style={{ fontFamily: "Pacifico" }}
            className="text-lg lg:text-4xl leading-relaxed mb-7"
          >
            {text}
          </p> */}
          <Typist avgTypingDelay={100} cursor={{ show: false }}>
            <p
              style={{ fontFamily: "Pacifico" }}
              className="text-lg lg:text-4xl leading-relaxed mb-7"
            >
              Find Your Toy Find Your Joy
            </p>
          </Typist>
          <p className="text-sm leading-relaxed">
            liore Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, porro praesentium. Repellendus doloribus repudiandae
            facere hic ea suscipit.
          </p>
        </div>
        <img
          src={image1}
          className="bg-gradient-to-r from-slate-600 to-slate-800 w-full rounded-md"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 lg:left-5 bottom-1 lg:bottom-1/2   right-2 lg:right-5 lg:top-1/2">
          <a href="#slide4" className="bg-[#7E4C4F] btn btn-circle text-white">
            ❮
          </a>
          <a
            href="#slide2"
            className="bg-gray-800 btn btn-circle text-[#7E4C4F]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="bg-[#7E4C4F] btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="bg-[#7E4C4F] btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
