import React from "react";

export const FinalGame = () => {
  return (
    <>
      <div className="gameover">
        <h1>¡JUEGO TERMINADO!</h1>
        <p>tu puntaje fue de </p>
        <h2>500pt</h2>
        <p>tu tiempo fue de</p>
        <h2>00:00:43 seg</h2>
        <p>Ranking</p>
        <h2>5°</h2>
        <a
          className="btn-playAgain"
          href="/game"
          onClick={() => console.log("jugar de nuevo")}
        >
          Jugar de nuevo
        </a>
        <a className="btn-exit" href="/" onClick={() => console.log("salir")}>
          Salir
        </a>
      </div>
    </>
  );
};
