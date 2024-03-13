import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function splitString(string: string) {
  // Split the string into an array of words
  const words = string.split(" ");

  // Map each word to an object with the "text" key
  return words.map((word) => ({ text: word }));
}

export { cn, splitString };
