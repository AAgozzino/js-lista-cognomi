// Creo la lista di cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// Chiedere all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

// Inserire il cognome nella lista
cognomi.push(cognomeUtente);
console.log(cognomi);

// Mettere gli elementi della lista in ordine alfabetico
//cognomi = cognomi.sort();
var cognomiLower = [];
for (var i = 0; i < cognomi.length; i++) {
  cognomi[i].toLowerCase;
  cognomiLower.push(cognomi[i]);
  console.log(cognomi[i]);
}
// Stampare la lista in ordine alfabetico
console.log(cognomiLower);

// Stampare la posizione del nuovo cognome
console.log(cognomi.indexOf(cognomeUtente) + 1);
