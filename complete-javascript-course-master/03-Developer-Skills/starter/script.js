// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//entao eu errei a ordem mas usei esse arquivo parar anotar algumas func para usar nos arrays

//map=> cria um novo array chamndo a função para cada elemento
//ex1:de map()
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt); /// resultado é a raiz quadrada de todos os elementos ex2:
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(number[i]);
// function myFunction(num) {
//   return num * 10;
// } /// retorna todos os elementos multiplicados por 10

//reduce=> reduz os valores de um array a um valor unico indo da direita para a esquerda
//ex: de redeuce
const numbers = [175, 50, 25, 45];
const eu = numbers.reduce(myFunc);
console.log(eu);
function myFunc(total, num) {
  return total - num;
}
//concat=> juntoa dois arrays ou mais e retorna a junção desses arrays em um terceiro
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

const children = arr1.concat(arr2, arr3);
//result Cecilie,Lone,Emil,Tobias,Linus,Robin

//reverse=> igual ao do tiktok/insta kkk reverte ordem dos valores de um array [1,2,3] vira [3,2,1]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
//result Mango,Apple,Orange,Banana

//shift=>remove um elemento do array e retorna esse elemento(parecido com o pop()só q ao contrario)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//copyWithin=>copia elementos de um array e passa para outros
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
//reult Banana,Orange,Banana,Orange
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 0, 2);
//resultBanana,Orange,Banana,Orange,Kiwi,Papaya

// splice=> add ou remove elementos de um array (primeira casa fala onde vao entrar os elementos o
//   segundo fala quantos elementos vao sair(lembrando q ele conta a partir do ultimo elemento q entrou)dps sao os elementos q vc quer adicionar
//   splice(2, 0, "Lemon", "Kiwi"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");
//result Banana,Orange,Lemon,Kiwi,Apple,Mango

//CARA LISTEI TODOS Q ACHEI IMPORTANTES MAS SÓ EXPLIQUEI OS Q EU ACHEI MAIS COMPLICADOS PQ NA REAL A UTILIZAÇÃO DELES É BEM
// PARECIDA É SEMPRE .ALGUMACOISA E PASSA PARAMETRO

// OS 30+
// length=>corre o array contando o numero de casas e diz o tamanho dele
// concat=> juntoa dois arrays ou mais e retorna a junção desses arrays em um terceiro
// constructor=>retorna a fuction q criou o objeto do array(não confundior com contructor de classe pfv)
// copyWithin=>copia elementos de um array e passa para outros
// entires=>retorna o valor de uma interação de um array
// every=>checka se todos os elementos do array passam em um test (???????)
// fill=>preenche os elementos do array com um valor statico
// filter=>cria um array novo com todos os elementos q passaram no teste
// find=>retorna o primeiro elemento q passou naquele teste
// findindex=>retorna index do primeiro elemento q passou naquele teste
// foreach=>chama uma função em cadaelemento do array
// from=>cria um array de um objeto
// includes=>checka se um array possui um determinado elemento
// indexof=>procura pelo elemento desse index
// isarray=>po serio so pode ser mais obvio se tiver uma interrogação no final
// join=> junta todos os elementos do um array em uma string
// keys=>retorna a interação do objeto do array contendo as keysdo array original(cara perguntar pro ian pq eu n entendi)
// lastindexof=>mostra o index de um elemento correndo do final do array
// length=> pow preciso nem explicar só pensar no q significa length  e sim retorna em numeros
// map=> cria um novo array chamndo a função para cada elemento
// pop=>remove o ultimo elemento do array e retorna esse elemento
// prototype=>permite  adicionar propiedades e motodos a um array
// push=> add um novo elemento a um array
// reduce=> reduz os valores de um array a um valor unico indo da direita para a esquerda
// reducerigth=> mesma coisa só q ao contrário
// reverse=> igual ao do tiktok/insta kkk reverte ordem dos valores de um array [1,2,3] vira [3,2,1]
// shift=>remove um elemento do array e retorna esse elemento(parecido com o pop())
// slice=>seleciona uma parte de um array e retorna um novo array
// some=>checka se algum dos elementos do array passa no test
// sort=>arruma por ordem alfabetica o array
// splice=> add ou remove elementos de um array
// tostring=>converte um array para string
// unshift=>add um elemento no começo do array de retorna sua length
// valueof=>retorna o valor primitivo do array
