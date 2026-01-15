//-----> Find the square root of a number.
// let getSquare_root = 16;
// let guessNumbers = 4;
// if(guessNumbers * guessNumbers === getSquare_root){
//     console.log('correct');
// }else{
//     console.log('wrong');
// }

//or 
// let getSquare_root = 25;
// let guessNumbers = [];

// for(let values = 1; values <= getSquare_root; values++){
//     if(values * values === getSquare_root){
//         guessNumbers = values;
//     }
// }
// console.log(guessNumbers);


//-----> Find factorial of a number.
// let getFactorialNum = 5;
// let factorial = 1;
// for(let values = 1; values <= getFactorialNum; values++){
//     factorial *= values;
// }
// console.log(factorial);


//-----> Find the sum of digits of a number.
// let nums = 1234;
// let toStr = nums.toString();
// let sum = 0;
// for(let i = 0; i < toStr.length; i++){
//     sum += Number(toStr[i]);
// }
// console.log(sum);


//------> Count how many numbers are divisible by 4 between 1 and 100.
// for(let i = 1; i <= 100; i++){
//     if(i % 4 == 0){
//         console.log(i);
//     }
// }


//------> Count digits of a given number using a loop.
// let digits = 89766;
// let converted = digits.toString()
// let count = 0;
// for(let i = 0; i < converted.length; i++){
//     count ++;
// }
// console.log(count);


//------> Find the first digit of a number.
let number = 6778678;
let str = number.toString();
let firstDigit;

for (let i = 0; i < str.length; i++) {
    firstDigit = str[0];
    break; 
}
console.log(Number.EPSILON(firstDigit);









