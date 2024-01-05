import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = styled.h2``;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedText({
  title,
  color,
  fontSize,
  fontWeight,
  lineHeight,
}: {
  title: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}) {
  const text: string = title;
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.25,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className="w-[80%]">
      <Title
        aria-label={text}
        role="heading"
        className={`${color} ${fontSize} ${fontWeight} ${lineHeight}`}
      >
        {text.split(" ").map((word, index) => {
          return (
            <Word
              ref={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
            >
              {word.split("").map((character, index) => {
                return (
                  <Character
                    aria-hidden="true"
                    key={index}
                    variants={characterAnimation}
                  >
                    {character}
                  </Character>
                );
              })}
            </Word>
          );
        })}
      </Title>
    </div>
  );
}
