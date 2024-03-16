import Header from "./header";
// import Quotes from "./quotes";
import MyExpertise from "./my-expertise";
import Projects from "./projects";
import AboutMe from "./about-me";
import CTA from "@/components/cta";
import Contacts from "./contacts";

export default function Home() {
  return (
    <main className="pageSlideUp">
      <Header />
      {/* <Quotes /> */}
      <MyExpertise />
      <Projects />
      <AboutMe />
      <CTA />
      <Contacts />
    </main>
  );
}
