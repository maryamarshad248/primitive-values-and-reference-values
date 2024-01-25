'use strict';

// primitives

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// objects: reference value

const Jassica = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 30,
};

const marriedJassica = Jassica;
marriedJassica.lastName = 'Davis';

console.log('Before Marriage:', Jassica);
console.log('After Marriage:', marriedJassica);

// copy the object
const Jassica2 = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 30,
  family: ['Bob', 'john', 'Henry'],
};

const jassicaCopy = Object.assign({}, Jassica2);
jassicaCopy.lastName = 'Davis';

jassicaCopy.family.push('Peter');
jassicaCopy.family.push('Adward');

console.log('Befor Marriag:', Jassica2);
console.log('After Marriage:', jassicaCopy);
