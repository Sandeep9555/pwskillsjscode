// annonimus function called by storing function at a variable 

let x=function(){
    console.log("hi");
}

x();

// immediately invoe function expression
//declearation snand calling at tthe same time
(function exec(){
    console.log("named");

})();

(function(x){
    console.log(x+x);
})
(5);




