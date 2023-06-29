"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import react from "@/assets/react.png";
import javascript from "@/assets/javascript.png";
import python from "@/assets/python.png";
import css from "@/assets/css.png";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/quiz");
    // console.log("hello");
  };

  return (
    <main className="flex  flex-col items-center justify-between p-2">
      <p className="py-4 px-2 text-center text-[18px]">
        Do you have what it takes to become the quiz master?
      </p>
      <p className="py-4 px-2 text-center text-[18px]">Choose your language</p>
      <div className="flex gap-6 flex-col">
        <Image
          src={react}
          alt="logo"
          className="w-[240px] mt-2 border-[6px] rounded-full cursor-pointer hover:border-blue-700"
        />
        <Image
          src={javascript}
          alt="logo"
          className="w-[240px] mt-2 border-[6px] rounded-full cursor-pointer hover:border-yellow-400"
        />
        <Image
          src={python}
          alt="logo"
          className="w-[240px] mt-2 border-[6px] rounded-full cursor-pointer hover:border-green-500"
        />
      </div>
      {/* <Button text="Start Quiz" onClick={handleButtonClick} /> */}
    </main>
  );
}
