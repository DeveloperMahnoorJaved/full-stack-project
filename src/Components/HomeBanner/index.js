import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // FontAwesome Arrows


// Left Arrow Component
const PrevArrow = ({ onClick }) => {
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <FaChevronLeft />
      </button>
    );
  };
  // Right Arrow Component
const NextArrow = ({ onClick }) => {
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <FaChevronRight />
      </button>
    );
  };
  

const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1900, 
        arrows: true,
      };

    return (
        <div className="homeBannerSection">
    <Slider {...settings}>
         <div className="item">
            <img src="men3.webp" />
         </div>
         <div className="item">
            <img src="men1.webp"/>
         </div>
         <div className="item">
            <img src="men2.webp"/>
         </div>
         <div className="item">
            <img src="man.webp"/>
         </div>
    </Slider>
        </div>
    )

}
export default HomeBanner;
