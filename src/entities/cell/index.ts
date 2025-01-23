import {useGameContext} from "@/shared/store";
import {ICell} from "@/shared/interfaces";


const useCellUseCase = () => {
    // Деструктуризируем нужные элементы из контекста игры
    const { board, setBoard, currentPlayer, setCurrentPlayer, winner } = useGameContext();

    // Реализуем логику нажатия на ячейку в поле
    const handleCellClick = (cell: ICell): void => {

        if (winner) {
            console.log("Игра окончена. Победитель: ", winner);
            return;
        }

        if (cell.player) {
            console.log("Ячейка уже занята");
            return;
        }

        const newBoard = board.map(c => c.id === cell.id ? { ...c, player: currentPlayer } : c);
        setBoard(newBoard);

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    return {
        handleCellClick
    }
}

export {
    useCellUseCase,
}