const TicTacToe = () => {
  const boxCount = Array(9).fill(null);
  return (
    <div className="h-80 w-full sm:w-72 lg:h-96 bg-transparent border p-6 rounded-">
      <div className="bg-backgroundDarker w-full h-full rounded-md overflow-hidden">
        <ul className="grid grid-cols-3 grid-rows-3 w-full h-full">
          {boxCount.map((_, idx) => (
            <Box key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div className="w-full border border-white dark:border-border h-full bg-transparent cursor-pointer"></div>
  );
};

export default TicTacToe;
