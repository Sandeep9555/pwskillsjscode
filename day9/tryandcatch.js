try{
    x=undefined;
    console.log(x[0]);

}
catch{
    console.log("error handling in catch");

}
finally{
    console.log("Finally block always get Executed");
}

console.log("end");