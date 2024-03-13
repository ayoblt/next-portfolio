import { Highlight } from "./highlight";

const SectionHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Highlight className={className}>
      <h3>
        <span>#</span>
        {children}
      </h3>
    </Highlight>
  );
};

export default SectionHeader;
