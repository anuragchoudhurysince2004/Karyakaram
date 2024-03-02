import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const charityData = [
    { id: 1, title: "Education for All", image: "/path/to/charity1.jpg" },
    { id: 2, title: "Clean Water Initiative", image: "/path/to/charity2.jpg" },
    { id: 3, title: "Healthcare Support", image: "/path/to/charity3.jpg" },
    // Add more charity items as needed
  ];

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
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {charityData.map((charity) => (
            <div
              key={charity.id}
              className="flex justify-center items-center text-center"
            >
              <img
                src="https://picsum.photos/400/200"
                alt={charity.title}
                className="rounded-lg  object-cover w-11/12 justify-center m-auto"
              />
              {/* <h3 className="text-xl font-semibold text-white mt-2">
                {charity.title}
              </h3> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
