const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-3 text-center">
      <p className="text-xs text-colorTextPrimary">
        &copy; Copyright {currentYear} by Lateef.
      </p>
    </div>
  );
};

export default Copyright;
