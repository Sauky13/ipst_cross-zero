import { useGameContext } from "@/shared/store";

export const useRestartGame = () => {
  const { setBoard, setCurrentPlayer, setWinner } = useGameContext();

  const restartGame = () => {
    const resetBoardState = () => {
      const initialBoardState = Array.from({ length: 9 }, (_, id) => ({
        id,
        player: null,
      }));
      setBoard(initialBoardState);
      console.log("Состояние доски сброшено");
    };

    const resetCurrentPlayer = () => {
      setCurrentPlayer("X");
      console.log("Текущий игрок сброшен");
    };

    const resetWinner = () => {
      setWinner(null);
      console.log("Победитель сброшен");
    };

    resetBoardState();
    resetCurrentPlayer();
    resetWinner();
  };

  return restartGame;
};
