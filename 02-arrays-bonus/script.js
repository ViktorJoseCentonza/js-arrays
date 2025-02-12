const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log("N1---------------------------------------------------------------------------------------");

console.log(`normal: ${teachers}`);
const reversedTeachers = teachers.slice().reverse(); //slice to copy the original array and reversing the copy to avoid mutating original array
console.log(`array still normal after reversing: ${teachers}`);
console.log(`reversed: ${reversedTeachers}`);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log("N2---------------------------------------------------------------------------------------");
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  console.log(`cycle ${i}, the name is ${teachers[i]}, lenght is ${teachers[i].length}`);

  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
    console.log(`the name ${teachers[i]} is longer than 5! Added.`);
  }
}
console.log(`the names longer than 4 are: ${longNames}`);

// 3. Rimuovi 'Ed' dall'array teachers
console.log("N3---------------------------------------------------------------------------------------");

console.log(`before removing Ed ${teachers}`);
for (let i = 0; i < teachers.length; i++) {

  if (teachers[i] == "Ed") {
    teachers.splice(i, 1); //remove the item at i and stop removing
  }
}

console.log(`after removing Ed ${teachers}`);

teachers.unshift("Ed");

console.log(`readding Ed ${teachers}`);

teachers.splice(teachers.indexOf("Ed"), 1) //removes only the first Ed it finds (must be looped to remove all)

console.log(`removing Ed differently ${teachers}`);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
console.log("N4---------------------------------------------------------------------------------------");

//teachers.splice(teachers.indexOf("Fabio"), 1) //uncomment to check if functioning

if (teachers.indexOf("Fabio") == -1) {
  isFabioPresent = false;
  console.log(isFabioPresent);
} else {
  isFabioPresent = true;
  console.log(isFabioPresent);
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
console.log("N5---------------------------------------------------------------------------------------");

//let method
/*
let teachersString =[];
for (let i = 0; i < teachers.length; i++) {
  teachersString = teachersString + teachers[i]+",";
  console.log(`${teachersString}`);
}
*/
//const method
const teachersString = teachers.join();
console.log(teachersString);

