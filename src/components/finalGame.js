import React from "react";

export const FinalGame = ({win, time}) => {
  return (
    <>
      <div className="gameover">
        <h1>¡JUEGO TERMINADO!</h1>
        {win ? <p>¡felicitaciones, ganaste!</p>:<p>¡juego terminado, perdiste!</p>}
        <p>tu tiempo fue de</p>
        <h2>{time}</h2>
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
