import React from "react";
import image from "../../assets/GalleryPic/high reso/pexels-photo-5795420.jpeg";

const About = () => {
  return (
    <div className="rounded-lg hero mb-6 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
        >
          <h1 className="text-5xl font-bold">Figuee! Action Figure Shop</h1>
          <p className="italic font-semibold py-6">
            Figuee is reknown brand from early 2010. Having Good Reputation as
            well <br /> as services from around the globe. We are Protected
            Source for best Icons or Figure.
          </p>
          <p className="font-bold">Have fun!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
