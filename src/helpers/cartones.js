export const GenerarID = () => {
  let carton = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
  };
  let id;

  while (carton.B.length < 5) {
    id = Math.floor(Math.random() * 15);
    if (!carton.B.includes(id)) carton.B.push(id);
  }
  carton.B.sort(function(a,b){return a-b;})
  while (carton.I.length < 5) {
    id = Math.floor(Math.random() * 15 + 15);

    if (!carton.I.includes(id)) carton.I.push(id);
  }
  carton.I.sort(function(a,b){return a-b;})
  while (carton.N.length < 5) {
    id = Math.floor(Math.random() * 15 + 30);
    if (!carton.N.includes(id)) carton.N.push(id);
  }
  carton.N.sort(function(a,b){return a-b;})

  while (carton.G.length < 5) {
    id = Math.floor(Math.random() * 15 + 45);
    if (!carton.G.includes(id)) carton.G.push(id);
  }
  carton.G.sort(function(a,b){return a-b;})

  while (carton.O.length < 5) {
    id = Math.floor(Math.random() * 15 + 60);
    if (!carton.O.includes(id)) carton.O.push(id);
  }
  carton.O.sort(function(a,b){return a-b;})
  return carton;
};


export const GenerarCartones = () =>{
     let carton = GenerarID()
  let cartonFinal = []
     for(let i=0;i<5;i++){
        cartonFinal.push({id:carton.B[i]+1,out:false, selected: false, letter:"B"})

     }

     for(let i=0;i<5;i++){
        cartonFinal.push({id:carton.I[i]+1,out:false, selected: false, letter:"I"})
     }

     for(let i=0;i<5;i++){
        cartonFinal.push({id:carton.N[i]+1,out:false, selected: false, letter:"N"})
     }

     for(let i=0;i<5;i++){
        cartonFinal.push({id:carton.G[i]+1,out:false, selected: false,letter:"G"})
     }

     for(let i=0;i<5;i++){
        cartonFinal.push({id:carton.O[i]+1,out:false, selected: false, letter:"O"})
     }


     return cartonFinal
}
