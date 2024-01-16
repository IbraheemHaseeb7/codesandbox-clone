import { title } from "process";

export default function Footer() {
  const data: { title: string; links: string[] }[] = [
    {
      title: "Use Cases",
      links: [
        "Cloud Dev Environments",
        "Cloud Reviews",
        "Code in Sandboxes",
        "Learn & Experiment",
        "Coding Exercise",
        "Instant Feedback",
      ],
    },
    {
      title: "Ecosystem",
      links: [
        "Features",
        "CodeSandbox for iOS",
        "VS Code Extension",
        "Sandpack",
      ],
    },
  ];

  return (
    <footer className="w-full h-[40rem] flex justify-center items-center flex-col">
      <div className="flex justify-center items-center">
        <div className="w-[2rem] h-[2rem] border-gray-800 border-[3px]  max-md:justify-self-start max-sm:ml-3"></div>
      </div>
    </footer>
  );
}
