let map= new  Map();

map.set('a',1);
map.set('b',2);
map.set('c',3);

console.log(map.get('a'));
map.set('a',87);

console.log(map.size);

map.delete('b');

console.log(map.size);
const myObject ={};

const a={}

const b={};

const mymap=new Map([[a,'a'],[b,'b']]);
// myObject[a]='a';
// myObject[b]='b';
console.log(mymap);


