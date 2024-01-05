import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="w-full h-[20rem] flex justify-center items-center">
      {data.map(({ num, postfix, description }) => {
        return (
          <Box
            key={description}
            num={num}
            postfix={postfix}
            description={description}
          />
        );
      })}
    </div>
  );
}

function Box({
  num,
  postfix,
  description,
}: {
  num: number;
  postfix: string;
  description: string;
}) {
  return (
    <div className="w-[25%] flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-col justify-start items-start border-t-[5px] border-dark-gray">
        <h1 className="text-[4rem] text-white font-bold">
          <CountUp end={num} /> {postfix}
        </h1>
        <p className="text-[1.5rem]">{description}</p>
      </div>
    </div>
  );
}

const data: { num: number; postfix: string; description: string }[] = [
  { num: 4, postfix: "million+", description: "users" },
  { num: 10000, postfix: "+", description: "repositories connected" },
  { num: 20000, postfix: "+", description: "organizations" },
  { num: 1, postfix: "billion+", description: "lines of code written" },
];
