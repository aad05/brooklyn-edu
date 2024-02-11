import { Facebook, Instagram, Twitter, Phone, Mail, Clock } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <div className="w-full bg-[#04122D]">
      <div className="bg-[#04122D] w-[100%] py-[10px]">
        <div className="flex w-[80%] m-auto items-center  justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 item-center text-white">
              <Phone className="w-[16px]" />
              <p className="text-sm">+(371) 26526434</p>
            </div>
            <div className="flex gap-2 item-center text-white">
              <Mail className="w-[16px]" />
              <p className="text-sm">brooklyn.edu.uz@gmail.com</p>
            </div>
            <div className="flex gap-2 item-center text-white">
              <Clock className="w-[16px]" />
              <p className="text-sm">Du-Sha 08.00 - 20.00</p>
            </div>
          </div>
          <div className="flex gap-2 text-white items-center">
            <p className="text-sm">Bizni ijtimoiy tarmoqlarda kuzating:</p>
            <Facebook className="w-[16px]" />
            <Instagram className="w-[16px]" />
            <Twitter className="w-[16px]" />
          </div>
        </div>
      </div>
      <div className="flex  justify-between items-center w-[80%] m-auto mt-4">
        <div>
          <Image
            width={200}
            height={79}
            className="h-[79px]"
            alt="logo"
            src={"/images/logo.jpg"}
          />
        </div>
        <div className="flex gap-4 text-white text-xl">
          <h3>Asosiy</h3>
          <h3>Ta'lim</h3>
          <h3>Vizalar</h3>
          <h3>Biz Haqimizda</h3>
        </div>
        <div>
          <Button className="bg-[#04122D]">Bepul Konsultatsiya</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
