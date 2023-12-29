const square=(x)=>x*x;

const sumtwonumbers= (x,y)=>x+y;

const sum=(x,y)=>{
    console.log('adding ${x}  and ${y}');
    return x+y;
}

const sumandDifference=(x,y)=>({sum:x+y, difference: x-y});

 square(5);
 sumtwonumbers(1,2);
 sum(1,2);
sumandDifference(5,3);
