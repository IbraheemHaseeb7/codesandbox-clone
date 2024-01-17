import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

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
        "Statue",
        "Enterprise",
        "Pricing",
      ],
    },
    {
      title: "Explore",
      links: ["Discover", "Changelog", "Documentation", "Blog"],
    },
    { title: "Company", links: ["About", "Support", "Careers", "Brand Kit"] },
  ];

  return (
    <footer className="w-full min-h-[40rem] flex justify-center items-center flex-col max-md:gap-10">
      <div className="flex justify-center items-center h-4/5 w-4/5 max-md:flex-col">
        <div className="flex justify-start items-start h-4/5 pr-[10rem] max-md:pr-0 max-md:self-start max-md:my-5 max-md:mt-20">
          <div className="w-[2rem] h-[2rem] border-white border-[3px]  max-md:justify-self-start"></div>
        </div>
        <div className="flex justify-center items-center h-4/5 w-full flex-wrap max-md:gap-10">
          {data.map(({ title, links }) => {
            return (
              <div
                key={title}
                className="flex justify-start items-start h-full w-full"
              >
                <div className="flex justify-start items-start flex-col gap-5">
                  <b className="text-light-text">{title}</b>

                  {links.map((link) => {
                    return (
                      <a
                        key={link}
                        className="cursor-pointer text-dark-text hover:text-light-text"
                      >
                        {link}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t-2 border-dark-gray w-4/5"></div>
      <div className="flex justify-between items-center w-4/5 text-dark-text h-1/5 max-md:mb-5">
        <div className="flex justify-start items-start flex-col max-md:gap-5">
          <p>Copyright © 2024 CodeSandbox B.V. All rights reserved.</p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <YouTubeIcon />
          <GitHubIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
}
