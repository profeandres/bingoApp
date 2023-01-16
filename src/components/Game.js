import React, { useState } from "react";
import db from "../db/reglas.json";
import { GenerarCartones} from "../helpers/cartones";
import { Balotas } from "./Balotas";
import { Carton } from "./Carton";
import { FinalGame } from "./finalGame";

export const Game = () => {
  const [balotasA, setBalotasA] = useState(db.balotas);
  const [cartonA, setCartonA] = useState(GenerarCartones());
  const [cartonB, setCartonB] = useState(GenerarCartones());
  const [con, setCon] = useState(0);
  const [gameover, setGameover] = useState(false)
  const [id, setId] = useState(0)
  
  const handleBalotas = () => {
    let id = 0;
    if (con === 75) return;
    while (id === 0 || id > 75 || balotasA[id - 1].out === true) {
      id = Math.floor(Math.random() * 75) + 1;
    }

    if (id === 75) {
      let changedBalota = balotasA[id - 1];
      balotasA.pop();
      changedBalota.out = true;
      setBalotasA([...balotasA, changedBalota]);
    } else if (id === 1) {
      let changedBalota = balotasA[id - 1];
      balotasA.shift();
      changedBalota.out = true;
      setBalotasA([changedBalota, ...balotasA]);
    } else {
      const changedBalota = balotasA[id - 1];
      changedBalota.out = true;
      const sliceforward = balotasA.slice(id);
      const slicebackward = balotasA.splice(0, id - 1);
      const sliceJoin = [...slicebackward, changedBalota, ...sliceforward];
      setBalotasA(sliceJoin);
    }
    setCon(con + 1);
    selectNumberB(id);
    setId(id)
  };

  const selectNumberA = (id) => {
    let cartonATemp = cartonA.map((el) =>
      el.id === id ? !el.selected ? { ...el, selected: true }: { ...el, selected: false }: el
    );
    setCartonA(cartonATemp);
  };

  const selectNumberB = (id) => {
    let cartonBTemp = cartonB.map((el) =>
      el.id === id ? { ...el, selected: true } : el
    );
    setCartonB(cartonBTemp);
  };

  const bingo = () =>{
    for(let i = 0; i<cartonA.length;i++){
      if(!cartonA[i].selected){
        alert('Aún te faltan casillas por marcar, verifica y sigue jugando')
        return
      }
      if(!balotasA[cartonA[i].id-1].out){
        alert(`te falta la balota: ${i+1}`)

      }
    }
    setGameover(true)
  }

  console.log(cartonA,balotasA);

  return (
    <>
      <div className="bingo-game">
        <div className="bingo-game-header">
          <img
            className="bingo-game-title"
            src="https://static.spacecrafted.com/f28b97dbc1c84e84a123fcf1d7ad66cc/i/ce141728f0284db9907df6fa8425d146/1/4SoifmQp45JMgBnHp7ed2/bingo-logo.png"
            alt=""
          />
          <img
            className="bingo-game-img"
            src="https://www.gifsanimados.org/data/media/994/bingo-imagen-animada-0019.gif"
            border="0"
            alt="bingo-imagen-animada-0019"
          />
          <div>{}</div>
          <button onClick={handleBalotas}>Siguiente</button>
          <div className="balotas-container">
            {balotasA.map((el) => (
              <Balotas key={el.id} balotas={el} />
            ))}
          </div>
        </div>
        <div className="playerCartons">
          <Carton selectNumber={selectNumberA} carton={cartonA} player={"yo"} bingo={bingo}/>
          <Carton
            selectNumber={() => {
              return "";
            }}
            carton={cartonB}
            player={"rival"}
          />
        </div>
        {(con===75 || gameover) && <FinalGame/>}
      </div>
    </>
  );
};
