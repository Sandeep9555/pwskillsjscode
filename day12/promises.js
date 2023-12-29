function createPromises(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("timer done");
            reject(10);

        },3000);
    });
   
    
   
}
async function consume(){
    try{
        console.log("inside function");
    const response =await createPromises();
    const response1 =await createPromises();
    console.log('response is ',response);

    }
    catch{
        console.log("handeled");
    }
    

}

console.log('start');

consume();
console.log('ens'); 