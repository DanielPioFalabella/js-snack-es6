// creare un array con squadre di calcio, punti fatti e falli subiti
const squadreDiCalcio = [
    {"nomeSquadra": "Roma", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Milan", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Juve", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Inter", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Napoli", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Fiorentina", "puntiFatti": 0, "falliSubiti": 0},
]

console.log(squadreDiCalcio)

// creare una funzione che mi generi numeri random 
// FUNCTION
function numRandom(min, max){
    return Math.floor(Math.random() * ((max - min) + 1) + min) 
}

// sostituire il numero random al posto di puntiFatti e falliSubiti

for(let i = 0; i < squadreDiCalcio.length; i++){
    squadreDiCalcio[i].puntiFatti = numRandom(10, 60);
    squadreDiCalcio[i].falliSubiti = numRandom(1, 13);
    console.log("Punti fatti", squadreDiCalcio[i].puntiFatti)
    console.log("Falli subiti", squadreDiCalcio[i].falliSubiti)
}

// creare un nuovo array che contiene solamente i nomi delle squadre e i falli subiti
let nuovoArray = [];

for(let i = 0; i < squadreDiCalcio.length; i++){
    nuovoArray.push(squadreDiCalcio[i].nomeSquadra);
    nuovoArray.push(squadreDiCalcio[i].falliSubiti);
}

console.log(nuovoArray)