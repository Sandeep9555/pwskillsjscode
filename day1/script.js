let age=17;

if(age>=18){
    console.log("you are allowed");
    
}
else{
    console.log("You are not allowed");
}

let signal="red";

if(signal=="red"){
    console.log("Red=>Stop");
}
else if(signal=="Yellow"){
    console.log("Yellow=> Go Slow");
}

else{
    console.log("Green=>Go Fast");
}

let user="Admin";
switch(user){
    case "Admin":
        console.log("He is Admin");
    break;
    case "Student":
        console.log("He is Student");

   case "Mentor":
    console.log("He is Mentor");
    break;
   default:
    console.log("I am default");

}