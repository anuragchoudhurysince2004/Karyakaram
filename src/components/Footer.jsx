import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#5b5b5b] py-10">
      <div className="container mx-auto flex justify-between pt-0 lg:pt-8">
        <div className="w-full lg:w-2/5 ">
          <div className="flex items-center pl-3 ">
            <img
              className="w-32"
              src="assets/img/MSME-Logo.png"
              alt="msme logo"
            />
            {/* <h3 className="text-lg font-semibold mb-4">COMPANY</h3> */}
          </div>
          <ul className=" flex flex-row gap-4 pt-4 lg:gap-8 items-center text-xs lg:text-xl font-bold justify-center">
            <li>
              <a href="#about" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#challenges" className="hover:underline">
                Challenges
              </a>
            </li>
            <li>
              <a href="#events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:underline">
                FAQS
              </a>
            </li>
            <li>
              <a href="#customer-service" className="hover:underline">
                Customer Service
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="w-1/3">
          <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#track-order" className="hover:underline">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#return-exchange" className="hover:underline">
                Return & Exchange
              </a>
            </li>
            <li>
              <a href="#terms-conditions" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className="w-1/3">
          <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#help-center" className="hover:underline">
                Help center
              </a>
            </li>
            <li>
              <a href="#tutorials" className="hover:underline">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#support" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="container mx-auto flex justify-between items-center mt-10 border-t border-gray-700 py-5">
        <p>&copy; 2023 COMPANY. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/karya.karam" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 48 48"
              fill="#5b5b5b"
            >
              <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
            </svg>
          </a>
          {/* <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 50 50"
              fill="#5b5b5b"
            >
              <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
            </svg>
          </a> */}
          {/* <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 50 50"
              fill="#5b5b5b"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </a> */}
          <a href="https://www.linkedin.com/company/karyakaram/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 50 50"
              fill="#5b5b5b"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
