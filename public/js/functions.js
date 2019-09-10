function domReady(e){
    
}

document.addEventListener('DOMContentReady', domReady);


function play(e, data, numero){
    e.preventDefault();
    let personaggio = getPersonaggioMarvel();
    console.log(personaggio.id);
    let el = document.getElementById('feedback');
    let n = getEstrazione(100);
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
function getEstrazione(max){
    estr = Math.floor((Math.random() * max) +1);
    return estr;
}

// Prendo un personaggio random dalla marvel con titolo e immaagine
function getPersonaggioMarvel(){
    let apiKey = `22f5fe1303b0ffd673a3581119ea058b`;
    let hash = `73aa13401993fe2b9cdc099524b39c6b`;
    let ts = `1`;
    let KEY = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;
    let url = `http://gateway.marvel.com/v1/public/characters?offset=${String(getEstrazione(74))}&${KEY}`;
     fetch(url)
    .then(response => {
        if(response.ok) return response.json();
    })
    .then(function(response){
        let elemRandom = getEstrazione(20)-1;
        let elemSelected = response.data.results[elemRandom];
        let img = response.data.results[elemRandom].thumbnail.path;
        if(!img.includes("image_not_available")){
            img += "/portrait_incredible.jpg";
        }
        else{
            img+=".jpg";
        }
        personaggio = {
            id: elemSelected.id,
            name: elemSelected.name,
            image: img
        }
    })
    .catch(error => console.log("Si e' verificato un errore."));
    while(personaggio == null);
    return personaggio;
}

// Prendo un fumetto random dalla marvel con titolo e immagine. Possibilmente anche descrizione
function getComicMarvel(){

}

