import { FC } from "react";
import { Button } from "../ui/button";
import { Carousel } from "antd";

const Hero: FC = () => {
  return (
    <Carousel effect="fade" autoplay speed={1000}>
      <div className="w-full bg-[url('/images/hero-1.jpg')] h-screen bg-cover bg-center flex justify-center items-center relative">
        <div className="absolute top-0 w-full h-full bg-[#04122D] bg-opacity-50"></div>
        <div className="w-[80%] absolute top-0 left-[10%] z-10">
          <h1 className="text-8xl font-black pt-[250px] text-white">
            SABR VA ISHONCH, <br /> SIZNING <br /> MOVOFFAQIYATINGIZ!
          </h1>
          <p className="mt-[40px] text-2xl text-white">
            BROOKLYN EDU - <br /> BIZ BILAN TA'LIM TEKIN YOKI JUDA HAM ARZON!
          </p>
          <div className="mt-[100px] pb-[200px]">
            <Button className="w-[250px] h-[70px] text-xl">
              BEPUL KONSULTATSIYA
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[url('/images/hero-2.jpg')] h-screen bg-cover bg-center flex justify-center items-center relative">
        <div className="absolute top-0 w-full h-full bg-[#04122D] bg-opacity-50"></div>
        <div className="w-[80%] absolute top-0 left-[10%] z-10">
          <h1 className="text-8xl font-black pt-[250px] text-white">
            SABR VA ISHONCH, <br /> SIZNING <br /> MOVOFFAQIYATINGIZ!
          </h1>
          <p className="mt-[40px] text-2xl text-white">
            BROOKLYN EDU - <br /> BIZ BILAN TA'LIM TEKIN YOKI JUDA HAM ARZON!
          </p>
          <div className="mt-[100px] pb-[200px]">
            <Button className="w-[250px] h-[70px] text-xl">
              BEPUL KONSULTATSIYA
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
