import Image from "next/image";
import React from "react";
import bg from "../../../public/assets/bgNew.jpg";
import bg2 from "../../../public/assets/hero2.jpg";
import bg3 from "../../../public/assets/hero3.jpg";

import Link from "next/link";
function hero() {
  return (
    <div className="bg-black text-white pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-4 md:my-4 lg:pl-24 justify-center">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl text-yellow-300 tracking-loose">
            Transform
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            Your home with our design and renovation services
          </h2>
          <Link
            href="/"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Explore Now
          </Link>
        </div>
        <div className=" flex flex-wrap items-center justify-evenly flex-row w-full">
          <Image
            className="inline-block xl:block w-[220px] h-[300px] rounded-[120px] rotate-[-12deg]"
            width={100}
            height={100}
            src={bg}
          />
          <Image
            className="inline-block w-[220px] ml-8 rounded-[120px] rotate-[-12deg]  h-[400px]"
            width={100}
            height={100}
            src={bg2}
          />
          <Image
            className="inline-block lg:block w-[220px] ml-8 rounded-[120px] rotate-[-12deg]  h-[300px]"
            width={100}
            height={100}
            src={bg3}
          />
        </div>
      </div>
    </div>
  );
}

export default hero;
