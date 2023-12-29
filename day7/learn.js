const powertwo=(n)=>{
    return n** 2;

}

function powercube(powertwo,n){
    return powertwo(n)*n;

}
//console.log(powercube(powertwo,3));

function sayhello(){
    return ()=>{
        console.log("hello hitesh");
    }
}

// let guessvalue=sayhello();
// console.log(guessvalue());

const  higherOreder=n=>{
    const onefun=m=>{
        const twofun=p=>{
            return m+n+p;
        }
        return twofun
    }
    return onefun
}

// let two =higherOreder(2)(3)(4);
// console.log(two);


const myNums=[2,3,4,5];

const sumarray=arr=>{
    let total=0;
    arr.forEach(function(element){
        total+=element;
    });
    return total;

}
//console.log(sumarray(myNums));
function hello(){
    console.log("hello sandeep");

}
//s//etInterval(hello,1000);
setTimeout(hello,1000);
