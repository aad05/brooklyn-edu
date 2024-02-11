import { FC } from "react";

const CountUp: FC = () => {
  return (
    <div className="w-full flex items-center justify-center h-[500px] bg-no-repeat bg-cover relative bg-[url('https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/image%2Fpexels-pixabay-40142.jpg?alt=media&token=251a25e5-5072-42af-884e-2826c3a13ac0')]">
      <div className="absolute top-0 w-full h-full bg-[#232E44] opacity-75"></div>
      {/* <div className="w-[80%] m-auto flex justify-between z-10 absolute">
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-9xl">321</h1>
          <p className="mt-[10px] text-xl">Cases Completed</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-9xl">21</h1>
          <p className="mt-[10px] text-xl">Consultants</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-9xl">125</h1>
          <p className="mt-[10px] text-xl">Awards winning</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-9xl">100%</h1>
          <p className="mt-[10px] text-xl">Satisfied Customers</p>
        </div>
      </div> */}
    </div>
  );
};

export default CountUp;
