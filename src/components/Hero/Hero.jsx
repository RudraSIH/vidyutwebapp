import React from 'react'
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from "react-countup";
import Carousel from '../Carousal/carousal';
import image1 from '../../../public/image1.jpg'
import image2 from '../../../public/image2.jpg'
import image3 from '../../../public/image3.jpg'
import backgroundideo from '../../../public/backgroundvideo1.mp4'

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">

        <div className="padding innerWidth flexCenter
      
      hero-container ">
          {/*Left Side */}
          <div className=" flexColStart hero-left">
            <div className='container'>
              <div className="hero-title">
                <div className="orange-circle" />
              </div>
            </div>
          </div>
          {/*right side */}
          <div className="video-background-container">
            <video autoPlay loop muted className="background-video">
              <source src={backgroundideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src={image2} alt="Mobile View" className="mobile-background-image" />
          </div>

        </div>
        {/* <div className="flexCenter hero-right">
          <div className="image-container">
            <button className="chatbot-button">
              <img src="./chatbotnew.png" alt="Chatbot" />
            </button>
          </div>

        </div> */}
      </section>
      {/* Services Portion */}


    </div>
  )
}

export default Hero;

