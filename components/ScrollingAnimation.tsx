import { useGSAP } from "@gsap/react";
import { MutableRefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ScrollingAnimation() {
  // References for the Animation
  const boxRef: any = useRef();
  const boxBGCircleRef: any = useRef();
  const shadow: any = useRef();
  const internalBoxContent1: any = useRef();
  const internalBoxContent2: any = useRef();
  const internalBoxContent3: any = useRef();
  const internalBoxContent4: any = useRef();
  const codeTextRef: any = useRef();
  const codingIDEImage: any = useRef();
  const imageAndCodeTextRef: any = useRef();
  const anytimeRef: any = useRef();
  const anywhereRef: any = useRef();
  const anytimeAnywhereRef: any = useRef();
  const anytimeUnderline: any = useRef();
  const vscodeExtensionsAndGit: any = useRef();
  const shortenText1: any = useRef();
  const shortenText2: any = useRef();
  const shortenText3: any = useRef();
  const shortenText4: any = useRef();

  // constants
  let ANIMATION_START_POINT = 700;
  let ANIMATION_END_POINT = 600; // in percentages

  // adjusting animation starting and ending point
  // for responsive design
  useEffect(() => {
    if (window.innerWidth < 768) {
      ANIMATION_START_POINT = 1000;
    }
    if (window.innerWidth < 450) {
      ANIMATION_START_POINT = 1300;
    }
  }, [window.innerWidth]);

  // shadowing animation
  useGSAP(() => {
    const el = boxRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: `${ANIMATION_START_POINT}px center`,
        end: "200% center",
      },
    });
    timeline.from(shadow.current, { y: 0 });
    timeline.to(shadow.current, { y: "5rem" });
    timeline.to(shadow.current, { y: 0 });
    timeline.to(shadow.current, { y: "5rem" });
  }, {});

  // shadowing content animation
  useGSAP(() => {
    const el = boxRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: `${ANIMATION_START_POINT}px center`,
        end: "200% center",
      },
    });
    timeline.from(internalBoxContent1.current, { opacity: 1 });
    timeline.to(internalBoxContent1.current, { opacity: 0, display: "none" });
    timeline.to(internalBoxContent2.current, { opacity: 0 });
    timeline.to(internalBoxContent2.current, { opacity: 1 });
    timeline.to(internalBoxContent2.current, { opacity: 0, display: "none" });
    timeline.to(internalBoxContent3.current, { opacity: 0 });
    timeline.to(internalBoxContent3.current, { opacity: 1 });
    timeline.to(internalBoxContent3.current, { opacity: 0, display: "none" });
    timeline.to(internalBoxContent4.current, { opacity: 0 });
    timeline.to(internalBoxContent4.current, { opacity: 1 });
    timeline.to(internalBoxContent4.current, { opacity: 0, display: "none" });
  }, {});

  // box resize animation
  useGSAP(() => {
    const el = boxRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: `${ANIMATION_START_POINT} center`,
        end: `${ANIMATION_END_POINT - 50}% center`,
      },
    });
    timeline.from(el, { scale: 3, duration: 1 });
    timeline.to(el, { scale: 1 });
    timeline.from(codeTextRef.current, { opacity: 0 });
    timeline.to(codeTextRef.current, { opacity: 1 });
    timeline.to(codeTextRef.current, { opacity: 0 });

    // adding breakpoints for responsive animation
    if (window.innerWidth < 768) {
      timeline.to(el, { background: "black", border: "none" });
      timeline.to(codingIDEImage.current, { opacity: 0, scale: 2 });
      timeline.to(codingIDEImage.current, { opacity: 1, scale: 1.5 });
      timeline.to(codingIDEImage.current, { opacity: 0, scale: 1 });
    } else {
      timeline.to(codingIDEImage.current, { opacity: 0, scale: 4 });
      timeline.to(el, { background: "black", border: "none" });
      timeline.to(codingIDEImage.current, { opacity: 1, scale: 3.5 });
      timeline.to(codingIDEImage.current, { opacity: 0, scale: 3 });
    }

    timeline.to(imageAndCodeTextRef.current, { opacity: 0, y: -25 });
    timeline.to(imageAndCodeTextRef.current, { opacity: 1, y: 0 });
    timeline.to(imageAndCodeTextRef.current, { opacity: 0, y: 25 });
    timeline.to(anytimeRef.current, { opacity: 0 }, "<").add("anytime_sync");
    timeline.to(anytimeRef.current, { opacity: 1 });
    timeline.to(anywhereRef.current, { opacity: 0 });
    timeline.to(anywhereRef.current, { opacity: 1 });
    timeline.to(
      anytimeAnywhereRef.current,
      { x: "-50%", duration: 3 },
      "anytime_sync"
    );
    timeline.to(
      anytimeUnderline.current,
      { strokeDashoffset: 0, duration: 3 },
      "anytime_sync"
    );
    timeline.to(anytimeRef.current, { opacity: 0 });
    timeline.to(anywhereRef.current, { opacity: 0 });
    timeline.to(anytimeUnderline.current, { opacity: 0 });

    // preventing the render again of anytime text and its components
    timeline.to(anytimeRef.current, { display: "none" });
    timeline.to(anywhereRef.current, { display: "none" });
    timeline.to(anytimeUnderline.current, { display: "none" });

    // rendering the animations of VS Code extension and Git workflow slide
    timeline.to(vscodeExtensionsAndGit.current, { opacity: 1 });
    timeline.to(vscodeExtensionsAndGit.current, { y: "-70%", duration: 2 });
    timeline.to(vscodeExtensionsAndGit.current, { opacity: 0 });

    // animating in and out the `Shorten the review cycle` text
    timeline.to(shortenText1.current, { opacity: 1 }, ">").add("shorten-start");
    timeline.to(shortenText2.current, { opacity: 1 }, "shorten-start");
    timeline.to(
      shortenText3.current,
      { opacity: 1, delay: 0.1 },
      "shorten-start"
    );
    timeline.to(
      shortenText4.current,
      { opacity: 1, delay: 0.2 },
      "shorten-start"
    );

    timeline.to(shortenText1.current, { opacity: 0 }, ">").add("shorten-end");
    timeline.to(shortenText2.current, { opacity: 0 }, "shorten-end");
    timeline.to(
      shortenText3.current,
      { opacity: 0, delay: 0.1 },
      "shorten-end"
    );
    timeline.to(
      shortenText4.current,
      { opacity: 0, delay: 0.2 },
      "shorten-end"
    );
    timeline.to(el, { opacity: 0, display: "none" });
  }, {});

  // circle resize animation
  useGSAP(() => {
    const el = boxRef.current;
    const circle = boxBGCircleRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start: `${ANIMATION_START_POINT}px center`,
        end: `${ANIMATION_END_POINT}% center`,
      },
    });
    timeline.from(circle, { scale: 20 });
    timeline.to(circle, { scale: 1 });
    timeline.to(circle, { scale: 20 });
    timeline.to(circle, { scale: 15 });
    timeline.to(circle, { scale: 20 });
    timeline.to(circle, { opacity: 0 });
    timeline.to(circle, { display: "none" });
  }, {});

  return (
    <div className="w-full h-[300rem] flex justify-center items-start bg-black overflow-hidden">
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
          className="w-[20rem] h-[20rem] bg-dark-gray-lighter border-[1px] border-purple-500 flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          {/* LITTLE SIGNS THAT APPEAR */}
          <p
            ref={internalBoxContent1}
            className="text-lime font-dosis absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem]"
          >
            {"<>"}
          </p>
          <p
            ref={internalBoxContent2}
            className="text-lime font-dosis opacity-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem]"
          >
            {"{}"}
          </p>
          <p
            ref={internalBoxContent3}
            className="text-lime font-dosis opacity-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem]"
          >
            {"|o|"}
          </p>
          <p
            ref={internalBoxContent4}
            className="text-lime font-dosis opacity-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem]"
          >
            {">_"}
          </p>

          {/* CODE TEXT APPEAR */}
          <h1
            ref={codeTextRef}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-extrabold w-max text-[7rem] max-md:text-[4rem] max-sm:text-[2rem]"
          >
            Code in the Cloud
          </h1>
          <img
            ref={codingIDEImage}
            src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.2b1cff1a.gif&w=1920&q=75"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0"
          />

          {/* Contains the square image with some text as well */}
          <div
            ref={imageAndCodeTextRef}
            className="flex justify-center items-center flex-col opacity-0 gap-5"
          >
            <img
              className="w-[20rem]"
              src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.d59797e6.png&w=2048&q=100"
            />
            <p className="text-[2rem] w-[50rem] text-center font-bold max-md:text-[1rem] max-md:w-full">
              Run your code in powerful microVMs and build anything without
              limits. We configure your environment for you and keep your code
              always ready, behind a URL.
            </p>
          </div>

          {/* Anytime Anywhere text */}
          <div
            className="flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            ref={anytimeAnywhereRef}
          >
            <h1
              ref={anytimeRef}
              className="opacity-0 font-bold text-[7rem] max-md:text-[4rem] max-sm:text-[2rem]"
            >
              Anytime,{" "}
            </h1>
            <h1
              ref={anywhereRef}
              className="opacity-0 font-bold text-[7rem] max-md:text-[4rem] max-sm:text-[2rem]"
            >
              Anywhere
            </h1>
            <svg className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] w-full max-md:translate-y-[20%]">
              <line
                ref={anytimeUnderline}
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                style={{
                  stroke: "purple",
                  strokeWidth: 2,
                  strokeDasharray: 1052,
                  strokeDashoffset: 1052,
                }}
              />
            </svg>
          </div>

          {/* Pictures with many devices and some text (VS Code and GIT stuff) */}
          <div
            className="w-[98vw] h-[250vh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-20%] flex justify-center items-start gap-[15rem] opacity-0 flex-col"
            ref={vscodeExtensionsAndGit}
          >
            <div className="flex justify-center items-center gap-5 max-md:flex-col">
              <div className="w-1/2">
                <img src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feditors.3475b465.png&w=3840&q=100" />
              </div>
              <div className="flex flex-col justify-center items-start w-1/3 text-[2.5rem] gap-10 max-md:w-2/3 max-md:text-[1rem]">
                <h3>
                  Code and collaborate from any editor or device: browser, VS
                  Code or iOS.
                </h3>
                <h3>
                  Share a link to your code to get feedback, either async or
                  with a live coding session.
                </h3>
                <div className="flex justify-center items-start flex-col text-[2rem] max-md:text-[1rem]">
                  <a className="text-lime hover:underline cursor-pointer">
                    Install VS Code Extension
                  </a>
                  <a className="text-lime hover:underline cursor-pointer">
                    Download iOS App
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-vscode-and-git w-full justify-items-center max-md:grid-cols-1">
              <h1 className="text-[8rem] col-span-3 w-3/4 text-center font-bold leading-[6rem] max-md:text-[2.5rem] max-md:leading-[2.5rem] max-md:col-span-1">
                Accelerate your git workflow.
              </h1>
              <div className="flex flex-col justify-center items-start w-3/4 text-[2.5rem] gap-5 h-[50rem] max-md:h-auto max-md:text-[1rem] max-md:pt-10">
                <h3>
                  Never wait for a dev server again. We make all your branches
                  instantly available by hot resuming VMs.
                </h3>
                <h3>
                  Hop between branches and open PRs with our built-in git
                  controls.
                </h3>
              </div>
              <div className="w-4/5 relative max-md:h-[20rem]">
                <img
                  className="w-5/6 h-3/4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.a521d04d.jpg&w=1200&q=75"
                />
                <div className="w-5/6 h-3/4 shadow-image-half-blur absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              </div>
            </div>
          </div>

          {/* Shorten the review cycle text */}
          <div className="w-[50vw] flex flex-wrap justify-center items-center font-bold text-[8rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-7 max-md:text-[4rem] max-md:gap-4 max-sm:text-[2rem] max-sm:gap-2">
            <h1 className="h-16 opacity-0 max-md:h-8" ref={shortenText1}>
              Shorten
            </h1>
            <h1 className="h-16 opacity-0 max-md:h-8" ref={shortenText2}>
              the
            </h1>
            <h1 className="opacity-0" ref={shortenText3}>
              review
            </h1>
            <h1 className="opacity-0" ref={shortenText4}>
              cycle.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
