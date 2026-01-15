// Find the second largest number in an array
let arrElm = [1, 2, 3, 4, 5];
let largest = arrElm[0];
let secondLargest = arrElm[0];

for (let items of arrElm) {
    if (items > largest) {
        secondLargest = largest; 
        largest = items;        
    } else if (items > secondLargest && items !== largest) {
        secondLargest = items;   
    }
}
console.log(largest);
console.log(secondLargest); 
