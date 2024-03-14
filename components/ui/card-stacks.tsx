"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

let interval: NodeJS.Timeout | undefined;

type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  containerClassName,
  cardClassName,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  containerClassName?: string;
  cardClassName?: string;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <div
      className={cn(
        "relative h-fit w-full md:h-60 md:w-96",
        containerClassName
      )}
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={cn(
              "absolute bg-background h-36 w-full md:w-96 p-4 shadow-lg border flex flex-col justify-between",
              cardClassName
            )}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index < 4 ? index * -CARD_OFFSET : -30,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="text-end">
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              {card.designation && (
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
