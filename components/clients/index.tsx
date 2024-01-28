import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const Clients: FC = () => {
  return (
    <div className="w-[80%] m-auto mt-[100px] flex flex-col items-center mb-[100px]">
      <h3 className="text-2xl font-bold text-[#FF704B]">Testimonials</h3>
      <h1 className="text-4xl font-bold mt-4">What Our Clients Saying ?</h1>
      <div className="mt-8 flex gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <img
                src="https://media.gq.com/photos/5582c6eae52bc4b477a9d37a/master/w_320%2Cc_limit/copilot-entertainment-celebrities-201307-08.jpg"
                className="w-[80px] h-[80px] rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Zomas Zarki</h1>
                <p>Web Developer</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod.
            </p>
            <p className="text-sm mt-2">2 days ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <img
                src="https://media.gq.com/photos/5582c6eae52bc4b477a9d37a/master/w_320%2Cc_limit/copilot-entertainment-celebrities-201307-08.jpg"
                className="w-[80px] h-[80px] rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Zomas Zarki</h1>
                <p>Web Developer</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod.
            </p>
            <p className="text-sm mt-2">2 days ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <img
                src="https://media.gq.com/photos/5582c6eae52bc4b477a9d37a/master/w_320%2Cc_limit/copilot-entertainment-celebrities-201307-08.jpg"
                className="w-[80px] h-[80px] rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Zomas Zarki</h1>
                <p>Web Developer</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod.
            </p>
            <p className="text-sm mt-2">2 days ago</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Clients;
