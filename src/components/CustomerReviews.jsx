import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Prashant Bisht",
      rating: 5,
      participation: "participant, Shuttle showdown",
      comment:
        "Wow, the badminton knockouts were a real adrenaline rush! The competition was fierce, and I had some intense matches. A great experience, even if I didn't win this time.",
    },
    {
      id: 2,
      name: "Sandeep",
      rating: 4,
      participation: "runner up, Mara2023",
      comment:
        "Absolutely fantastic marathon event! From start to finish, the organization was top-notch. The course was well-marked, the volunteers were incredibly supportive, and the overall atmosphere was electric. Can't wait for next year's race!",
    },
    {
      id: 3,
      name: "Yerlie",
      rating: 5,
      participation: "most goals, Battle of boots",
      comment: `"I've been participating in [organization name]'s tournaments for years, and they never fail to deliver an outstanding experience on and off the field."`,
    },
  ];

  return (
    <div className=" py-4 lg:px-4 lg:py-16 bg-[#D1CECE]">
      <h2 className="text-center font-teko text-4xl lg:text-7xl  font-normal lg:mb-4 mb-0">
        PEOPLE LOVES US
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-4 py-4 lg:py-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            className=" bg-white border py-12 lg:py-14 pl-8 mx-4 my-1 lg:my-0 lg:mx-0 lg:pl-14 pr-4 rounded-3xl shadow overflow-hidden"
          >
            <div className="flex">
              <div>
                <div className="flex items-center mb-0">
                  <div
                    style={{
                      // fontFamily: "Squa  da One",
                      fontSize: "120px",
                      fontWeight: 400,
                      lineHeight: "127px",
                      letterSpacing: "-0.04em",
                      textAlign: "center",
                      color: "#586D7D",
                    }}
                    className="w-8 h-8 bg-white  rounded-full flex items-center justify-center mr-2"
                  >
                    ’’
                  </div>
                </div>
                <p className="text-gray-700 pb-4">{review.comment}</p>
                <div className="flex flex-col">
                  <span className="font-semibold">{review.name}</span>
                  <span className="normal">{review.participation}</span>
                </div>
              </div>
              <img
                className="w-2/5 lg:w-2/6 object-contain"
                src={`assets/img/customers_review/${review.name}.png`}
                alt="customer pics"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
