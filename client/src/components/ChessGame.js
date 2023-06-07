import './ChessGame.css';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { Button } from 'react-bootstrap';

function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [currentPlayer, setCurrentPlayer] = useState('w');

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      if (isGameOver()) {
        // Игра окончена, предложение повторить
        if (window.confirm('Игра окончена! Хотите сыграть еще раз?')) {
          return new Chess(); // Начать новую игру
        } else {
          return update; // Продолжить текущую игру
        }
      }
      return update;
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
      <div>w - Белые</div>
      <div>b - Чёрные</div>
      <div>Текущий игрок: {currentPlayer}</div>
      {isGameOver() && <div>Игра окончена!</div>}
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