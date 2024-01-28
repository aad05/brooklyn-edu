import { Moon, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const NewsBlogs = () => {
  return (
    <div className="w-[80%] m-auto mt-[100px] flex flex-col items-center mb-[100px]">
      <h3 className="text-2xl font-bold text-[#FF704B]">Blogs & News</h3>
      <h1 className="text-4xl font-bold mt-4">See Our Latest Blog & News!</h1>
      <div className="mt-8 flex gap-4">
        <Card className="w-[33%]">
          <CardHeader>
            <img src="https://eadn-wc01-4732220.nxedge.io/wp-content/uploads/2018/02/NYU-admissions-new-york-university.jpg" />
          </CardHeader>
          <CardContent>
            <p className="text-sm mt-2">30 January, 2023</p>
            <h3 className="text-xl font-bold">
              How to increase your accaptance to unis?
            </h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod.
            </p>
            <Button variant={"link"}>
              Read more <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[33%]">
          <CardHeader>
            <img src="https://eadn-wc01-4732220.nxedge.io/wp-content/uploads/2018/02/NYU-admissions-new-york-university.jpg" />
          </CardHeader>
          <CardContent>
            <p className="text-sm mt-2">30 January, 2023</p>
            <h3 className="text-xl font-bold">
              How to increase your accaptance to unis?
            </h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod.
            </p>
            <Button variant={"link"}>
              Read more <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
        <Card className="w-[33%]">
          <CardHeader>
            <img src="https://eadn-wc01-4732220.nxedge.io/wp-content/uploads/2018/02/NYU-admissions-new-york-university.jpg" />
          </CardHeader>
          <CardContent>
            <p className="text-sm mt-2">30 January, 2023</p>
            <h3 className="text-xl font-bold">
              How to increase your accaptance to unis?
            </h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ad
              illo, aspernatur aut rerum corporis odit perspiciatis commodi quam
              minus, exercitationem neque quod.
            </p>
            <Button variant={"link"}>
              Read more <MoveRight className="ml-[5px]" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsBlogs;
