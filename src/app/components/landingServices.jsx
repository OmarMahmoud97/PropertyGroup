import LandingCard from "./landingCard";
import DesignGif from "../../../public/assets/designGif.gif";
import builderGif from "../../../public/assets/buildingGif.gif";
import BespokeGif from "../../../public/assets/bespokeGif.gif";
import MaintenenceGif from "../../../public/assets/maintanenceGif.gif";
function LandingServices() {
  return (
    <div className=" text-white pb-20">
      <h1 className="w-full text-center text-3xl font-bold">Services</h1>
      <div className="flex my-16">
        <LandingCard
          title={"Design"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla nostrum laborum? At nihil dolor suscipit assumenda laborum aut. Ut architecto quidem iusto ipsum? Ad ab reiciendis in cumque dignissimos!"
          }
          imageSrc={DesignGif}
        />
        <LandingCard
          title={"Refurbishment"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla nostrum laborum? At nihil dolor suscipit assumenda laborum aut. Ut architecto quidem iusto ipsum? Ad ab reiciendis in cumque dignissimos!"
          }
          imageSrc={builderGif}
        />
        <LandingCard
          title={"Bespoke Furniture"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla nostrum laborum? At nihil dolor suscipit assumenda laborum aut. Ut architecto quidem iusto ipsum? Ad ab reiciendis in cumque dignissimos!"
          }
          imageSrc={BespokeGif}
        />{" "}
        <LandingCard
          title={"Building Maintanance"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla nostrum laborum? At nihil dolor suscipit assumenda laborum aut. Ut architecto quidem iusto ipsum? Ad ab reiciendis in cumque dignissimos!"
          }
          imageSrc={MaintenenceGif}
        />
      </div>
    </div>
  );
}

export default LandingServices;
