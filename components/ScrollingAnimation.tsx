import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scroll } from "framer-motion";

export default function ScrollingAnimation() {
  const divRef: any = useRef(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed (0.5 means 50% of the div should be in view)
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  scroll(
    (progress) => {
      divRef.current!.style = `transform: translateY(${2 * progress}px)`;
    },
    { source: divRef.current, axis: "y" }
  );

  return (
    <div className="w-full h-[30rem] flex justify-center items-center">
      <motion.div className="h-[5rem] w-[5rem] bg-dark-gray" ref={divRef}>
        Scroll down to see the effect (starts when in viewport)
      </motion.div>
    </div>
  );
}
