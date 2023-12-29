let emp={
    id:101,
    name:'sanket',
    age:25
};

let keys=Object.keys(emp);
console.log(keys);
let values=Object.values(emp);
console.log(values);

let entries= Object.entries(emp);
console.log(entries);

//if we dont want to change any object value qnd freeaze changes 
//Object.freeze(emp);


// want to update values but dddnot want to fill new entries
Object.seal(emp);
//changing property of the emp;
emp.id=100;
console.log(emp);


//if we want to new object from the old objects

let o= Object.assign({},emp);
console.log(o);