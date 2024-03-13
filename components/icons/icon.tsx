const LogoIcon = () => {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black"
    >
      <rect
        width="4"
        height="4"
        fill="#D9D9D9"
        className={`fill-darkGray dark:fill-foreground`}
      />
      <rect y="4" width="4" height="4" fill="#D9D9D9" />
      <rect y="8" width="4" height="4" fill="#D9D9D9" />
      <rect x="4" y="8" width="4" height="4" fill="#D9D9D9" />
      <rect y="8" width="4" height="4" fill="#D9D9D9" />
      <rect x="8" y="12" width="4" height="4" fill="#D9D9D9" />
      <rect x="8" y="16" width="4" height="4" fill="#D9D9D9" />
      <rect x="8" y="8" width="4" height="4" fill="#D9D9D9" />
    </svg>
  );
};

export default LogoIcon;
