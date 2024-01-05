"use client";

import BrandsStrip from "@/components/BrandsStrip";
import Greetings from "@/components/Greetings";
import Navbar from "@/components/Navbar";
import ScrollingAnimation from "@/components/ScrollingAnimation";
import ScrollingAnimationGSAP from "@/components/ScrollingAnimationGSAP";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-background w-full overflow-x-hidden min-h-screen">
      <Navbar />
      <Greetings />
      <BrandsStrip />
      <Stats />
      {/* <ScrollingAnimation /> */}
      <ScrollingAnimationGSAP />
    </main>
  );
}
