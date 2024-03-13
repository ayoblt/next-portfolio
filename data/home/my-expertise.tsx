import BriefCaseIcon from "@/components/icons/briefcase";
import CodeSlashIcon from "@/components/icons/code-slash";
import GitPullIcon from "@/components/icons/git-pull";
import LayoutFillIcon from "@/components/icons/layout-fill";
import SeoFillIcon from "@/components/icons/seo-fill";

export const MyExpertiseData = {
  title: "my-expertise",
  description: `I bring a well-rounded skill set to the table, making me a versatile
  web developer. Here's a glimpse of my capabilities`,
  items: [
    {
      title: "Programming languages",
      description:
        "I'm proficient in key web languages - HTML, CSS, and JavaScript, enabling to build web solutions from the ground up",
      icon: <CodeSlashIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Advanced frameworks",
      description:
        "I specialize in advanced frameworks such as the React Library, Next, and Remix, which empower me to create interactive web applications",
      icon: <BriefCaseIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Responsive design",
      description:
        "I design websites that adapt seamlessly to various devices, ensuring a consistent user experience",
      icon: <LayoutFillIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "Version Control",
      description:
        "Using Git, I maintain code integrity, making it easier for collaboration and project management",
      icon: <GitPullIcon className="fill-white w-5 h-6" />,
    },
    {
      title: "SEO Optimization",
      description:
        "I implement best SEO practices to boost your website's visibilty in search engine results",
      icon: <SeoFillIcon className="fill-white w-5 h-6" />,
    },
  ],
};
