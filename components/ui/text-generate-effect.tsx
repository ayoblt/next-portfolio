"use client";
import { useEffect } from "react";
import { m, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1.2,
        delay: stagger(0.1),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <m.div ref={scope} className={className}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span
              key={word + idx}
              className="text-white dark:text-foreground opacity-0"
            >
              {word}{" "}
            </m.span>
          );
        })}
      </m.div>
    );
  };

  return renderWords();
};
