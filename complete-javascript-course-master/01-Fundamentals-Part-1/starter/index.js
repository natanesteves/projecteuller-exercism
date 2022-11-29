// let js = "amazing";
// //if (js === "amazing") alert("mec");
// console.log(4 + 10 + 10);

// console.log("jonas");
// console.log(23);

// let firstName = "bob";
// console.log(firstName);

// //desafio 0
// let country = "Brasil";
// let continent = "America";
// let population = 220000000;
// console.log(country, continent, population);
// /////

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 34);
// console.log(typeof "vitin");

// ///// desafio 1
// const markw = 92;
// const markh = 1.95;
// const jhonw = 85;
// const jhonh = 1.76;
// const markbmi = markw / markh ** 2;
// const jhonbmi = jhonw / jhonh ** 2;
// const markbmimaisalto = markbmi > jhonbmi;

// console.log(markbmi, jhonbmi, markbmimaisalto);
// ////////////////////
// const year = 2037;
// const job = " teacher";
// const birthyear = 1991;
// const firstName = "jonas";

// const jonas =
//   "im a " + firstName + ", a " + (year - birthyear) + "years old" + job;
// console.log(jonas);
// const jonaslitteral = `im jonas ${firstName}, a ${year - birthyear} ...`;
// console.log(jonaslitteral);

// const age = 13;
// const isoldEnouh = age >= 18;
// if (isoldEnouh) {
//   console.log("Sarah can start driving license ");
// } else {
//   const yearsleft = 18 - age;
//   console.log(`sarah é muito nova espere mais ${yearsleft} anos`);
// }

// const birthyear = 2012;

// let century;
// if (birthyear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
// /////desafio 2
// const markw = 92;
// const markh = 1.95;
// const jhonw = 85;
// const jhonh = 1.76;
// const markbmi = markw / markh ** 2;
// const jhonbmi = jhonw / jhonh ** 2;
// const markbmimaisalto = markbmi > jhonbmi;

// console.log(markbmi, jhonbmi, markbmimaisalto);

// if (markbmi > jhonbmi) {
//   console.log(`mark tem o bmi de ${markbmi} q é maior q o bmi de jhon`);
// } else {
//   console.log(`jhon tem o bmi de ${jhonbmi} q é maior q o bmi de mark`);
// }

//type conversion
const inputyear = "1991";
console.log(Number(inputyear));
console.log(Number(inputyear) + 18);
console.log(String(23));
//type coercion
console.log("im" + 23 + "years old");

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("joans")); //truthy
console.log(Boolean({})); //truthy
console.log(Boolean("")); //falsy

const money = 100;
if (money) {
  console.log("Don 't spend it all ;)");
} else {
  console.log("You should get a job! ");
}

let height; //undefined = a falsy
if (height) {
  console.log("YAY! Height is defined ");
} else {
  console.log("Height is UNDEFINED");
}

// const favorite = Number(prompt("whats your number?"));
// console.log(favorite);

// if (favorite === 23) {
//   alert("tua mãe");
// }

//desafio 3
// vacilei na declaração de variavel e no else if()
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;
// const dolphinavg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalaavg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(koalaavg);
// console.log(dolphinavg);

// if ((koalaavg || dolphinavg) < 100) {
//   console.log("nao chegaram a pontuação minima");
// } else {
//   if (koalaavg && dolphinavg > 100) {
//     if (koalaavg != dolphinavg) {
//       if (koalaavg > dolphinavg) {
//         console.log("koala é brabo");
//       } else {
//         console.log("dolphins é brabo");
//       }
//     } else {
//       console.log(" é empatou");
//     }
//   }
// }

// const day = "monda";

// switch (day) {
//   case "monday":
//     console.log("plan");
//     console.log(" go to");
//     break;
//   case " tuesday":
//     console.log("prepare video");
//     break;
//   case " friday":
//     console.log("sei la ");
//     break;
//   default:
//     console.log("deu merda");
// }

const age = 23;
age >= 18 && age < 50
  ? console.log("i like drinking wine")
  : console.log("i like drinking water");

const bill = 430;
bill <= 300 && bill > 50
  ? console.log(`the tip is ${(bill / 100) * 15}`)
  : console.log(`the tip is ${(bill / 100) * 20}`);

const bill2 = 275;
bill2 <= 300 && bill2 > 50
  ? console.log(`the tip is ${(bill2 / 100) * 15}`)
  : console.log(`the tip is ${(bill2 / 100) * 20}`);

const bill3 = 40;
bill3 <= 300 && bill3 > 50
  ? console.log(`the tip is ${(bill3 / 100) * 15}`)
  : console.log(`the tip is ${(bill3 / 100) * 20}`);
