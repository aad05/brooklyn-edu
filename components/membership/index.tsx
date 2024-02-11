import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const Membership: FC = () => {
  return (
    <div className="m-auto w-[80%] flex items-center justify-between gap-[100px] relative top-[-100px]">
      <Card className="w-[30%]">
        <CardHeader className="border-b-2 border-b-[#E2E8F0]">
          <h1 className="text-2xl text-center font-bold">Konsultatsiva</h1>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold mt-[30px]">$O</h3>
          <div className="flex flex-col gap-3 my-[30px]">
            <p className="text-sm mt-2 font-semibold">Umumiy ma'lumotlar</p>
            <p className="text-sm mt-2 font-semibold">Xarajatlar</p>
            <p className="text-sm mt-2 font-semibold">
              Viza olish imkoniyatlarini baholash
            </p>
          </div>
          <Button>Batafsil</Button>
        </CardContent>
      </Card>
      <Card className="w-[40%]">
        <CardHeader className="border-b-2 border-b-[#E2E8F0]">
          <h1 className="text-2xl text-center font-bold">Ta'lim xizmatlari</h1>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold mt-[30px]">$250-$999</h3>
          <div className="flex flex-col gap-3 my-[30px]">
            <p className="text-sm mt-2 font-semibold">
              Universitetga topshirish
            </p>
            <p className="text-sm mt-2 font-semibold">
              (agar tegishli bo'lsa) viza intervyu tayyorgarliklari
            </p>
            <p className="text-sm mt-2 font-semibold">
              Viza hujjatlarida ko'mak berish
            </p>
          </div>
          <Button>Batafsil</Button>
        </CardContent>
      </Card>
      <Card className="w-[30%]">
        <CardHeader className="border-b-2 border-b-[#E2E8F0]">
          <h1 className="text-2xl text-center font-bold">
            Sayyohlik viza xizmatlari
          </h1>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold mt-[30px]">$100-$499</h3>
          <div className="flex flex-col gap-3 my-[30px]">
            <p className="text-sm mt-2 font-semibold">Konsultatsiya</p>
            <p className="text-sm mt-2 font-semibold">
              Imkoniyatlarni baholash
            </p>
            <p className="text-sm mt-2 font-semibold">
              Viza hujjatlarini tayyorlash
            </p>
          </div>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Membership;
