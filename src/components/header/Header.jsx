import React, { useState } from "react";

import "./header.css";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // if (!showMenu) {
    //   document.body.style.overflow = "hidden";
    //   document.body.style.filter = "blur(4px)";
    // } else {
    //   document.body.style.overflow = "auto";
    //   document.body.style.filter = "none";
    // }
  };
  return (
    <div
      className="relative bg-auto bg-no-repeat hero-img"
      style={{
        // backgroundImage: 'url("/assets/img/Runway.jpeg")',
        backgroundImage: 'url("/assets/img/karyakaram_bg.png")',
        backgroundSize: "100% ",
        height: "860px",
      }}
    >
      <header className=" text-white font-semibold  text-sm py-4 lg:py-14 lg:px-48 sm:px-2 ">
        <div
          className={`nav-menu ${
            showMenu ? "show-menu" : ""
          } border-1 rounded-full p-px flex justify-between items-center relative`}
        >
          <div className="menu-toggle absolute right-2" onClick={toggleMenu}>
            ☰
          </div>
          <nav className={`nav-links ${showMenu ? "show-menu" : ""}`}>
            <ul className=" flex space-x-0 mx-5 lg:mx-0 lg:space-x-4 lg:flex-row flex-col z-30 backdrop-blur-sm ">
              <li>
                <a href="/">Karyakaram</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#partnership">Partnership</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 items-center">
            <a
              className="pl-3"
              href="https://www.instagram.com/karya.karam?igsh=ZDdzazJmemZnMWJ5"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="white"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </a>
            <a
              href="https://rzp.io/l/BOB4TOKEN"
              className="text-white font-normal py-2 px-4 rounded "
            >
              Participate
            </a>
            <a
              href={`tel:${9650213199}`}
              className="bg-white hover:bg-white text-black font-normal py-2 px-4 rounded-full"
            >
              Contact Us
            </a>
          </div>
          {/* <Route path="/" exact component={Home} /> */}
        </div>
      </header>
      <h1 className="font-teko lg:text-9xl text-white text-center pt-28 lg:pt-32 text-6xl">
        KARYAKARAM
      </h1>
      <div className="flex flex-col gap-1 lg:gap-3 lg:text-2xl  text-white font-bold w-60 lg:w-80 pt-52 lg:pt-32 absolute right-4 lg:right-40">
        {/* <a
          href="#abc"
          className="px-6 py-2 border-2 rounded-2xl flex justify-between items-center"
        >
          <p className="text-4xl">↖</p>
          Marathons
        </a> */}
        <a
          href="https://rzp.io/l/BOB4TOKEN"
          target="blank"
          className="px-6 py-2 border-2 rounded-2xl flex justify-between items-center"
        >
          <p className="text-4xl">↖</p>
          Battle of Boots 4.O
        </a>
        {/* <a
          href="#ls"
          className="px-6 py-2 border-2 rounded-2xl flex justify-between items-center"
        >
          <p className="text-4xl">↖</p>
          Shuttle showdown
        </a> */}
      </div>
    </div>
  );
}
