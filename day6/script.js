const decontent=document.getElementById("decrement-button");
const incontent=document.getElementById("increment-button");

const discontent=document.getElementById("content");

decontent.addEventListener("click",()=>{
        const content=Number(discontent.innerText);
        if(content < 0){
            alert("Negative Value");
        }
        else{
            discontent.innerText=content-1;
        }
});

incontent.addEventListener("click",()=>{
    const content=Number(discontent.innerText);
    if(content >=11){
        alert("Higher Value");
    }
    else{
        discontent.innerText=content+1;
    }
});

const recontent=document.getElementById("reset-button");

recontent.addEventListener("click",()=>{
    discontent.innerText=0;
});

