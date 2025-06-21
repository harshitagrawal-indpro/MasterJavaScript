// the spread operator is used to convert an iterable to individualse elements it is used to pack and inpack elements 
// from an iterable or to an iterable 

// eg 

let arr  = [1,2,34,5,56];
let arr2 = [...arr, 6, 7, 8]; // spread operator is used to convert an iterable to individualse elements
console.log(arr2); // [1, 2, 34, 5, 56, 6, 7, 8]

// Spread operator in functions used in two ways 1 ) in parameters amd 2) in arguments 

// in parameters is called rest parameters

function sum(a,b,...rest){
    let sum = a + b;
    for (i of rest){
        sum +=i;
    }
    return sum ;
}
console.log(sum(1,2,3,4,5));