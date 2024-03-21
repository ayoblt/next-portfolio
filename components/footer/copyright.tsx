const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-3 text-center slideUp">
      <p className="text-small text-colorTextPrimary">
        &copy; Copyright {currentYear} by Lateef.
      </p>
    </div>
  );
};

export default Copyright;
