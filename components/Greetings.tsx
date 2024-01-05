import AnimatedText from "./AnimatedText";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Greetings() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-[30rem] w-[75%] flex justify-evenly items-center flex-col border-r-[1px] border-dark-gray">
        <AnimatedText
          title="Instant dev environment"
          color="text-lime"
          fontSize="text-[8rem]"
          fontWeight="font-bold"
          lineHeight="leading-[1]"
        />
        <AnimatedText
          title="CodeSandbox keeps you in flow by giving you cloud development
          environments that resume in 1 second."
          color="text-white"
          fontSize="text-[2rem]"
          fontWeight=""
          lineHeight="leading-[1.5]"
        />
      </div>
      <div className="h-[30rem] w-[25%] flex justify-center items-center flex-col">
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
      className={`w-full h-1/2 flex flex-col justify-center items-center hover:bg-dark-gray transition-all ease duration-200 cursor-pointer ${
        activeBorder && "border-b-[1px] border-dark-gray"
      }`}
    >
      <div className="w-[80%] flex flex-col justify-center items-start">
        <h3 className="text-white text-[1.75rem]">{heading}</h3>
        <h3 className="text-light-text text-[1.75rem]">{description}</h3>
        <div className="cursor-pointer text-lime w-full flex justify-start items-center gap-2">
          <a className="text-[1.25rem]">{iconPrefix}</a>
          <Icon />
        </div>
      </div>
    </div>
  );
}
