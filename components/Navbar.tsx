import "@/styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="w-full h-[3.5rem] grid grid-cols-nav justify-items-center items-center bg-background text-light-text text-small px-[8rem] border-b-[1px] border-dark-gray max-lg:h-[7rem] max-lg:px-[4rem] max-lg:grid-cols-nav-lg max-sm:px-0">
      {/* LOGO BOX */}
      <div className="w-[1.5rem] h-[1.5rem] border-white border-[3px]  max-md:justify-self-start max-sm:ml-3"></div>

      {/* nav options */}
      <div className="w-full justify-self-start flex justify-center items-center gap-5 max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-2 max-lg:row-end-3 max-lg:justify-self-center max-sm:overflow-x-scroll max-sm:justify-start max-sm:items-start max-sm:translate-y-2 max-sm:px-2 custom-scroll">
        {navOptions.map((data) => {
          return (
            <a
              key={data}
              className="cursor-pointer hover:text-light-hover-text transition-all ease duration-200 text-nowrap"
            >
              {data}
            </a>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-5 max-md:justify-self-end max-sm:mr-3">
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
