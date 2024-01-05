import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <nav className="flex w-full h-[3.5rem] justify-between items-center bg-background text-light-text text-small px-[8rem] border-b-[1px] border-dark-gray">
      <div className="flex justify-center items-center gap-5">
        {/* LOGO BOX */}
        <div
          className={`w-[1.5rem] h-[1.5rem] border-white border-[3px]`}
        ></div>

        {/* nav options */}
        <div className="flex justify-center items-center gap-5">
          {navOptions.map((data) => {
            return (
              <a
                key={data}
                className="cursor-pointer hover:text-light-hover-text transition-all ease duration-200"
              >
                {data}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <a className="cursor-pointer hover:text-light-hover-text transition-all ease duration-200">
          Sign In
        </a>
        <button className="bg-try-color py-[5px] px-[12px] text-[14px] text-dark-text rounded hover:bg-try-hover-color transition-all ease duration-200">
          Try for free
        </button>
      </div>
    </nav>
  );
}

const navOptions = [
  "Features",
  "Use Cases",
  "iOS",
  "Discover",
  "Docs",
  "Support",
  "Blog",
  "Enterprise",
  "Pricing",
];
