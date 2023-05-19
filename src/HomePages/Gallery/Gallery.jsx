import React from 'react';
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='mx-auto mt-6'>
        <h1 className='text-center p-4 text-4xl font-bold'>Gallery Of Best Products</h1>
      <div className="gallery grid grid-cols-2 md:grid-cols-3 justify-stretch lg:grid-cols-4 text-center">
        <div className="gallery-item">
          <p className='text-start font-bold'>Batman Clay Figure</p>
          <img className='rounded-lg' src="https://i.ibb.co/6mBD1V7/yulia-matvienko-Ar-A3-S3k0w-TU-unsplash.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <p>text of the pic</p>
          <img src="https://i.ibb.co/84KxD2Y/josh-withers-o6ha-Xu-Xd-XJ0-unsplash.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <p>text of the pic</p>
          <img src="https://i.ibb.co/LxZMdZ3/muhd-asyraaf-Ti8-UF-r-Jl-Yo-unsplash.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <p>text of the pic</p>
          <img src="https://i.ibb.co/84KxD2Y/josh-withers-o6ha-Xu-Xd-XJ0-unsplash.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <p>text of the pic</p>
          <img src="https://i.ibb.co/84KxD2Y/josh-withers-o6ha-Xu-Xd-XJ0-unsplash.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <p>text of the pic</p>
          <img src="https://i.ibb.co/hgPfbGd/daniel-k-cheung-c-PF2nl-Wc-MY4-unsplash.jpg" alt="" />
        </div>
        <div className="gallery-item">
          <p>text of the pic</p>
          <img src="https://i.ibb.co/VtLjc7R/anne-nygard-ph-Af-D6-H0-ZDg-unsplash.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
