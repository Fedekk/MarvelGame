function domReady(e){
    
}

document.addEventListener('DOMContentReady', domReady);


function play(e, data, numero){
    e.preventDefault();
    let el = document.getElementById('feedback');
    let n = getEstrazione();
    if(numero != n)
        el.innerHTML = `Hai perso, mi spiace. E' uscito il numero ${ n }`;
    else
        el.innerHTML= `Hai vinto `;
}
/** Template */
// CRD operations character
function storeCharacter(data){

}
function showCharacter(id){

}
function deleteCharacter(id){
    
}
// CRD operations comic
function storeComic(data){

}
function showComic(id){

}
function deleteComic(id){

}
/**End template operations */
/**
 * Libreria
 */

//  Estrazione numero da 1 a 100
function getEstrazione(){
    estr = Math.floor((Math.random() * 100) +1);
    return estr;
}

// Prendo un personaggio random dalla marvel con titolo e immaagine
function getPersonaggioMarve(){

}

// Prendo un fumetto random dalla marvel con titolo e immagine. Possibilmente anche descrizione
function getComicMarvel(){

}

