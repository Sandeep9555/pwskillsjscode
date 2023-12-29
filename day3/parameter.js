// function without parameter

function displayMassage(){
    console.log("function withouut parameter");
}

// function without Parameter

function display1(){
    console.log("function with one parameter");
}

//function with more than one paramenter

function display2(){
    console.log("Function with more than one paramente");
}

displayMassage();
display1()
display2()

// function with default parameter can be override with the calling  time of the function

function dis(displ="hello hi there"){
    console.log(displ);
    }

dis("hello hi there i am studying javascript");

dis();