import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ScrollingAnimationGSAP() {
  const divRef: any = useRef();
  useGSAP(() => {
    const el = divRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top bottom",
        end: "300% bottom",
      },
    });
    timeline.from(el, { scale: 1 });
    timeline.to(el, { scale: 5 });
  }, {});

  return (
    <div className="w-full h-[50rem] flex justify-center items-center">
      <div ref={divRef} className="w-[5rem] h-[5rem] bg-light-gray"></div>
    </div>
  );
}
