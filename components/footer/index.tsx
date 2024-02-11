import { Phone, Mail, Locate } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#04122E]">
      <div className="w-[80%] m-auto flex py-[40px] gap-12">
        <div className="w-[25%]">
          <Image
            width={200}
            height={79}
            className="h-[79px]"
            alt="logo"
            src={"/images/logo.jpg"}
          />
          <p className="text-[#787C89] font-bold mt-4">
            SABR VA ISHONCH, SIZNING MOVOFFAQIYATINGIZ!
          </p>
        </div>
        <div className="w-[25%]">
          <h3 className="text-[#fff] text-2xl font-bold">Bizning Xizmatlar</h3>
          <p className="text-[#fff] font-bold mt-4">
            Chet Elda Oliy Ta{"'"}lim
          </p>
          <p className="text-[#fff] font-bold mt-4">Sayohat Vizalari</p>
        </div>
        <div className="w-[25%]">
          <h3 className="text-[#fff] text-2xl font-bold">
            Biz Bilan Bog{"'"}lanish uchun
          </h3>
          <div className="text-[#fff] font-bold mt-4 flex gap-2">
            <Phone className="w-[16px]" />
            <p className="text-sm">+(371) 26526434</p>
          </div>
          <div className="text-[#fff] font-bold mt-4 flex gap-2">
            <Mail className="w-[16px]" />
            <p className="text-sm">brooklyn.edu.uz@gmail.com</p>
          </div>
          <div className="text-[#fff] font-bold mt-4 flex gap-2">
            <Locate className="w-[16px]" />
            <p className="text-sm">Du-Sha 08.00 - 20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
