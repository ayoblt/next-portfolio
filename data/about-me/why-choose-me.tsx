import CalendarScheduleFillIcon from "@/components/icons/calendar-schedule-fill";
import GroupPeopleFillIcon from "@/components/icons/group-people-fill";
import HandCoinFillIcon from "@/components/icons/hand-coin-fill";
import MedalFillIcon from "@/components/icons/medal-fill";
import PuzzleFillIcon from "@/components/icons/puzzle-fill";
import SparklingFillIcon from "@/components/icons/sparkling-fill";

export const WhyChooseMeData = {
  title: "why-choose-me",
  description:
    "When you choose me for your web development needs, you gain access to a range of benefits that make your project a success. Here's why working with me is the right choice",
  items: [
    {
      title: "Tailored Solutions",
      description:
        "I understand that every project is unique and I customize my services to meet your specific requirements",
      icon: <PuzzleFillIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Dedicated Support",
      description:
        "Your projects success is my priority, and I provide unwavering support and clear communication throughout the process",
      icon: <GroupPeopleFillIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Qaulity Excellence",
      description:
        "My work is marked by the highest quality standards, ensuring you receive the best results",
      icon: <SparklingFillIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Punctual Delivery",
      description:
        "I respect deadlines and consistently deliver your projects on time, keeping them on track",
      icon: <CalendarScheduleFillIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Affordable Pricing",
      description:
        "My services are competitively priced and deliver exceptional value for your investment",
      icon: <HandCoinFillIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Proven Expertise",
      description:
        "My diverse background and years of experience equip me with a broad set of transferable skills, allowing me to tackle a wide range of projects effectively",
      icon: <MedalFillIcon className="fill-white w-5 h-6" />,
    },
  ],
};
