import { React } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./index.js";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-8">
      <div className="container mx-auto px-2 lg:px-4">
        <Slider {...settings}>
          {Object.keys(images).map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center text-center "
            >
              <img
                src={images[image]}
                alt={`Slide ${index}`}
                className="rounded-lg  object-cover h-52 lg:size-3/5 justify-center m-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
