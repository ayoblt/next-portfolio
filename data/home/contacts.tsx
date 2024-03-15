import MailSend from "@/components/icons/mail-send";
import TwitterXIcon from "@/components/icons/twitter";
import WhatsappFillIcon from "@/components/icons/whatsapp-fill";

export const ContactsData = {
  title: "contacts",
  description: `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`,
  socialMessage: "Message me here",
  contactLinks: [
    {
      icon: <WhatsappFillIcon className="w-6 h-5" />,
      label: "+2348150741801",
      link: "#",
    },
    {
      icon: <MailSend className="w-6 h-5 fill-foreground" />,
      label: "ayomidepakoo@gmail.com",
      link: "#",
    },
    {
      icon: <TwitterXIcon className="w-6 h-5" />,
      label: "_lateeftaiwo",
      link: "https://twitter.com/_lateeftaiwo",
    },
  ],
};
