'use client'

import { ToggleContext } from "@/context/toggle-context";
import { useContext } from "react";

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("useToggle must be within a provider");

  return context;
};
