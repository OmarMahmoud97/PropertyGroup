import React from "react";

function About() {
  return (
    <section className="flex items-center py-10  xl:h-screen font-poppins min-h-screen my-32  ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative">
              <img
                src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg"
                alt=""
                className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
              />
              <div className="absolute z-10 hidden w-full h-full bg-[#C7B365] rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
              <div className="absolute z-50 text-[#C7B365] transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500"></div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="relative">
              <h1 className="absolute -top-20 left-0 text-[20px] lg:text-[100px] font-bold text-gray-200 opacity-10 md:block hidden">
                About Us
              </h1>
              <h1 className="pl-2 text-3xl font-bold border-l-8 border-[#C7B365] md:text-5xl dark:text-white">
                Welcome to Bati B Designs
              </h1>
              <h1 className="text-lg">
                Where Design Meets{" "}
                <span className="text-[#C7B365]">Exellence</span>
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              At Bati B Designs, we transform spaces into functional art with
              our unwavering passion for design and precision. From contemporary
              kitchens to luxurious bathrooms, our expertise spans creation to
              design. Every client's dream is unique, and our skilled team
              brings these visions to life, whether minimalist sanctuaries or
              vibrant living hubs.
            </p>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              Our diverse portfolio ranges from bespoke furniture to large home
              renovations, all reflecting our commitment to quality, innovation,
              and detail. We also offer extensive maintenance services to ensure
              your spaces remain timeless.
            </p>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              Founded on trust and excellence, our experienced team of craftsmen
              and designers is dedicated to crafting unparalleled experiences.
              At Bati B Designs, we're more than builders – we're experience
              crafters.
            </p>

            <a
              href="#"
              className="px-4 py-3 text-gray-50 transition-all transform bg-[#C7B365] rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 "
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
