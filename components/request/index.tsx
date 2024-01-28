import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Request = () => {
  return (
    <div className="w-[100%] bg-[#F6FAFE] h-[700px]">
      <div className="w-[80%] h-full m-auto flex items-center justify-between gap-12">
        <div className="flex-[1]">
          <img src="https://www.thoughtco.com/thmb/w9h2eusNboflTm20DRXO1NL7Sbw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/a-right-hand-of-asian-skin-is-sending-letter-to-post-box-974020720-5c5f239646e0fb0001ca87ba.jpg" />
        </div>
        <div className="flex-[1]">
          <h3 className="text-2xl font-bold text-[#FF704B]">Our Services</h3>
          <h1 className="text-5xl font-extrabold mt-4">
            Get Your Personalized Quote Today
          </h1>
          <p className="text-sm mt-4 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            soluta.
          </p>
          <div className="mt-[30px]">
            <div className="flex gap-8">
              <Input placeholder="Your name" />
              <Input placeholder="Your surname" />
            </div>
            <div className="flex gap-8 mt-4">
              <Input placeholder="Your name" />
              <Input placeholder="Your surname" />
            </div>
            <Button className="mt-[30px] w-full">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
