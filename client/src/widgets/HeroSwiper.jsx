import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import slide1 from '../assets/slide1.webp'
import slide2 from '../assets/slide2.webp'
import slide3 from '../assets/slide3.webp'
export const HeroSwiper = () => {
  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",

      autoplay: {
        delay: 5000,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    // Destroy Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once after component mount

  return (
    <div dir="ltr" className="swiper absolute inset-0 h-full w-full">
        
      <div className="swiper-wrapper ">
        <div className="swiper-slide">
          <img
            src={slide1}
            alt="hero image"
            className=" object-contain w-full rounded-3xl inset-0 h-full w-full"
          />
        </div>
        <div className="swiper-slide">
          <img
            src={slide2}
            alt="hero image"
            className=" object-contain w-full rounded-3xl inset-0 h-full w-full"
          />
        </div>
        <div className="swiper-slide">
          <img
            src={slide3}
            alt="hero image"
            className=" object-contain w-full rounded-3xl inset-0 h-full w-full"
          />
        </div>
     
      </div>
      {/* <div className="swiper-pagination"></div> */}
    </div>
  );
};
