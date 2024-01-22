import { FC } from "react";
import { Button } from "../ui/button";

const Hero: FC = () => {
  return (
    <div className="bg-[#F6F9FE] mt-4">
      <div className="w-[80%] m-auto">
        <h1 className="text-7xl font-extrabold pt-[100px] text-[#04122D]">
          We Are Complete <br /> Consulting Service <br /> Provider
        </h1>
        <p className="mt-[40px] text-xl text-[#8A8A8B]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero <br />{" "}
          sequi ad fuga, aperiam perspiciatis magni!
        </p>
        <div className="mt-5 pb-[200px]">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
