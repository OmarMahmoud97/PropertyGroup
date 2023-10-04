import LandingCard from "./landingCard";
import DesignGif from "../../../public/assets/designGif.gif";
import builderGif from "../../../public/assets/buildingGif.gif";
import BespokeGif from "../../../public/assets/bespokeGif.gif";
import MaintenenceGif from "../../../public/assets/maintanenceGif.gif";
function LandingServices() {
  return (
    <div className=" text-white pb-20 py-20">
      <h1 className="w-full text-center text-3xl font-bold">Services</h1>
      <div className="flex my-16">
        <LandingCard
          title={"Design"}
          text={
            "Transforming Visions into Reality: Our designing services capture the essence of your dream space. With a keen eye for detail and aesthetics, we craft designs that are both functional and breathtaking."
          }
          imageSrc={DesignGif}
        />
        <LandingCard
          title={"Refurbishment"}
          text={
            "Breathe New Life into Spaces: Our refurbishment solutions re-imagine and rejuvenate your environment. From subtle tweaks to complete overhauls, we ensure a seamless blend of the old and new, giving your space a fresh lease on life"
          }
          imageSrc={builderGif}
        />
        <LandingCard
          title={"Bespoke Furniture"}
          text={
            "Crafted to Perfection: Dive into the world of custom-made furniture, tailored to fit your space and style. Each piece, a testament to craftsmanship and individuality, ensures your interior is uniquely you."
          }
          imageSrc={BespokeGif}
        />{" "}
        <LandingCard
          title={"Building Maintanance"}
          text={
            "Preserving Excellence: The beauty of a building lies in its upkeep. Our building maintenance services ensure longevity, functionality, and beauty, making certain your property stands the test of time with grace."
          }
          imageSrc={MaintenenceGif}
        />
      </div>
    </div>
  );
}

export default LandingServices;
