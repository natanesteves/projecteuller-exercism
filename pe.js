//Desafio2
// 'use strict'
// var limit =  4000000
// var fibo = [1,2];
// var sum = 0;
// var metadefibo = [];
// var sum2 = 0;
// var maisum = [];
// for(var num =0; num < limit; num++){
//    sum = fibo[num]+fibo[num+1]
//     fibo.push(sum)
//     var hj =fibo[num]
// if(hj%2===0 && hj < limit){
//     metadefibo.push(hj)
    
// }
    
// }
// const initialValue = 0;
// const sumWithInitial = metadefibo.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   );


// console.log(sumWithInitial)

//Desafio3

var nume =600851475143 ;
var div = 0;
var att =0;
while(nume !==0&&nume/div > 0){
div++;

if(nume % div ===0){
  console.log(div)
  att = nume / div
}

}