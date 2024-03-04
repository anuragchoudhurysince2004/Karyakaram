export default function Partners() {
  return (
    <div id="partnership" className="bg-[#1C1C1C] text-white">
      <p className="lg:text-4xl text-3xl font-bold font-play  text-center pt-4 pb-4 lg:pt-28 lg:pb-16">
        OUR TRUSTED PARTNERS
      </p>
      <div
        className="  flex justify-center gap-4 lg:gap-0 "
        style={{
          background: "linear-gradient(to bottom, #444, #222)",
        }}
      >
        <img
          className="p-4 lg:size-auto lg:p-16 size-6/12 object-contain"
          src="assets/img/Decathlon_Logo.png"
          alt="decathlon logo"
        />
        <img
          className="p-4 lg:size-auto lg:p-16 size-4/12 object-contain"
          src="assets/img/Hudle_logo.png"
          alt="Hudle logo"
        />
      </div>
      <p
        style={{ color: " #FFFFFFCC" }}
        className="font-play  md:text-4xl text-center pt-6 pl-4 pr-4 pb-6   lg:pt-32 lg:pl-64 lg:pr-64 lg:pb-20 border rounded-3xl m-6 lg:m-0 lg:border-none"
      >
        we are keenly exploring partnerships at Karyakaram, we'd love to hear
        from you. Whether you represent a corporation, a sports-related brand,
        or you're an individual who believes in the power of sports, we're open
        to discussions.
      </p>
      <div className="flex lg:gap-8 gap-6 lg:pb-32 pb-8 justify-center items-center object-contain font-inter lg:text-xl text-xs">
        <a
          href="https://www.linkedin.com/company/karyakaram/"
          target="blank"
          className=" px-6 py-2 lg:py-1 lg:px-4 border rounded-full object-contain "
        >
          Connect Today
        </a>
        <a href="https://wa.me/919650213199" target="blank">
          <img
            className="border-8 rounded-full"
            src="assets/img/whatsapp_logo.png"
            alt="whatsapp logo"
          />
        </a>
        <a
          className="px-6 py-2 lg:py-1 lg:px-4 border rounded-full"
          href={`mailto:${"karyakaramm@gmail.com"}`}
        >
          Mail Us
        </a>
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
