//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10
let num2 = 200

if (num1 > num2){
  console.log('Il numero 1 è il più grande ' + num1)
} else {
  console.log('Il numero 2 è il più grande ' + num2)

}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let misuraMia = 13

if (misuraMia < 5){
  console.log('Tiny')
} else if (misuraMia < 10){
  console.log('Small')
}else if (misuraMia < 15){
  console.log('Medium')
}else if (misuraMia < 20){
  console.log('Large')
} else if(misuraMia >= 20){
  console.log('Huge')
}
//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeri = [0,1,2,3,4,5,6,7,8,9,10]

let stampaNumeri 

for (let i = 0; i < numeri.length; i++){
  
  if(i === 3 || i === 8){
    continue
  }
  //  console.log(i)
}
  

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeriPariDispari = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for (let i = 0; i < numeriPariDispari.length; i++){
  if ([i] % 2 === 0){
  //  console.log(i + ' numero pari')
  } else {
  //  console.log(i +' numero dispari')
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let tantiNumeri = 7
let tantiNumeri2 = 1


if ((tantiNumeri + tantiNumeri2) === 8 || (tantiNumeri === 8) || (tantiNumeri2 === 8)){
  console.log('il risultato è 8')
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

// let prezzi = [10, 25, 37, 200]
// let totalShoppingCart = 0

// for (let i = 0; i < prezzi.length; i++){

//   totalShoppingCart += prezzi[i]

// }

// if(totalShoppingCart >= 50){

//     console.log('complimenti la tua spedizione è gratis, il costo totale è: ', totalShoppingCart);
    
//   } else if (totalShoppingCart < 50){

//     totalShoppingCart += 10
//     console.log('il costo della tua spedizione è 10 euro per un totale di: ', totalShoppingCart);
//   }


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let prezzi = [100, 200]
let totalShoppingCart = 0


for (let i = 0; i < prezzi.length; i++){

  totalShoppingCart += prezzi[i]

}

if(totalShoppingCart >= 50){

    console.log('complimenti la tua spedizione è gratis, il costo totale è: ', totalShoppingCart);

    totalShoppingCart = totalShoppingCart - ((totalShoppingCart / 100) * 20)

    console.log('Complimenti!! Oggi hai diritto al 20% di sconto per il black friday, hai quindi un totale di: ' + totalShoppingCart + ' euro');
    
  } else if (totalShoppingCart < 50){

    totalShoppingCart += 10
    console.log('il costo della tua spedizione è 10 euro per un totale di: ', totalShoppingCart);

    totalShoppingCart = totalShoppingCart - ((totalShoppingCart / 100) * 20)
    console.log('Complimenti!! Oggi hai diritto al 20% di sconto per il black friday, hai quindi un totale di: ' + totalShoppingCart + ' euro');
  }

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 
// let isMale = 'female'

// let gender = 'male' 
// ? 'female' 
// : 'male'
// if(isMale === 'male'){
//   gender = 'male'
// } else {
//   gender = 'female'
// }

// console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let index = 1; index <= 100; index++) {
  let numero = index
  let tre = index % 3 === 0
  let cinque = index % 5 === 0

  if(tre && cinque){
    numero = 'FrizzBuzz'
  } else if (cinque){
    numero = 'Buzz'
  }else if (tre){
    numero = 'Frizz'
  }

  console.log(numero);
}