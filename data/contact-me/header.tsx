import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linked-in";
import TwitterXIcon from "@/components/icons/twitter";
import WhatsappFillIcon from "@/components/icons/whatsapp-fill";

export const ContactMeHeaderData = {
  path: "/contact-me",
  pathDescription: "hire me",
  title: "Let's connect and create",
  description:
    "Your digital project deserves the best. Reach out to me for a seamless web experience. I'm here to make your vision a reality.",
  socials: [
    {
      label: "twitter",
      link: "https://twitter.com/_lateeftaiwo",
      icon: <TwitterXIcon className="fill-white w-4 md:w-5 h-5 md:h-6" />,
    },
    {
      label: "github",
      link: "https://github.com/ayoblt",
      icon: <GithubIcon className="fill-white w-4 md:w-5 h-5 md:h-6" />,
    },
    {
      label: "linkedIn",
      link: "https://www.linkedin.com/in/lateef-taiwo-94b102217/",
      icon: <LinkedInIcon className="fill-white w-4 md:w-5 h-5 md:h-6" />,
    },
    {
      label: "whatsapp",
      link: "https://wa.me/2348150741801",
      icon: <WhatsappFillIcon className="fill-white w-4 md:w-5 h-5 md:h-6" />,
    },
  ],
};
