//-----> Find the sum of elements in an array.
// let arrElm = [1, 2, 3, 4, 5];
// let sum = 0;

// for(let values of arrElm){
//     sum += values;
// }
// console.log(sum);


// Get the average of elements in an array.
// let arrElm = [1, 2, 3, 4, 5];
// let sum = 0
// let avg = 0;
// for(let i = 0; i < arrElm.length; i++){
//     sum += arrElm[i];
//     avg = sum / arrElm.length; 
// }
// console.log(avg);

// or
// var arrElm = [1, 2, 3, 4, 5];
// var sum = 0;
// for(var i = 0; i < arrElm.length; i++){
//     sum += arrElm[i]
//     var x = sum / arrElm.length
// }
// console.log(x);

// or
// let arrElm = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arrElm.length; i++){
//     sum += arrElm[i]
// }
// console.log(sum / arrElm.length)

// or
// let arrElm = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arrElm.length; i++){
//     sum += arrElm[i]
// }
// let average = sum / arrElm.length
// console.log(average)



//-----> Subtract the smallest number from the largest number.
// let subtractArr = [1, 2, 3, 4, 5];
// let largestNumber = subtractArr[0];
// let smallestNumber = subtractArr[0];
// for(let i = 0; i < subtractArr.length; i++){
    
//     if(subtractArr[i] > largestNumber){
//         largestNumber = subtractArr[i]
//     }
//     if(subtractArr[i] < smallestNumber){
//         smallestNumber = subtractArr[i]
//     }
// }
// console.log(largestNumber - smallestNumber);


// Find the largest number in an array.
let arrElm = [1, 2, 55, 66, 886, 56454, 77777];
let currentMax = arrElm[0];

for(let i = 0; i < arrElm.length; i++){
    if(arrElm[i] > currentMax){
        currentMax = arrElm[i];
    }
}
console.log(currentMax);





