import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  Clock,
  Locate,
} from "lucide-react";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-[#04122E]">
      <div className="w-[80%] m-auto flex py-[40px] gap-12">
        <div className="w-[25%]">
          <img
            alt="logo"
            src="https://www.liblogo.com/img-logo/co2061c796-consulting-logo-consulting-logo-20-examples-of-emblems-design-tips-logaster.png"
            className="w-[200px]"
          />
          <p className="text-[#787C89] font-bold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nam?
          </p>
        </div>
        <div className="w-[25%]">
          <h3 className="text-[#fff] text-2xl font-bold">Our Services</h3>
          <p className="text-[#fff] font-bold mt-4">Service 1</p>
          <p className="text-[#fff] font-bold mt-4">Service 2</p>
          <p className="text-[#fff] font-bold mt-4">Service 3</p>
        </div>
        <div className="w-[25%]">
          <h3 className="text-[#fff] text-2xl font-bold">Contact Info</h3>
          <div className="text-[#fff] font-bold mt-4 flex gap-2">
            <Phone className="w-[16px]" />
            <p className="text-sm">+998 (77) 777 77 77</p>
          </div>
          <div className="text-[#fff] font-bold mt-4 flex gap-2">
            <Mail className="w-[16px]" />
            <p className="text-sm">office@gmail.com</p>
          </div>
          <div className="text-[#fff] font-bold mt-4 flex gap-2">
            <Locate className="w-[16px]" />
            <p className="text-sm">Mon-Sat 9 a.m to 6 p.m</p>
          </div>
        </div>
        <div className="w-[25%]">
          <h3 className="text-[#fff] text-2xl font-bold">News Letter</h3>
          <p className="text-[#787C89] font-bold mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Input className="mt-4" placeholder="Your letter." />
        </div>
      </div>
    </div>
  );
};

export default Footer;
