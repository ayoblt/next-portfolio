import { cn } from "@/lib/utils";
import { Highlight } from "./highlight";

const SectionHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Highlight className={cn("sm:text-lg", className)}>
      <h3>
        <span>#</span>
        {children}
      </h3>
    </Highlight>
  );
};

export default SectionHeader;
