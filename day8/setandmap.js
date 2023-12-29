const arr=[1,2,3,4,5,6,7,8,9];

const set =new Set(arr);
console.log(arr);
console.log(set);

//add() function
console.log(set.size);
set.add(10);
console.log(set);


//has function


console.log(set.has(5));


//delete function
console.log(set.delete(10));
console.log(set);

//clear() function:it delete all the values

//console.log(set.clear());



//set with array to find unique elelement
const art=[1,1,2,2,3,3,4,4,4,5,5,5,5];


const mySet=new Set(art);

console.log([...mySet]);



///basic set operation

//intersection

const intersection=new Set([...mySet].filter((x)=>set.has(x)));

console.log(intersection);

const deference=new Set([...mySet].filter((x)=>!set.has(x)));

console.log(deference);

