import Image from "next/image";
import bg from "../../../public/assets/bedroom.jpg";
import bg2 from "../../../public/assets/kitchen.jpg";
import bg3 from "../../../public/assets/livingRoom.jpg";
import Link from "next/link";
import AnimatedWrapper from "../utils/animatedWrapper/animation";
function hero() {
  return (
    <div className=" text-white pb-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-4 md:my-4 lg:pl-24 justify-center">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            <span className="text-3xl md:text-5xl text-[#C7B365]">
              Transform&nbsp;
            </span>
            Your home with our design and renovation services
          </h2>

          <Link
            href="/"
            className="bg-transparent hover:bg-[#C7B365] text-[#C7B365] hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-[#C7B365] hover:border-transparent"
          >
            Explore Now
          </Link>
        </div>
        <div className=" flex flex-wrap items-center justify-evenly flex-row w-full">
          <AnimatedWrapper>
            <Image
              className="inline-block xl:block w-[220px] h-[300px] "
              width={100}
              height={100}
              src={bg}
              unoptimized={true}
              alt="background img"
            />
          </AnimatedWrapper>

          <AnimatedWrapper>
            <Image
              className="inline-block w-[220px] md:ml-8  h-[400px]"
              width={100}
              height={100}
              src={bg2}
              unoptimized={true}
              alt="background img"
            />
          </AnimatedWrapper>

          <AnimatedWrapper>
            <Image
              className="inline-block lg:block w-[220px] md:ml-8  h-[300px]"
              width={100}
              height={100}
              src={bg3}
              unoptimized={true}
              alt="background img"
            />
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
}

export default hero;
