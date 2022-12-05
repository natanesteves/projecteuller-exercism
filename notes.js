"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);

//classes
// serve para encpsular o seu codigo em pequenas parte/objetos que teram metodos e propiedades
//começo da classe sempre vai existir o constructor q vai conter as principais propiedades

class Exemplo {
  constructor(links) {
    this.linkelemnts = links; //não entendi pq de usar this sempre?
  }
}

const exemplo = new Exemplo("a");
console.log(exemplo.links);

//.this é sempre uma referencia ao objeto geral?

//blz async/await existe pq js é single tread mas como se da o funcionamento do async/await por baixo dos panos?
//ele simplesmente é executado antes da pilha ou a pilha é parada assim q esse codigo é notado compilador nonbloking?
