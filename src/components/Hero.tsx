import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full object-cover max-h-[550px]" alt="hero" />
    </div>
  );
};

export default Hero;

