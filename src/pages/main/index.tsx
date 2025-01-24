import { ReactNode } from "react";
import BoardWidget from "@/widget/board";
import styles from "./styles.module.scss";
import { useGameContext } from "@/shared/store";
import TaskDescription from "@/widget/task";

const MainPage = (): ReactNode => {
  const { board, winner } = useGameContext();

  // Проверяем, закончилась ли игра ничьей
  const isDraw = winner === null && board.every((cell) => cell.player !== null);

  return (
    <main className={styles.page}>
      {winner === "X" && <h1 className="text-4xl">Игрок X победил!</h1>}
      {winner === "O" && <h1 className="text-4xl">Игрок O победил!</h1>}
      {isDraw && <h1 className="text-4xl">Ничья!</h1>}

      <BoardWidget />

      {/* Описание задания */}
      <TaskDescription />
    </main>
  );
};

export default MainPage;
