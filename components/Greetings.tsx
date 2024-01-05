import AnimatedText from "./AnimatedText";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Greetings() {
  return (
    <div className="w-full flex justify-center items-center max-lg:flex-col">
      <div className="h-[30rem] w-[75%] flex justify-evenly items-center flex-col border-r-[1px] border-dark-gray max-lg:w-full max-sm:h-[20rem]">
        <AnimatedText
          title="Instant dev environment"
          styles="text-lime text-[8rem] font-bold leading-[1] max-md:text-[5rem] max-sm:text-[3.5rem]"
        />
        <AnimatedText
          title="CodeSandbox keeps you in flow by giving you cloud development
          environments that resume in 1 second."
          styles="text-white text-[2rem] leading-[1.5] max-md:text-[1.5rem] max-sm:text-[1rem]"
        />
      </div>
      <div className="h-[30rem] w-[25%] flex justify-center items-center flex-col max-lg:w-full max-lg:flex-row max-lg:h-[15rem]">
        <RightBox
          heading="Devboxes"
          description="Build production ready projects with your team."
          iconPrefix="Import Repository"
          Icon={GitHubIcon}
          activeBorder={true}
        />
        <RightBox
          heading="Sandboxes"
          description="Prototype faster. Code Instantly."
          iconPrefix="Create Sandbox"
          Icon={ChevronRightIcon}
          activeBorder={false}
        />
      </div>
    </div>
  );
}

function RightBox({
  heading,
  description,
  Icon,
  iconPrefix,
  activeBorder,
}: {
  heading: string;
  description: string;
  Icon: any;
  iconPrefix: string;
  activeBorder: boolean;
}) {
  return (
    <div
      className={`w-full h-1/2 flex flex-col justify-center items-center hover:bg-dark-gray transition-all ease duration-200 cursor-pointer max-lg:w-1/2 max-lg:h-full ${
        activeBorder && "border-b-[1px] border-dark-gray"
      }`}
    >
      <div className="w-[80%] flex flex-col justify-center items-start">
        <h3 className="text-white text-[1.75rem] max-sm:text-[1.25rem]">
          {heading}
        </h3>
        <h3 className="text-light-text text-[1.75rem] max-sm:text-[1.25rem]">
          {description}
        </h3>
        <div className="cursor-pointer text-lime w-full flex justify-start items-center gap-2">
          <a className="text-[1.25rem] max-sm:text-[1rem]">{iconPrefix}</a>
          <Icon />
        </div>
      </div>
    </div>
  );
}
