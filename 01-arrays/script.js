const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
console.log("N1------------------------------------------------------------------------------------");
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
console.log("N2---------------------------------------------------------------------------------------");
console.log(`before changing: ${teachers[4]}`);
teachers[4] = "Patrick"
console.log(`after changing: ${teachers[4]}`);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
console.log("N3---------------------------------------------------------------------------------------");
const lastTeacher = teachers.pop();
console.log(`The last teacher is ${lastTeacher}`);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
console.log("N4---------------------------------------------------------------------------------------");
const firstTeacher = teachers.shift();
console.log(`The first teacher is ${firstTeacher}`);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log("N5---------------------------------------------------------------------------------------");
teachers[teachers.length] = "Vanessa"; //
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log("N6---------------------------------------------------------------------------------------");
teachers.unshift("Sarah")
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log("N7---------------------------------------------------------------------------------------");
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
console.log("N8---------------------------------------------------------------------------------------");
const isTeachersEmpty = null;