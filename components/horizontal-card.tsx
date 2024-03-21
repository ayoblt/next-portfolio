interface HorizontalCardProps {
  title: string;
  description: string;
  icon: React.ReactElement<IconProps>;
}

interface IconProps {
  className: string;
}

const HorizontalCard = ({ title, description, icon }: HorizontalCardProps) => {
  return (
    <div className="flex flex-col md:flex-row py-8 px-6 md:p-4 items-center gap-8 border relative">
      <div className="absolute bg-gradient-to-tr from-transparent via-primary dark:via-white to-transparent w-1/12 h-1/3 right-10 top-7 blur-2xl -z-20"></div>
      <div className="border rounded-full border-white/70 dark:border-white/50 flex items-center justify-center p-2 relative">
        <div className="absolute bg-primary blur w-full h-full rounded-full -z-10"></div>
        <span className="border rounded-full border-white/70 dark:border-white/50 h-9 w-9 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <div className="text-center md:text-start">
        <h5 className="text-lg font-medium md:font-semibold text-headerFg mb-2 md:mb-[0.4rem]">
          {title}
        </h5>
        <p className="text-small sm:text-sm text-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
