import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import slide1 from '../images/hero1.jpg'
import slide2 from '../images/hero2.jpg'
import slide3 from '../images/hero3.jpg'
import { Link } from 'react-router-dom';


export default function Carousel() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear" 
  };
  
  return (
    <Slider {...settings} className='carousel'>
      <div>
        <div className='sitem' style={{ backgroundImage: "url('" + slide1 + "')", backgroundPosition:"center" }}>
          <div className='overlay_text'>
          <span className="heading"> Best Mini Mascara On Rs. 300</span>
        <h6 className="heading_2">
          GET 2 MINIS ON RS. 500</h6>
        <Link to={"/shop"} type="button" className="btn btn-outline-light btn-lg  ">Shop now</Link>
          </div>
        </div>
      </div>
      <div>
        <div className='sitem' style={{ backgroundImage: "url('" + slide2 + "')", backgroundPosition:"center" }}>
        <div className='overlay_text'>
          <span className="heading"> Up To 50% Off Kajal On Rs.499</span>
        <h6 className="heading_2">
          EYESHADOW ON RS. 399</h6>
        <Link to={"/shop"} type="button" className="btn btn-outline-light btn-lg  ">Shop now</Link>
        </div>
        </div>
      </div>
      <div>
      <div className='sitem' style={{ backgroundImage: "url('" + slide3 + "')", backgroundPosition:"center"}}>
      <div className='overlay_text'>
          <span className="heading"> Body Care Starting At Rs. 799</span>
        <h6 className="heading_2">
          TRAVEL MINIS AT FLAT RS. 500
        </h6>
        <Link to={"/shop"} type="button" className="btn btn-outline-light btn-lg ">Shop now</Link>
        </div>
        
        </div>
        </div>

    </Slider>
  )
}
