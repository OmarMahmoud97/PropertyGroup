import Image from "next/image";

const LandingCard = ({ title, imageSrc, text }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg text-white m-2 flex-wrap">
      <h2 className="mb-4 text-2xl font-semibold text-[#C7B365]">{title}</h2>
      <Image
        src={imageSrc}
        alt={title}
        className="mb-4 w-32 object-cover rounded-md"
      />
      <p className="text-center">{text}</p>
    </div>
  );
};

export default LandingCard;
