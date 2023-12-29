
//array destructuring
let ar1=[10,20,30,40];

let [a,b]=ar1;
 console.log(a);
 console.log(b);

let [a1,,b1,...rest]=ar1;
 console.log(a1,b1,rest);

 //object destructuring

 let obj={x:1,y:2};

 let {x,y}=obj;
 console.log(x);
 console.log(y);
 


