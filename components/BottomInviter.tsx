import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function BottomInviter() {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center gap-10 pt-[10rem] ">
      <h1 className="w-2/3 leading-[7rem] text-[8rem] font-bold text-center max-md:text-[4rem] max-md:leading-[4rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]">
        Accelerate your workflow.
      </h1>
      <p className="text-[2rem] text-dark-text max-md:text-[1.5rem] max-sm:text-[1rem] max-sm:w-2/3">
        Try it for yourself! Start coding for free and upgrade anytime.
      </p>
      <div className="hover:underline cursor-pointer flex justify-center items-center gap-3 text-[2rem] max-sm:text-[1rem]">
        <a className="text-lime">Start Coding</a>
        <ChevronRightIcon className="text-lime text-[2rem]" />
      </div>
      <div className="hover:underline cursor-pointer flex justify-center items-center gap-3 text-[2rem] max-sm:text-[1rem]">
        <a className="text-lime">Schedule a demo</a>
        <ChevronRightIcon className="text-lime text-[2rem]" />
      </div>
      <img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.4a712740.png&w=3840&q=75" />
    </div>
  );
}
