import React from 'react';
import { useGameContext } from "@/shared/store";

const MoveCounter: React.FC = () => {
    const { currentPlayer} = useGameContext();

    return (
        <div className="move-counter">
            <p>Сейчас ходит: {currentPlayer}</p>
        </div>
    );
};

export default MoveCounter;