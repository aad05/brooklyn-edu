import { Facebook, Instagram, Twitter, Phone, Mail, Clock } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <div className="w-full">
      <div className="bg-[#04122D] w-[100%] py-[10px]">
        <div className="flex w-[80%] m-auto items-center  justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 item-center text-white">
              <Phone className="w-[16px]" />
              <p className="text-sm">+998 (77) 777 77 77</p>
            </div>
            <div className="flex gap-2 item-center text-white">
              <Mail className="w-[16px]" />
              <p className="text-sm">office@gmail.com</p>
            </div>
            <div className="flex gap-2 item-center text-white">
              <Clock className="w-[16px]" />
              <p className="text-sm">Mon-Sat 9 a.m to 6 p.m</p>
            </div>
          </div>
          <div className="flex gap-2 text-white items-center">
            <p className="text-sm">Follow</p>
            <Facebook className="w-[16px]" />
            <Instagram className="w-[16px]" />
            <Twitter className="w-[16px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[80%] m-auto mt-4">
        <div>
          <Image
            width={200}
            height={200}
            alt="logo"
            src={
              "https://www.liblogo.com/img-logo/co2061c796-consulting-logo-consulting-logo-20-examples-of-emblems-design-tips-logaster.png"
            }
          />
        </div>
        <div className="flex gap-4">
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Services</h3>
          <h3>Projects</h3>
        </div>
        <div>
          <Button className="bg-[#04122D]">Free Consulting</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
