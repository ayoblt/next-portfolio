import CTA from "@/components/cta";
import Header from "./header";
import WhyChooseMe from "./why-choose-me";
import MyFunFacts from "./my-fun-facts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lateef Taiwo",
  description:
    "Building responsive and performant websites - Lateef's expertise in Front-End Development.",
};

export default function About() {
  return (
    <>
      <Header />
      <WhyChooseMe />
      <CTA />
      <MyFunFacts />
    </>
  );
}
