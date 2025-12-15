// creare un array con squadre di calcio, punti fatti e falli subiti
const squadreDiCalcio = [
    {"nomeSquadra": "Roma", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Milan", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Juve", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Inter", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Napoli", "puntiFatti": 0, "falliSubiti": 0},
    {"nomeSquadra": "Fiorentina", "puntiFatti": 0, "falliSubiti": 0},
]

// creare una funzione che mi generi numeri random 
// FUNCTION
function numRandom(min, max){
    Math.floor(Math.random() * ((max - min) + 1) + min)
}

// sostituire il numero random al posto di puntiFatti e falliSubiti
let puntiFatti = numRandom(10, 60)
let falliSubiti = numRandom(1, 13)

// creare un nuovo array che contiene solamente i nomi delle squadre e i falli subiti