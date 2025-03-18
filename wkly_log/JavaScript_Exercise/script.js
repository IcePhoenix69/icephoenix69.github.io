// Copyright by Matteo
function clicc() {
    let temperature = prompt("Quanti gradi ci sono?");
    if (temperature < 18) {
        document.getElementById('mod_test').innerHTML = "Troppo Freddo";
        console.log("Troppo Freddo");
    } else {
        if (temperature < 25) {
            document.getElementById('mod_test').innerHTML = "Ok!";
            console.log("Ok!");
        } else {
            document.getElementById('mod_test').innerHTML = "Troppo Caldo";
            console.log("Troppo Caldo");
        }
    }
}
function clicc2() {
    // da fare: creare funzione di ping pong: Se num multiplo di == 3 o == 5 dice risp. ping o pong, se entrambi ping pong
    let num = prompt("E' ping o pong? Dimmi il tuo numero!");
    if (num % 3 == 0 && num % 5 == 0) {
        document.getElementById("pingpong").innerHTML = "Ping pong!";
        console.log("Ping Pong!");
    } else if (num % 3 == 0) {
        document.getElementById("pingpong").innerHTML = "Ping!";
        console.log("Ping!");
    } else if (num % 5 == 0) {
        document.getElementById("pingpong").innerHTML = "Pong!";
        console.log("Pong!");
    } else {
        document.getElementById("pingpong").innerHTML = "Nope";
        console.log("Nope");
    }
}
function stampaACaso() {
    const numCasuale = Math.random();
    const numTra1e100 = Math.ceil(numCasuale * 100); // Math.random e Math.ceil si combinano per creare un numero tra 1 e 100
    console.log(numTra1e100);
}
stampaACaso();
function sum(n1, n2) {
    return n1 + n2;
}
let result = sum(30, 6);
console.log(result);

//
var numero1;
var numero2;
var result2;
function somma1(x, y) {
    return x += y;
}
function tab_number() {
    numero1 = document.getElementById("tabNum1").value;
    numero2 = document.getElementById("tabNum2").value;
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    result2 = somma1(numero1, numero2);
    document.getElementById("result").innerHTML = "Il testo scritto negli input e' " + result2;
}

function PressMe() {
    const valoreInput = document.getElementById("myInput").value;
    document.getElementById("risultato").innerHTML = "Il testo scritto nell'input e' " + valoreInput;
}


// Collegamenti dei bottoni
const downInputPlayer = document.getElementById('bottone_meno')
const upInputPlayer = document.getElementById('bottone_piu')
const startInputPlayer = document.getElementById('start_game')

var MyNum; // creo un valore nullo per il mio input
var victoryCounter = 0;
var defeatCounter = 0;
var drawCounter = 0;

// Attivazione dei bottoni con evento click
upInputPlayer.addEventListener('click', increaseInput);
downInputPlayer.addEventListener('click', decreaseInput);
startInputPlayer.addEventListener('click', startGame);

function startGame() { // Avvio della funzione che partirà quando clicco il bottone collegato
    MyNum = document.getElementById("casella_numero").value; // recupero un valore dall'input per MyNum
    var MyNumero = Number(MyNum); // Definisco MyNumero come elem. numerico da MyNum esterno
    const guessRandNum = Math.round(Math.random() * 10); // creo un numero random da indovinare, moltiplico per 10 e arrotondo per eccesso
    const cpuRandNum = Math.round(Math.random() * 10);// creo un numero random per il mio avversario, moltiplico per 10 e arrotondo per eccessoù    
    var myConfronto = Math.round(Math.abs(MyNumero - guessRandNum)); // Numero assoluto di MyNumero sottraendo il numero da indovinare ed Arrotondo il risultato precedente
    var cpuConfronto = Math.round(Math.abs(cpuRandNum - guessRandNum)); // Num assoluto della Cpu - il num da indovinare ed Arrotondo il risultato precedente
    // If-else con i vari confronti da fare, se io ho un valore più alto perdo, se è più piccolo vinco e se è un pareggio "Draw".
    if (myConfronto > cpuConfronto) {
        document.getElementById("WinOrLose").innerHTML = "You are a loser!"
        defeatCounter++;
        document.getElementById("sconfitte_counter").innerHTML = defeatCounter;
    } else if (myConfronto < cpuConfronto) {
        document.getElementById("WinOrLose").innerHTML = "You are a winner!"
        victoryCounter++;
        document.getElementById("vittorie_counter").innerHTML = victoryCounter;
    } else if (myConfronto == cpuConfronto) {
        document.getElementById("WinOrLose").innerHTML = "It's a draw!"
        drawCounter++;
        document.getElementById("pareggi_counter").innerHTML = drawCounter;
    } else {
        document.getElementById("WinOrLose").innerHTML = "Error" // In caso qualcosa si rompa ho messo un error come avviso
    };
    console.log(myConfronto); // check del confronto utente
    console.log(cpuConfronto); // check del confronto CPU
    document.getElementById("guessRandNum").innerHTML = guessRandNum; // Scrive il num da indovinare nascosto
    document.getElementById("cpuRandNum").innerHTML = cpuRandNum; // Scrive cosa ha pensato la CPU
}

// Funzione dedicata ad animare il bottone meno
function decreaseInput() {
    MyNum = parseInt(document.getElementById("casella_numero").value);
    if (MyNum > 0) {
        MyNum--;
        document.getElementById("casella_numero").value = MyNum;
        document.getElementById("bottone_meno").style.backgroundColor = "aqua";
        document.getElementById("bottone_piu").style.backgroundColor = "aqua";
    }
    if (MyNum == 0) {
        document.getElementById("bottone_meno").style.backgroundColor = "gray";
    }
}
// Funzione dedicata ad animare il bottone più
function increaseInput() {
    MyNum = parseInt(document.getElementById("casella_numero").value);
    if (MyNum < 10) {
        MyNum++;
        document.getElementById("casella_numero").value = MyNum;
        document.getElementById("bottone_piu").style.backgroundColor = "aqua";
        document.getElementById("bottone_meno").style.backgroundColor = "aqua";
    }
    if (MyNum == 10) {
        document.getElementById("bottone_piu").style.backgroundColor = "gray";
    }
}
// Gioco Testa o Croce
function flipCoin() {
    let player_1;
    let cpu_player;
    let playerChoice;
    let cpuChoice;
    player_1 = document.getElementById("player").value;
    console.log(player_1);
    if ((player_1 == "Testa") || (player_1 == "Croce")) {
        console.log("Fase 2");
        if (player_1 == "Testa") {
            playerChoice = 0;
            cpuChoice = 1;
            cpu_player = "Croce";
        } else {
            playerChoice = 1;
            cpuChoice = 0;
            cpu_player = "Testa";
        }
        let moneta = Math.round(Math.random());
        if (((moneta == 0) && (playerChoice == 0)) || ((moneta == 1) && (playerChoice == 1))) {
            document.getElementById("result3").innerHTML = "Vinto!";
            document.getElementById("cpuChoice").innerHTML = cpu_player;
            document.getElementById("moneyType").innerHTML = "Testa";
        } else {
            document.getElementById("result3").innerHTML = "Perso!";
            document.getElementById("cpuChoice").innerHTML = cpu_player;
            document.getElementById("moneyType").innerHTML = "Croce";
        }
    } else {
        alert("Inserire Testa o Croce (scritti così) per continuare");
    }
}