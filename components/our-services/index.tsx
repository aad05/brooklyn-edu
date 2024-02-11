import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Moon, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

const OurServices: FC = () => {
  return (
    <div className="w-[80%] m-auto mt-[100px] flex flex-col items-center mb-[100px]">
      <h3 className="text-2xl font-bold text-[#FF704B]">
        Bizning Xizmatlarimiz
      </h3>
      <h1 className="text-4xl font-bold mt-4">
        Biz ham talabalar, ham sayyohlar uchun xizmat ko{"'"}rsatamiz
      </h1>
      <div className="mt-8 flex gap-4">
        <Card className="bg-[url('/images/USA-study.jpg')] bg-cover bg-center relative">
          <div className="absolute top-0 w-full h-full bg-[#04122D] bg-opacity-50"></div>
          <CardHeader className="relative z-10">
            <div className="w-[50px] h-[50px] bg-[#FFF1EE] rounded-sm flex items-center justify-center">
              <Moon className="text-[#FF643A] w-[30px] height-[30px]" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <h3 className="text-xl font-bold text-white">
              AQSHda oliy ta{"'"}lim
            </h3>
            <p className="text-sm mt-2 text-white">
              Agar siz AQSH da o{"'"}gish juda ham gimmat degan filrda bo{"'"}
              lsangiz, xulosa gillishga shoshilmang chunk AQSH Olivy ta{"'"}
              lim muassasalari 50% dan 100% gacha chegirmalar taqdim etadi agar
              siz ularning talablariga javob bera olsangiz. Biz bilan
              chegirmalar olish yanada son va bosh og{"'"}riglarisiz
            </p>
            <Button variant={"link"} className="text-white">
              Batafsil <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[url('/images/travel.jpg')] bg-cover bg-center relative">
          <div className="absolute top-0 w-full h-full bg-[#04122D] bg-opacity-50"></div>
          <CardHeader className="relative z-10">
            <div className="w-[50px] h-[50px] bg-[#FFF1EE] rounded-sm flex items-center justify-center">
              <Moon className="text-[#FF643A] w-[30px] height-[30px]" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <h3 className="text-xl font-bold text-white">
              Kanada, Avstraliya, Yaponiya, Yevropa Ittifogi
            </h3>
            <p className="text-sm mt-2 text-white">
              Ushbu mamlakatlarga borishingiz imkoniyatini biz bilan oshiring.
              Biz bilan chegirmalar shuningdek tekin ta{"'"}lim ham olishingiz
              mumkin. Viza olishda esa sizga eng to{"'"}g{"'"}ri maslahatlarni
              beramiz
            </p>
            <Button variant={"link"} className="text-white">
              Batafsil <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[url('/images/travel.jpg')] bg-cover bg-center relative">
          <div className="absolute top-0 w-full h-full bg-[#04122D] bg-opacity-50"></div>
          <CardHeader className="relative z-10">
            <div className="w-[50px] h-[50px] bg-[#FFF1EE] rounded-sm flex items-center justify-center">
              <Moon className="text-[#FF643A] w-[30px] height-[30px]" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <h3 className="text-xl font-bold text-white">Sayohat vizalari</h3>
            <p className="text-sm mt-2 text-white">
              AQSH Kanada, Yevropa, Avstraliya, Yaponiya kabi davlatlariga
              biznes va turistik vizalari bo{"'"}yicha xizmat ko{"'"}rsatamiz
            </p>
            <Button variant={"link"} className="text-white">
              Batafsil <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OurServices;
