

function issuperset(set,subset){
    for(const el of subset){
        if(!set.has(el)){
            return false;
        }
    }
    return true;
}



function union(setA,setB){
    const uniion=new Set(setA);
    for(const el in setB){
        uniion.add(el);

    }
    return uniion;
}

function intersection(setA,setB){
    const inttersection=new Set();
    for(const el in setB ){
       if(setA.has(el)){
        inttersection.add(el);
       }
    }
    return inttersection;
}
const setA=new Set([1,2,3,4]);
const setB=new Set([2,3]);

const setC=new Set([3,4,5,6]);

console.log(issuperset(setA,setB));
console.log(union(setA,setB));
console.log(intersection(setA,setB));