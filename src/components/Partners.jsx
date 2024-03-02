export default function Partners() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      <p className="lg:text-4xl text-3xl font-bold font-play  text-center pt-4 pb-4 lg:pt-28 lg:pb-16">
        OUR TRUSTED PARTNERS
      </p>
      <div
        className="  flex justify-center gap-2 lg:gap-0 "
        style={{
          background: "linear-gradient(to bottom, #444, #222)",
        }}
      >
        <img
          className="sm:p-4 lg:size-auto lg:p-16 size-4/12 object-contain"
          src="assets/img/Decathlon_Logo.png"
          alt="decathlon logo"
        />
        <img
          className="sm:p-4 lg:size-auto lg:p-16 size-1/5 object-contain"
          src="assets/img/Hudle_logo.png"
          alt="Hudle logo"
        />
      </div>
      <p
        style={{ color: " #FFFFFFCC" }}
        className="font-play text-2xl  md:text-xl text-center pt-10 pl-8 pr-8 pb-10  lg:pt-32 lg:pl-64 lg:pr-64 lg:pb-20"
      >
        we are keenly exploring partnerships at Karyakaram, we'd love to hear
        from you. Whether you represent a corporation, a sports-related brand,
        or you're an individual who believes in the power of sports, we're open
        to discussions.
      </p>
      <div className="flex lg:gap-8 gap-2 lg:pb-32 pb-8 justify-center font-inter lg:text-xl text-xs">
        <button className="py-1 px-4 border rounded-full ">
          Connect Today
        </button>
        <img
          className="border-8 rounded-full"
          src="assets/img/whatsapp_logo.png"
          alt="whatsapp logo"
        />
        <button className="py-1 px-4 border rounded-full">Mail Us</button>
      </div>
      {/* <div
          className="h-64 w-1/2 "
          style={{
            background:
              "linear-gradient(90deg, rgba(104,101,101,0.1) 12%, rgba(0,0,0,0) 100%)",
          }}
        ></div> */}
    </div>
  );
}
