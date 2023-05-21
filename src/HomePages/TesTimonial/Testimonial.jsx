import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonial.css'

const Testimonial = () => {
    return (
        <section className="testimonials-section">
        <h2 style={{fontFamily:'Pacifico'}} className="section-title">What Our Customers Say</h2>
        <Carousel
        className="text-red-600 bg-[#F2F2F2]"
          showThumbs={true} // Hide the navigation thumbs
          showIndicators={false} // Hide the slide indicators
          showStatus={false} // Hide the slide status
        >
          <div className="testimonial-item">
            <p className="testimonial-text">
              "From The starting, I always believed them. I had no problem from the beginning till to this day. 
              Which makes me more comfort to think from buying from them. I always love to do that."
            </p>
            <p className="testimonial-name">John Doe</p>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">
              "I love their Services. I had some delivery issues but they solved it like a chad. I now refer people to buy this stuff from them. ."
            </p>
            <p className="testimonial-name">Jane Smith</p>
          </div>
        </Carousel>
      </section>
    );
};

export default Testimonial;