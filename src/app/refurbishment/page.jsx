import Image from "next/image";
import refurbisment from "../../../public/assets/services/refurbishment.jpg";
function Refurbishment() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="House"
                src={refurbisment}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-[#C7B365]">
                Revitalizing Spaces: Comprehensive Refurbishment Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                Every space deserves a second chance, and our refurbishment
                services grant just that. From the whispers of worn-out corners
                to the tales of faded walls, we transform them into loud
                declarations of beauty and functionality. Rediscover your
                space's potential and fall in love all over again.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-block rounded border border-[#C7B365] bg-[#C7B365] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#C7B365] focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Refurbishment;
