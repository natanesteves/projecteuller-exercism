"use strict";

// let hasDriversLincense = false;
// const passTest = true;
// if (passTest) hasDriversLincense = true;
// if (hasDriversLincense) console.log("i can drive");

// function looger() {
//   return console.log("my name is natan");
// }

// looger();

// function fruitProcessor(appelas, oranges) {
//   console.log(appelas, oranges);
//   const juice = `juice with ${appelas}apples and ${oranges} oranges`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
// console.log(fruitProcessor(2, 3));

//function declaration
// function calcAge(birthyear) {
//   return 2037 - birthyear;
// }

// const ahe1 = calcAge(1991);

// //function expression

// const calcAge2 = function (birthyeah) {
//   return 2037 - birthyeah;
// };
// const age2 = calcAge2(1991);

// console.log(ahe1, age2);

// const calcAge3 = (birthyeah) => {
//   return 2037 - birthyeah;
// };
// const age4 = calcAge3(1991);

// console.log(ahe1, age2, age4);

// const yearsToRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   return `${firstName} vai sair em  ${retirement} anus kkk`;
// };
// console.log(yearsToRetirement(1980, "luiz"));
// console.log(yearsToRetirement(1995, "ian"));

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(appelas, oranges) {
//   const applePieces = cutPieces(appelas);
//   const orangePieces = cutPieces(oranges);
//   console.log(applePieces, orangePieces);
//   console.log(appelas, oranges);
//   const juice = `juice with ${appelas}apples and ${oranges} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

///desafio1

//borther eu acertei mas eu tenho merda na cabeça pq era muito facil e eu fiz da maneira mais complicada (estou chegand a conclusão q na verdade meu problema esta na parte de logica olha a correção pra vc ver)
// const avgscore = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const whoTheWinner = (
//   koalaAvg1,
//   koalaAvg2,
//   koalaAvg3,
//   dolphinsAvg1,
//   dolphinsAvg2,
//   dolphinsAvg3
// ) => {
//   const koalaAvg = avgscore(koalaAvg1, koalaAvg2, koalaAvg3);
//   const dolphinsAvg = avgscore(dolphinsAvg1, dolphinsAvg2, dolphinsAvg3);
//   console.log(koalaAvg, dolphinsAvg);

//   if (koalaAvg >= dolphinsAvg * 2) {
//     console.log(`koala wins with ${koalaAvg} points`);
//   } else if (dolphinsAvg >= koalaAvg * 2) {
//     console.log(`dolphins wins with ${dolphinsAvg} points`);
//   } else {
//     console.log("ninguem ganhou");
//   }
// };
// whoTheWinner(44, 23, 71, 65, 54, 49);

// const frined1 = "michael reeves";

// const frined2 = "riiiiiiiii";

// const frined3 = "natan";

// const friends = ["ta procurando", "", " o q n tem nada aqui"];
// console.log(friends);

// const y = new Array(1909, 1990, 2000, 2022);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);

// const firstname = "jonas";
// const jonas = [firstname, "joans", "um sobrenome ai ", 2037 - 1990, friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge2 = function (birthyeah) {
//   return 2037 - birthyeah;
// };

// const years = new Array(1909, 1990, 2000, 2022);
// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3);

// const friends = ["michael", "reeves", "riiiii"];
// friends.push("will to live");
// console.log(friends);

// friends.unshift("python");
// console.log(friends);

// const tuamae = friends.pop();
// console.log(tuamae);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("reeves"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));
// if (friends.includes("reeves")) {
//   console.log("You have a friend call reeves");
// }

//Desafio2
// const bills = [125, 555, 44];
// const tips = [];

// const calcTip = (bill, bill2, bill3) => {
//   bill <= 300 && bill > 50
//     ? tips.push(`the tip is ${(bill / 100) * 15}`)
//     : tips.push(`the tip is ${(bill / 100) * 20}`);

//   bill2 <= 300 && bill2 > 50
//     ? tips.push(`the tip is ${(bill2 / 100) * 15}`)
//     : tips.push(`the tip is ${(bill2 / 100) * 20}`);

//   bill3 <= 300 && bill3 > 50
//     ? tips.push(`the tip is ${(bill3 / 100) * 15}`)
//     : tips.push(`the tip is ${(bill3 / 100) * 20}`);
// };

// calcTip(bills[0], bills[1], bills[2]);

// console.log(tips);

// const jonas = {
//   firstName: "jonas",
//   lastName: "o peixe",
//   age: 4444 - 1990,
//   job: "alguma coisa ai",
//   amigos: ["ninguem ele  ", "trabalha", "com programação "],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// //essa foi eu achei irada

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("o q vc quer saber sobre ele????");
// jonas[interestedIn]
//   ? console.log(jonas[interestedIn])
//   : console.log("não tem essa opção");

// jonas.location = "portugal";
// jonas["yt"] = "joninhasgameplay";
// console.log(jonas);
// jonas.amigos.best = "luciano";
// console.log(jonas);

// console.log(
//   `${jonas.firstName} tem ${jonas.amigos.length} e o seu melhor amigo é ${jonas.amigos.best}`
// );

// const jonas = {
//   firstName: "jonas",
//   lastName: "o peixe",
//   birthYeah: 1991,
//   job: "alguma coisa ai",
//   amigos: ["ninguem ele  ", "trabalha", "com programação "],
//   hasDriverLicanse: false,
//   calAge: function () {
//     console.log(this);
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   temcarteira: function () {
//     return `${jonas.firstName} ´é um professor de ${jonas.age} e ele ${
//       this.hasDriverLicanse
//         ? "tem uma carteira de motorista"
//         : "nãp tem uma carteira de motorista"
//     }`;
//   },
// };
// console.log(jonas.calAge());
// console.log(jonas.age);

// console.log(jonas.temcarteira());

//DESAFIO 3

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   height: 1.69,
//   weigth: 78,
//   calcBmi: function () {
//     this.bmi = this.weigth / this.height ** 2;
//     return this.bmi;
//   },
// };

// const jhon = {
//   firstName: "Jhon",
//   lastName: "Smith",
//   height: 1.95,
//   weigth: 92,
//   calcBmi: function () {
//     this.bmi = this.weigth / this.height ** 2;
//     return this.bmi;
//   },
// };
// const markin = mark.calcBmi();
// const johnin = jhon.calcBmi();
// console.log(markin);
// console.log(johnin);

// const quemTemoBmiMaisAlto = (bmi1, bmi2) => {
//   if (bmi1 > bmi2) {
//     console.log(
//       `${mark.firstName}${mark.lastName} tem o bmi mais alto com ${markin} que e mais alto q o do John q tem ${johnin} de bmi`
//     );
//   } else {
//     console.log(
//       `${jhon.firstName}${jhon.lastName} tem o bmi mais alto com ${johnin} que e mais alto q o do Mark q tem ${markin} de bmi`
//     );
//   }
// };
// quemTemoBmiMaisAlto(markin, johnin);

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`tu ta na repetição ${rep} 🏋️‍♂️🏋️‍♂️ `);
// }

// const friends = ["ta procurando", "", " o q n tem nada aqui", "lucas", "joao"];
// const firstname = "jonas";
// const jonas = [firstname, "joans", "um sobrenome ai ", 2037 - 1990, friends];

// console.log("ONLYSTRINGS");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i]);
// }

// console.log("ONLYBREAKNUMBERS");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i]);
// }

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//   console.log(`começando o ${exercise}° exercise`);
//   for (let rep = 0; rep <= 12; rep++) {
//     console.log(`fazendo a rep ${rep} do exercicio ${exercise}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`fazendo a rep ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice != 6) {
//   console.log(`rolaste um ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (bill) {
  // peguei a func dele pq a dele esta melhor estruturada q a minha
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const calcTotal = function (billzin, tipin) {
  let totalzin = billzin + tipin;
  total.push(totalzin);
};

const calcAvg = function () {
  let totalzin = 0;
  for (let i = 0; i < total.length; i++) {
    totalzin = totalzin + Number(total[i]);
  }
  return totalzin / (total.length - 1);
};

for (let i = 0; i < 10; i++) {
  calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  calcTotal(Number(bills[i]), Number(tips[i]));
}

console.log(bills);
console.log(tips);
console.log(total);
console.log(calcAvg());
