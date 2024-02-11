import { Card, CardContent, CardHeader } from "../ui/card";

const Team = () => {
  return (
    <div className="w-[80%] m-auto mt-[100px] flex flex-col items-center mb-[100px]">
      <h3 className="text-2xl font-bold text-[#FF704B]">Mutaxassislar</h3>
      <h1 className="text-4xl font-bold mt-4">Bizning jamoamiz!</h1>
      <div className="mt-8 flex gap-4">
        <Card className="w-[33%]">
          <CardHeader>
            <img
              src={
                "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg"
              }
            />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="text-2xl font-bold">Abror</h3>
            <p className="text-sm mt-2">
              Jamoa rahbari & vizalar bo'yicha mutaxassis
            </p>
          </CardContent>
        </Card>
        <Card className="w-[33%]">
          <CardHeader>
            <img
              src={
                "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg"
              }
            />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="text-2xl font-bold">Azizbek</h3>
            <p className="text-sm mt-2">
              Jamoa rahbari & Oliy Ta'lim bo'vicha mutaxassis
            </p>
          </CardContent>
        </Card>
        <Card className="w-[33%]">
          <CardHeader>
            <img
              src={
                "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg"
              }
            />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="text-2xl font-bold">Ziyodullakhon</h3>
            <p className="text-sm mt-2">Shengen vizalari bo'vicha mutaxassis</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;
