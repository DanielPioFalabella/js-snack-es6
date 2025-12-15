// creare un array di oggetti
const biciclette = [
    {"nome": "biciclettaUno", "peso": 7.9},
    {"nome": "biciclettaDue", "peso": 7.8},
    {"nome": "biciclettaTre", "peso": 7.5},
    {"nome": "biciclettaQuattro", "peso": 8.3},
    {"nome": "biciclettaCinque", "peso": 8.0},
    {"nome": "biciclettaSei", "peso": 7.6},
    {"nome": "biciclettaSette", "peso": 8.1},
]

console.log(biciclette)

// stampare la bicicletta più leggera
let biciclettaPiuLeggera = biciclette[0];

for(let i = 0; i < biciclette.length; i++){
    if(biciclette[i].peso < biciclettaPiuLeggera.peso){
        biciclettaPiuLeggera = biciclette[i];
    }
}

console.log("La bicicletta più leggera è", biciclettaPiuLeggera.nome)