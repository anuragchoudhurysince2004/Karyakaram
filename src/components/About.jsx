import Carousel from "./Carousel";

export default function About() {
  const isMobile = window.innerWidth <= 640;
  return (
    <div
      id="about"
      className="about pb-16 lg:pb-32 bg-auto bg-no-repeat"
      style={{
        backgroundImage: 'url("/assets/img/Runway.png")',
        backgroundSize: "100% ",
        // height: "1122px",

        ...(isMobile && {
          // height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          margin: "auto",
        }),
      }}
    >
      <div className="bg-[#1C1C1C] font-play text-white pt-4 pb-4 pl-4 pr-2  lg:pt-28 lg:pl-28  lg:pr-32 lg:pb-14  font-normal lg:text-2xl sm:text-xs  rounded-3xl w-11/12 mx-auto ">
        <h2 className="text-4xl font-bold mb-4 ">About Us</h2>
        <p>
          At karyakaram we breathe life into your sporting dream, turning them
          into unforgettable experience. We organise various sporting events
          such as football, Table tennis, Badminton, and offer monthly
          challenges! Our mission is to raise the bar in sports event management
          by combining innovation, professionalism, and a deep understanding of
          our fellow players needs.
        </p>
        <Carousel />
      </div>
    </div>
  );
}
