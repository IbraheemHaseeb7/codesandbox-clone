import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ScrollingAnimationGSAP() {
  const boxRef: any = useRef();
  const boxBGCircleRef: any = useRef();
  const shadow: any = useRef();

  // shadowing animation
  useGSAP(() => {
    const el = boxRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        markers: true,
        start: "500px center",
        end: "200% center",
      },
    });
    timeline.from(shadow.current, { y: 0 });
    timeline.to(shadow.current, { y: 45 });
    timeline.to(shadow.current, { y: 0 });
    timeline.to(shadow.current, { y: 45 });
  }, {});

  // box resize animation
  useGSAP(() => {
    const el = boxRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "500px center",
        end: "300% center",
      },
    });
    timeline.from(el, { scale: 7, duration: 1 });
    timeline.to(el, { scale: 1 });
  }, {});

  // circle resize animation
  useGSAP(() => {
    const el = boxRef.current;
    const circle = boxBGCircleRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "500px center",
        end: "300% center",
      },
    });
    timeline.from(circle, { scale: 20, duration: 1 });
    timeline.to(circle, { scale: 1 });
  }, {});

  return (
    <div className="w-full h-[100rem] flex justify-center items-start bg-black overflow-hidden">
      <div className="flex justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
        {/* BOX THAT CONTAINS CIRCULAR IMAGE */}
        <div ref={boxBGCircleRef} className="flex justify-center items-center">
          <img
            className="w-[10rem] object-contain"
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0.4eae2e10.png&w=1080&q=75"
            alt="anything"
          />
        </div>

        {/* BOX THAT CONTAINS SIGNS APPEARING */}
        <div
          ref={boxRef}
          className="w-[10rem] h-[10rem] bg-dark-gray border-[1px] border-purple-500 flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div
            ref={shadow}
            className="absolute top-2 left-[50%] translate-x-[-50%] w-[1rem] h-[1rem] bg-dark-gray shadow-hiding z-10"
          ></div>
          <p className="text-lime font-dosis">{"<>"}</p>
          {/* <p>{"{}"}</p>
          <p>{"|o|"}</p>
          <p>{">_"}</p> */}
        </div>
      </div>
    </div>
  );
}
