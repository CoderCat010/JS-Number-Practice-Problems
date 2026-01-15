//-----> দুইটা সংখ্যা যোগ করো।
// console.log(1 + 2);


//-----> দুইটা সংখ্যা যোগ করো।
// console.log(1 - 1);


//-----> দুইটা সংখ্যা গুণ করো।
// console.log(3 * 3);


//-----> দুইটা সংখ্যা ভাগ করো।
// console.log(5 / 5);


//-----> সংখ্যা ১০-এর modulus বের করো।
// console.log(10 % 10);


//-----> Round a decimal number.
// let round = 3.45748473247847983832;
// console.log(parseInt(round));


//-----> Check if a number is positive or negative.
// let x = -8;
// if(x >= 0 ){
//     console.log('positive');
// }else{
//     console.log('negative');
// }


//-----> Reverse a number.
// let num = 12345;
// let y = num.toString().split('').reverse().join('')
// console.log(y);


//-----> Subtract the smallest number from the largest number.
let subtractArr = [1, 2, 3, 4, 5];
let largestNumber = subtractArr[0];
let smallestNumber = subtractArr[0];
for(let i = 0; i < subtractArr.length; i++){
    
    if(subtractArr[i] > largestNumber){
        largestNumber = subtractArr[i]
    }
    if(subtractArr[i] < smallestNumber){
        smallestNumber = subtractArr[i]
    }
}
console.log(largestNumber - smallestNumber);













 


