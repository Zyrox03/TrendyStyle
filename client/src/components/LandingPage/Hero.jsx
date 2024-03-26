import { HeroSwiper } from "../../widgets/HeroSwiper";
export const Hero = () => {
  return (
    <div
      dir="rtl"
      className="h-[25vh] lg:h-[60vh] flex items-center justify-start relative"
      id="hero"
    >
      <HeroSwiper />
    
    </div>
  );
};
