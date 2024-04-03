"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const TicTacToe = () => {
  const [player, setPlayer] = useState<string>("");
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const [playerTurn, setPlayerTurn] = useState(false);
  const [squares, setSquares] = useState(() => {
    const savedState = localStorage.getItem("ticTacToeState");
    if (savedState) {
      const {
        squares: savedSquares,
        player: savedPlayer,
        playerTurn: savedPlayerTurn,
      } = JSON.parse(savedState);
      setGameStarted(true);
      setPlayerTurn(savedPlayerTurn);
      setPlayer(savedPlayer);
      return savedSquares;
    }
    return Array(9).fill(null);
  });

  useEffect(() => {
    // Save game state to localStorage whenever it changes
    localStorage.setItem(
      "ticTacToeState",
      JSON.stringify({ squares, player, playerTurn, winner })
    );
  }, [squares, player, playerTurn, winner]);

  useEffect(() => {
    if (calculateWinner(squares)) {
      setWinner(calculateWinner(squares));
      setGameStarted(false);
    }
    if (squares.every((element: string | null) => element !== null)) {
      setWinner("draw");
      setGameStarted(false);
    }
  }, [squares, player]);

  useEffect(() => {
    if (!player || !gameStarted) return;

    const computer = player === "X" ? "O" : "X";
    async function playComputer() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (
        calculateWinner(squares) ||
        playerTurn ||
        squares.every((element: string | null) => element !== null)
      )
        return;

      const newSquares = [...squares];
      const nextIdx = getManualNextMove(newSquares, player);

      if (nextIdx) {
        newSquares[nextIdx] = computer;
      } else {
        const availableSquares = newSquares.reduce((acc, val, index) => {
          if (val === null) {
            acc.push(index);
          }
          return acc;
        }, []);
        const randomIndex = Math.floor(Math.random() * availableSquares.length);
        const randomPosition = availableSquares[randomIndex];
        newSquares[randomPosition] = computer;
      }

      setSquares(newSquares);
      setPlayerTurn(true);
    }

    playComputer();
  }, [squares, playerTurn, gameStarted, player]);

  const handleWinner = () => {
    setWinner(null);
    setSquares(Array(9).fill(null));
    setPlayer("");
    setGameStarted(true);
  };

  const handleGameStart = () => {
    setPlayer("");
    setSquares(Array(9).fill(null));
    setGameStarted(true);
  };

  const handlePlayer = (value: string) => {
    if (value === "X") {
      setPlayer("X");
      setPlayerTurn(true);
    } else {
      setPlayer("O");
      setPlayerTurn(false);
    }
  };

  const handleClick = (value: number) => {
    if (calculateWinner(squares) || squares[value] || !playerTurn) return;

    const newSquares = [...squares];

    newSquares[value] = player;
    setPlayerTurn(false);
    setSquares(newSquares);
  };

  return (
    <div className="w-full sm:w-72 lg:h-96 bg-transparent border flex flex-col px-6 slideUp relative">
      <div
        className={cn(
          "absolute bg-black opacity-70 inset-0 z-10",
          player && gameStarted && "invisible"
        )}
      />
      <div className="absolute grid place-content-center inset-x-0 justify-center top-1/2 -translate-y-1/2 z-20 space-y-4">
        {winner ? (
          <>
            <p className="font-semibold text-white text-lg">
              {winner === player
                ? "You won 👏"
                : winner === "draw"
                ? "Draw"
                : "Beat ya🤣😜! I won!!"}
            </p>
            <p>You wanna go again?😜</p>
            <Button variant="secondary" className="" onClick={handleWinner}>
              go again
            </Button>
          </>
        ) : (
          <>
            {!gameStarted ? (
              <>
                <p className="font-semibold text-white text-lg">
                  Welcome to TicTacToe!
                </p>
                <Button
                  variant="secondary"
                  className=""
                  onClick={handleGameStart}
                >
                  start game
                </Button>
              </>
            ) : (
              <>
                {!player && (
                  <>
                    <p className="font-semibold text-white text-lg">
                      Choose your symbol
                    </p>
                    <div className="space-x-4">
                      <Button
                        variant="secondary"
                        className=""
                        onClick={() => handlePlayer("X")}
                      >
                        X
                      </Button>
                      <Button
                        variant="secondary"
                        className=""
                        onClick={() => handlePlayer("O")}
                      >
                        O
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>

      <p
        className={cn(
          "font-medium text-headerFg text-[1.1rem] py-3 invisible",
          player && "visible"
        )}
      >
        You are player {player}
      </p>

      <div className="bg-backgroundDarker w-full h-80 rounded-md overflow-hidden">
        <ul className="grid grid-cols-3 grid-rows-3 w-full h-full">
          {squares.map((value: string | null, idx: number) => (
            <Square
              index={idx}
              value={value}
              onSetSquare={handleClick}
              key={idx}
            />
          ))}
        </ul>
      </div>
      <p
        className={cn(
          "font-medium text-headerFg text-[1.1rem] py-3 invisible",
          playerTurn && "visible"
        )}
      >
        Your turn
      </p>
    </div>
  );
};

const Square = ({
  index,
  value,
  onSetSquare,
}: {
  index: number;
  value: string | null;
  onSetSquare: (value: number) => void;
}) => {
  return (
    <div
      className="w-full border border-white dark:border-border h-full bg-transparent cursor-pointer grid place-items-center text-2xl font-bold"
      onClick={() => onSetSquare(index)}
    >
      {value}
    </div>
  );
};

export default TicTacToe;

const handleComputer = (squares: string[] | null[], opponent: string) => {
  const newSquares = [...squares];
  let nextIdx = getManualNextMove(squares, opponent);

  if (nextIdx) {
    newSquares[nextIdx] = "O";
  } else {
    const availableSquares = newSquares.reduce((acc, val, index) => {
      if (val === null) {
        acc.push(index);
      }
      return acc;
    }, [] as number[]);
    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    newSquares[randomIndex] = "O";
  }
  return newSquares;
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getManualNextMove(squares: string[] | null[], player: string) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const line = [squares[a], squares[b], squares[c]];
    const computer = player === "X" ? "O" : "X";

    if (
      line.filter((val) => val === computer).length === 2 &&
      line.includes(null)
    ) {
      return lines[i].find((index) => squares[index] === null);
    }
    if (
      line.filter((val) => val === player).length === 2 &&
      line.includes(null)
    ) {
      return lines[i].find((index) => squares[index] === null);
    }
  }

  return null;
}

function calculateWinner(squares: string[] | null[]) {
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
