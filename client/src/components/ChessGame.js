import './ChessGame.css';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { Button } from 'react-bootstrap';

function ChessGame() {
  const [game, setGame] = useState(new Chess())
  const [currentPlayer, setCurrentPlayer] = useState('w')

  const currentPlayerLabel = currentPlayer === 'w' ? 'Белые' : 'Чёрные'
  const playerWin = currentPlayerLabel === 'Белые' ? 'Чёрные' : 'Белые'

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g }
      modify(update)
      if (isGameOver()) {
          return update
      }
      return update
    });
  }


  function onDrop(source, target) {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q'
      });
    });

    if (move == null) return false;

    setCurrentPlayer(game.turn());
    return true;
  }

  function isGameOver() {
    return game.in_checkmate() || game.in_stalemate() || game.in_draw();
  }

  return (
    <div className="app">
      <div>Текущий игрок: {currentPlayerLabel}</div>
      {isGameOver() && window.alert(`Игра окончена! Победили ${playerWin}`)}
      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
      />
      <Button
        onClick={() => window.location.reload()}
        className="mt-2"
        variant={"dark"}
      >
        Перезапустить игру
      </Button>
    </div>
  );
}

export default ChessGame;