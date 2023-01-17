import React from "react";

export const Carton = ({ player, carton, select=()=>"", bingo}) => {
  return (
    <div className="carton-container">
      {/* CABECERA DEL CARTON DE BINGO */}
      <div
        className={player !== "yo" ? "carton-bingo rival" : "carton-bingo yo"}
      >
        <div>B</div>
        <div>I</div>
        <div>N</div>
        <div>G</div>
        <div>O</div>
      </div>
    {/*  */}
      <div className={player !== "yo" ? "carton rival" : "carton yo"}>
        
        <div
          className={
            player === "yo" ? "carton-titulo yo" : "carton-titulo rival"
          }
        >

          {player === "yo" ? "YO" : "RIVAL"}

        </div>

        <div onClick={()=>bingo(carton)} className="bingo">
          ¡BINGO!
        </div>

        {carton.map((el) => (
          <div
            onClick={() => select(el.id,carton)}
            key={el.id}
            className={el.selected ? "carton-casilla on" : "carton-casilla off"}
          >
            {el.id}
          </div>
        ))}

      </div>
    </div>
  );
};
