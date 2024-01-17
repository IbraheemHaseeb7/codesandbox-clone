import ImageWithTextAndLink from "./ImageWithTextAndLink";

export default function BottomImagesContainer() {
  const data: {
    image: string;
    title: string;
    description: string;
    links: string[];
  }[] = [
    {
      image:
        "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull-stack-development.9da9918b.jpg&w=1920&q=75",
      title: "Cloud Development Environments",
      description: "Anything that runs on local runs on CodeSandbox",
      links: ["Learn More", "Try Now"],
    },
    {
      image:
        "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsandboxes.612e2c7b.jpg&w=750&q=75",
      title: "Prototype Your Ideas",
      description: "Start faster using one of our 100+ templates.",
      links: ["Learn More"],
    },
    {
      image:
        "https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn.c803667f.jpg&w=750&q=75",
      title: "Learn & Experiment",
      description: "Try frameworks and experiment with new tools.",
      links: ["Learn More"],
    },
  ];

  return (
    <div className="w-full bg-black grid grid-cols-vscode-and-git justify-items-center px-10 max-md:grid-cols-1 max-md:grid-rows-[repeat(3,50%)]">
      {data.map(({ image, title, description, links }, index) => {
        return (
          <ImageWithTextAndLink
            index={index}
            key={index}
            image={image}
            title={title}
            description={description}
            links={links}
          />
        );
      })}
    </div>
  );
}
