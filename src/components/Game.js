import React, { useEffect, useState } from "react";
import db from "../db/reglas.json";
import { GenerarCartones } from "../helpers/cartones";
import { Balotas } from "./Balotas";
import { Carton } from "./Carton";
import { FinalGame } from "./finalGame";

const letras = { B: "#F1463E", I: "#3578BA", N: "#7BC457", G: "#F9D047", O: "#8C67AE" };
//  , , 

export const Game = () => {
  const [balotasA, setBalotasA] = useState(db.balotas);
  const [cartonA, setCartonA] = useState(GenerarCartones());
  const [cartonB, setCartonB] = useState(GenerarCartones());
  const [con, setCon] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [id_new, setId_new] = useState(null);
  const [win,setWin] = useState(false);
  const [time, setTime] = useState(false);
  const handleBalotas = () => {
    let id = 0;
    if (con === 75) return;
    while (id === 0 || id > 75 || balotasA[id - 1].out === true) {
      id = Math.floor(Math.random() * 75) + 1;
    }
    balotasA[id - 1].out = true;
    setCon(con + 1);
    setId_new(id);
    cartonRival(id,cartonB);
  };

  const selectNumber = (id,carton) => {
    let cartonTemp = carton.map((el) =>
      el.id === id 
        ? !el.selected
          ? { ...el, selected: true }
          : { ...el, selected: false }
        : el
    );
    setCartonA(cartonTemp);
  };

  const cartonRival = (id,carton) => {
    let cartonTemp = carton.map((el) =>
      el.id === id ? { ...el, selected: true } : el
    );
    setCartonB(cartonTemp);
    for (let i = 0; i < cartonB.length; i++) {
      if(!cartonB[i].selected && !balotasA[cartonB[i].id-1].out)return
    }
    setWin(false);
    setGameover(true);
  };

  const bingo = (carton) => {
    for (let i = 0; i < cartonA.length; i++) {
      if (!cartonA[i].selected) {
        alert("Aún te faltan casillas por marcar, verifica y sigue jugando");
        return;
      }
      if (!balotasA[cartonA[i].id - 1].out) {
        alert(`te falta la balota: ${cartonA[i].id}`);
      }
    }
    setWin(true)
    setGameover(true);
  };


  useEffect(() => {
    if(con===75) return
    if(con>0){
      const interval = setInterval(()=>
      handleBalotas()
      ,5000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [con])

  return (
    <>
      <div className="bingo-game">
        <div className="bingo-game-header">
          <img
            className="bingo-game-title"
            src="https://static.spacecrafted.com/f28b97dbc1c84e84a123fcf1d7ad66cc/i/ce141728f0284db9907df6fa8425d146/1/4SoifmQp45JMgBnHp7ed2/bingo-logo.png"
            alt=""
          />
          <div className="bingo-game-balotera">
            <img
              className="bingo-game-balotera-img"
              src="https://www.gifsanimados.org/data/media/994/bingo-imagen-animada-0019.gif"
              border="0"
              alt="bingo-imagen-animada-0019"
            />
            <div className="bingo-game-balotera-balota">
              <h2>Balota</h2>
              {con > 0 && (
                <>
                  <div
                    style={{"background":letras[balotasA[id_new - 1].letter]}}
                    className="bingo-game-balotera-balota-let"
                  >
                    {balotasA[id_new - 1].letter}
                  </div>
                  <div
                    style={{ background: letras[balotasA[id_new - 1].letter] }}
                    className="bingo-game-balotera-balota-num"
                  >
                    {balotasA[id_new - 1].id}
                  </div>
                </>
              )}
            </div>
          </div>

          {con===0 &&
          <button onClick={handleBalotas}>Empezar</button>
          }
          {con>0 && <h1>00:00:00 seg</h1>}
          <div className="balotas-container">
            {balotasA.map((el) => (
              <Balotas key={el.id} balotas={el} />
            ))}
          </div>
        </div>
        <div className="playerCartons">
          <Carton
            select={selectNumber}
            carton={cartonA}
            player={"yo"}
            bingo={bingo}
          />
          <Carton
            carton={cartonB}
            player={"rival"}
          />
        </div>
        {(con === 75 || gameover) && <FinalGame win ={win} time={time}/>}
      </div>
    </>
  );
};
