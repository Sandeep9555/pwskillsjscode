let  myheores=['thor','spiderman'];
let dchero=['batman','flash','superman'];


let heropower={
    thor:'hammer',
    spiderman:'sling',

    getspidermanpower:function(){
         
        console.log(`spidy power is ${this.spiderman}`);

    }


}

Object.prototype.hitesh=function(){
    console.log('Hitesh is present in all objects ')
}

console.log(myheores.hitesh());
console.log(heropower.hitesh());

Array.prototype.heyhitesh=function(){
    console.log('Hitesh says hi');
}

console.log(myheores.heyhitesh());
// console.log(heropower.heyhitesh());


const user={
    name:'top name',
    email:'top@email.com',
}

const Teacher={
    makevideos:true,



}
const teachingSupoort={
    isAvaliable:false

}

const  taassistant={
       makeassignment:'js assignment',
       fulltime:true,
      __proto__:teachingSupoort

}
Object.setPrototypeOf(teachingSupoort,Teacher)
console.log(taassistant.isAvaliable);

String.prototype.truelength=function(){
    console.log(`True length is ${this.trim().length}`);
}

'hitesh.     '.truelength()
'anurag.     '.truelength()




