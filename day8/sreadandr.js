const arr1=[1,2,3,4,5]

const arr2=[6,7,8,9]

const arr3=arr1.concat(arr2)
console.log(arr3);

//by using spread operator

console.log([...arr1,...arr2]);


//restv operator is used combined the value in array


function myfunction()
{    
    let args=Array.from(arguments);
    let finalresult=args.map(e=>e)
        console.log(finalresult);
    

}

function myfunctio1n(...args){
    console.log(typeof args)
    let finalresult=args.map(e =>e)
      console.log(finalresult);

}
myfunction(1,2,3,4);

myfunctio1n(1,2,3,4,5,6);

const name=['sadeep','arti'];

const name1=['preeti',...name,'neeti'];
console.log(name1);

function pwskills(...values){
    return values;
}

console.log(pwskills('sandeep','arti'));