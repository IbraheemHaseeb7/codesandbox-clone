"use client";

import AnimatedText from "@/components/AnimatedText";
import BottomImagesContainer from "@/components/BottomImagesContainer";
import BottomInviter from "@/components/BottomInviter";
import BrandsStrip from "@/components/BrandsStrip";
import Footer from "@/components/Footer";
import Greetings from "@/components/Greetings";
import Navbar from "@/components/Navbar";
import ScrollingAnimation from "@/components/ScrollingAnimation";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-background w-full overflow-x-hidden min-h-screen">
      <div className="bg-background relative z-10 w-full overlfow-x-hidden">
        <Navbar />
        <Greetings />
        <BrandsStrip />
        <Stats />
      </div>
      <ScrollingAnimation />
      <div className="bg-black w-full h-[50rem] flex justify-center items-center flex-col gap-10">
        <AnimatedText
          title="From idea to production in record time."
          styles="w-2/3 text-[6rem] font-bold leading-[1] max-md:text-[3rem] max-sm:text-[1.5rem] text-center"
          containerStyles="flex justify-center items-center"
        />
        <a className="cursor-pointer hover:underline text-lime text-[1.5rem] max-sm:text-[0.75rem]">
          {"<> Try for free"}
        </a>
      </div>
      <BottomImagesContainer />
      <BottomInviter />
      <Footer />
    </main>
  );
}
