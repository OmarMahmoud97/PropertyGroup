"use client";
import Image from "next/image";
import maintenence from "../../../public/assets/services/maintenence.jpg";
import AnimatedWrapper from "../utils/animatedWrapper/animation";
function Maintenance() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="House"
                src={maintenence}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <AnimatedWrapper>
                <h2 className="text-2xl font-bold sm:text-3xl text-[#C7B365]">
                  Mastery in Preservation : Premium Building Maintenance
                </h2>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <p className="mt-4 text-gray-600">
                  The secret to timeless beauty? Constant care. Our building
                  maintenance services ensure your structure remains not just
                  functional but also aesthetically impeccable. With proactive
                  measures and meticulous attention, we make certain your
                  investment thrives and flourishes through the years.
                </p>
              </AnimatedWrapper>

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

export default Maintenance;
