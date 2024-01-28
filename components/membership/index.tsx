import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const Membership: FC = () => {
  return (
    <div className="m-auto w-[80%] flex items-center justify-between gap-[100px] relative top-[-100px]">
      <Card className="w-[30%]">
        <CardHeader className="border-b-2 border-b-[#E2E8F0]">
          <h1 className="text-2xl text-center font-bold">Basic</h1>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold mt-[30px]">$140</h3>
          <div className="flex flex-col gap-3 my-[30px]">
            <p className="text-sm mt-2 font-semibold">Consulting</p>
            <p className="text-sm mt-2 font-semibold">Advising</p>
            <p className="text-sm mt-2 text-[#A9A9A9]">Business Manning</p>
            <p className="text-sm mt-2 text-[#A9A9A9]">Investment</p>
          </div>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
      <Card className="w-[40%]">
        <CardHeader className="border-b-2 border-b-[#E2E8F0]">
          <h1 className="text-2xl text-center font-bold">Business</h1>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold mt-[30px]">$250</h3>
          <div className="flex flex-col gap-3 my-[30px]">
            <p className="text-sm mt-2 font-semibold">Consulting</p>
            <p className="text-sm mt-2 font-semibold">Advising</p>
            <p className="text-sm mt-2 text-[#A9A9A9]">Business Manning</p>
            <p className="text-sm mt-2 text-[#A9A9A9]">Investment</p>
          </div>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
      <Card className="w-[30%]">
        <CardHeader className="border-b-2 border-b-[#E2E8F0]">
          <h1 className="text-2xl text-center font-bold">Pro</h1>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold mt-[30px]">$400</h3>
          <div className="flex flex-col gap-3 my-[30px]">
            <p className="text-sm mt-2 font-semibold">Consulting</p>
            <p className="text-sm mt-2 font-semibold">Advising</p>
            <p className="text-sm mt-2 text-[#A9A9A9]">Business Manning</p>
            <p className="text-sm mt-2 text-[#A9A9A9]">Investment</p>
          </div>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Membership;
