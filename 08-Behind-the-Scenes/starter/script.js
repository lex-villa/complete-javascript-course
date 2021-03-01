'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  printAge();
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
