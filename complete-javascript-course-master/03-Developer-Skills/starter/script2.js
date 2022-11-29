"use strict";

// multiplicarf por 7 um array e ler so a partir da segunda casa

// const arr = [1, 2, 3, 4, 5, 6];

// const arr7 = arr.map((n, i) => {
//   console.log("Index atual = " + i);
//   console.log("Numero atual = " + n);
//   return i >= 1 ? n * 7 : n;
// });

// for (let i = 0; i < arr.length; ++i) {
//     console.log(arr[i])
// }

//console.log(arr7);
//indexatual == arr.index

const produtos = [
  { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
  { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
  { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
  { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
  { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" },
];

const ids = produtos.map((p) => p.id);
const nomes = produtos.map((p) => p.nome);

console.log(ids, nomes);

const alimentos = produtos
  .filter((p) => p.categoria === "alimento")
  .map((a) => a.nome); //da pra botar um .map aqui pq o .filter te retorna um array
console.log(alimentos);

const total = produtos.reduce((acc, p) => acc + p.valor, 0);
console.log(total);
