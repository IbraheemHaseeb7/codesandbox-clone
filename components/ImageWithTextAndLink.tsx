import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ImageWithTextAndLink({
  image,
  title,
  description,
  links,
  index,
}: {
  image: string;
  title: string;
  description: string;
  links: string[];
  index: number;
}) {
  return (
    <div
      className={`w-full h-[50rem] relative max-md:mb-10 ${
        index === 0 && "col-span-3 mb-10 max-md:mb-0 max-md:col-span-1"
      }`}
    >
      <div className="w-full h-full bg-[#1d1d1d67] flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-5 z-20">
        <h1 className="text-[3rem] font-semibold w-2/3 text-center leading-[3rem]">
          {title}
        </h1>
        <p>{description}</p>
        <div className="flex justify-center items-center gap-[3rem]">
          {links.map((data, index) => {
            return (
              <div
                key={data}
                className="flex justify-center items-center gap-3"
              >
                <a className="text-lime cursor-pointer hover:underline">
                  {data}
                </a>
                <ChevronRightIcon className="text-lime" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-10">
        <img className="w-full h-full object-cover" src={image} />
      </div>
    </div>
  );
}
