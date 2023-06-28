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
        Do you have what it takes to become the react quiz master?
      </p>
      <div className="flex gap-2">
        <Image src={react} alt="logo" className="w-[160px] mt-2 border-4 rounded-full cursor-pointer" />
        <Image src={javascript} alt="logo" className="w-[160px] mt-2 border-4 rounded-full" />
        <Image src={python} alt="logo" className="w-[160px] mt-2 border-4 rounded-full" />
      </div>
      <Button text="Start Quiz" onClick={handleButtonClick} />
    </main>
  );
}
