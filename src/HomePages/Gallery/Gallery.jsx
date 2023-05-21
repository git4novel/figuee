import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="mx-auto mt-6 mb-6">
      <h1
        className="text-center p-4 text-4xl font-bold"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Top Product In Galleries
      </h1>
      <div className="shadow-2xl gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
        <div className="shadow-2xl gallery-item relative">
          <p className="absolute bottom-0 m-1  right-1 pad font-bold">
            Batman Clay Figure
          </p>
          <img
            className="rounded border-4 hover:border-[#c18589] border-[#7E4C4F]"
            src="https://i.ibb.co/6mBD1V7/yulia-matvienko-Ar-A3-S3k0w-TU-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="gallery-item relative">
          <p className="absolute bottom-0 m-1 right-1 font-bold">
            Plane Figure
          </p>
          <img
            className="rounded border-4 hover:border-[#c18589] border-[#7E4C4F]"
            src="https://i.ibb.co/84KxD2Y/josh-withers-o6ha-Xu-Xd-XJ0-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="  gallery-item relative">
          <p className="absolute bottom-0 m-1  right-1 pad font-bold">
            SpiderMen Figure
          </p>
          <img
            className="rounded border-4 hover:border-[#c18589] border-[#7E4C4F]"
            src="https://i.ibb.co/LxZMdZ3/muhd-asyraaf-Ti8-UF-r-Jl-Yo-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" gallery-item relative">
          <p className="mx-auto absolute bottom-0 m-1  right-1 pad font-bold">
            Marvel toy
          </p>
          <img
            className="rounded border-4 hover:border-[#c18589] border-[#7E4C4F]"
            src="https://i.ibb.co/hgPfbGd/daniel-k-cheung-c-PF2nl-Wc-MY4-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" gallery-item relative">
          <p className="mx-auto absolute bottom-0 m-1  right-1 pad font-bold">
            Marvel toy
          </p>
          <img
            className="rounded border-4 hover:border-[#c18589] border-[#7E4C4F]"
            src="https://i.ibb.co/84KxD2Y/josh-withers-o6ha-Xu-Xd-XJ0-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" gallery-item relative">
          <p className="mx-auto absolute bottom-0 m-1  right-1 pad font-bold">
            Marvel toy
          </p>
          <img
            className="rounded border-4 hover:border-[#c18589] border-[#7E4C4F]"
            src="https://i.ibb.co/VtLjc7R/anne-nygard-ph-Af-D6-H0-ZDg-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

/* 
<div className=" gallery-item relative">
<p className='absolute bottom-0 m-1  right-1 pad font-bold'>Toy Plane</p>
<img className='rounded border-4 hover:border-[#c18589] border-[#7E4C4F]' src="https://i.ibb.co/84KxD2Y/josh-withers-o6ha-Xu-Xd-XJ0-unsplash.jpg" alt="" />
</div>
<div className=" h-24 shadow-xl w-36 lg:w-[300px] lg:h-[250px] gallery-item relative">
<p  className='absolute bottom-0 m-1  right-1 pad font-bold'>Alien Toy</p>
<img className='rounded border-4 hover:border-[#c18589] border-[#7E4C4F]' src="https://i.ibb.co/hgPfbGd/daniel-k-cheung-c-PF2nl-Wc-MY4-unsplash.jpg" alt="" />
</div>
<div className=" gallery-item relative">
<p  className='absolute bottom-0 m-1  right-1 pad font-bold'>Hulk</p>
<img className='rounded border-4 hover:border-[#c18589] border-[#7E4C4F]' src="https://i.ibb.co/VtLjc7R/anne-nygard-ph-Af-D6-H0-ZDg-unsplash.jpg" alt="" />
</div> */

/*
 */
