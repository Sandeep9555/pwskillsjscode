let obj={
    id:101,name:"alex",salery:1000000
};
console.log(obj);
let emp=new Object();
emp.id=100;
emp.name="sandeep";
console.log(emp);


//creating object by using function construct


function fun(i,n,s)
{
     this.id=i;
     this.name=n;
     this.salery=s;
}

const hold= new fun(102,"any",1200000);
console.log(hold);


//accesing kay value pair of  the object
console.log(emp.id);
console.log(hold.name);

console.log(fun['hold.salery']);
emp['salery']=15000;
console.log(emp);
