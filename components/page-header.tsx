const PageHeader = ({
  path,
  pathDescription,
}: {
  path: string;
  pathDescription: string;
}) => {
  return (
    <>
      <h2 className="text-headerFg font-semibold text-lg">{path}</h2>
      <span className="text-small font-medium">{pathDescription}</span>
    </>
  );
};

export default PageHeader;
