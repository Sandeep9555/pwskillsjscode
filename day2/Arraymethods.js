let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.push(7);
console.log(arr);

arr.pop();
console.log(arr);

//to remove first element from the array
arr.shift();

console.log(arr);
//tyo add first element in the array 
arr.unshift(9)
console.log(arr);

let a1=[1,2,3,4,5];
let a2=[3,4,5];
let a3=a1.concat(a2);
console.log(a1,a2,a3);

//to club alla elements of the array and make string

let s=a3.join("");
console.log(s);
a3.reverse();
console.log(a3.indexOf(4));

let arr1= [1,2,3,4,5,6]
console.log(arr1.slice(2,4));

arr1.splice(2,0,11);
console.log(arr1);