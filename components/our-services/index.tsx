import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Moon, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

const OurServices: FC = () => {
  return (
    <div className="w-[80%] m-auto mt-[100px] flex flex-col items-center">
      <h3 className="text-2xl font-bold text-[#FF704B]">Our Services</h3>
      <h1 className="text-4xl font-bold mt-4">What We Do To Serve You Best </h1>
      <div className="mt-8 flex gap-4">
        <Card>
          <CardHeader>
            <div className="w-[50px] h-[50px] bg-[#FFF1EE] rounded-sm flex items-center justify-center">
              <Moon className="text-[#FF643A] w-[30px] height-[30px]" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold">Business Solutions</h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod. Sunt sequi error expedita
              nostrum consequatur, deserunt quibusdam alias officia quia labore
              ducimus, optio ratione, accusantium porro molestias minus libero
              aliquam mollitia veritatis unde.
            </p>
            <Button variant={"link"}>
              Learn more <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="w-[50px] h-[50px] bg-[#FFF1EE] rounded-sm flex items-center justify-center">
              <Moon className="text-[#FF643A] w-[30px] height-[30px]" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold">Partnership Solutions</h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod. Sunt sequi error expedita
              nostrum consequatur, deserunt quibusdam alias officia quia labore
              ducimus, optio ratione, accusantium porro molestias minus libero
              aliquam mollitia veritatis unde.
            </p>
            <Button variant={"link"}>
              Learn more <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="w-[50px] h-[50px] bg-[#FFF1EE] rounded-sm flex items-center justify-center">
              <Moon className="text-[#FF643A] w-[30px] height-[30px]" />
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold">Quality Control</h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod. Sunt sequi error expedita
              nostrum consequatur, deserunt quibusdam alias officia quia labore
              ducimus, optio ratione, accusantium porro molestias minus libero
              aliquam mollitia veritatis unde.
            </p>
            <Button variant={"link"}>
              Learn more <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OurServices;
