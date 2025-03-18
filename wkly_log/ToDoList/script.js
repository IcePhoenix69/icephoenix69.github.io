console.log("Hello World!");

let addListButtonStart = document.getElementById("insertInput"); // Collegamento bottone a JS
let toDoList = []
addListButtonStart.addEventListener('click',getUserInput); // Attivazione del bottone al click di esso

function AggiungiToDo(atoDoList){
    createListElem(atoDoList.textList) // funziona, mi accontento
}

function DoubledList(){ // funzione per duplicare la lista, ma non ho capito come usarla
    const ListaDuplicare = document.getElementById("ToDo_List"); //recupero la parte della lista da duplicare
    ListaDuplicare.innerHTML = ''
    toDoList.forEach(AggiungiToDo) // applico crealistelement all'array e richiamo la funzione
}

function createListElem (todo) {
    const itemBox = document.createElement('input') // Creo un input
    itemBox.type = 'checkbox' // Attribuisco type=checkbox
    itemBox.checked = todo.done; // inception da codice di daniele
    itemBox.classList.add("spawned_checkbox");
    itemBox.addEventListener('change', function () {
        todo.done = itemBox.checked;
        refreshPage()
    })// fine inception
    const toDoList = document.getElementById("ToDo_List");
    // Collego la mia lista html con JS
    const itemList = document.createElement('li'); // creo un elemento virtuale "Li"
    // Metto dentro li il mio valore input
    itemList.appendChild(itemBox)
    itemList.append(todo);
    toDoList.appendChild(itemList)
    // faccio apparire l'elemento creato dentro alla lista
}

function refreshPage(){
    toDoList.innerText = '';// non ne ho idea, poi ci guardo
    toDoList.forEach(createListElem);
}

function getUserInput() {
    let varUserInput = document.getElementById("userInput").value;
    // recupero del valore presente dentro all'input HTML
    createListElem(varUserInput)
    // Richiamo la funzione di creazione degli elementi della lista ed inserisco il mio valore
    // dell'input
    const insertList = {done: false, textList: varUserInput}
    toDoList.push(insertList)
    DoubledList()
}