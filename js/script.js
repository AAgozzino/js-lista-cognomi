// Creo la lista di cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// Chiedere all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

// Inserire il cognome nella lista
  if (cognomeUtente.charAt(0) == cognomeUtente.charAt(0).toLowerCase()) {
    cognomeCapital = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
    cognomi.push(cognomeCapital);
  }
  else {
    cognomi.push(cognomeUtente);
  };

console.log(cognomi);

// Mettere gli elementi della lista in ordine alfabetico
cognomi = cognomi.sort();

// Stampare la lista in ordine alfabetico
console.log(cognomi);

// Stampare la posizione del nuovo cognome
console.log(cognomi.indexOf(cognomeUtente) + 1);
