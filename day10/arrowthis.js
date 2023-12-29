// let obj={
//     x:10,
//     fun(){
//         console.log(this.x);
//     }
// }

// obj.fun();



//by using arrow function

// let obj={
//     x:10,
//     fun:()=>{
//         console.log(this.x);
//     }
// }
// obj.fun();

let obj={
    x:10,
    fun(){
        y={
        gun:()=>{
            console.log(this.x);
        }
     }
       y.gun();
    }
}
obj.fun();
