"use client";

import Greetings from "@/components/Greetings";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-background w-full min-h-screen">
      <Navbar />
      <Greetings />
    </main>
  );
}
