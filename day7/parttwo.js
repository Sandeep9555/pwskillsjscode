let arr=[2,3,4];

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);

})

arr.forEach((element,index,arr)=>{
    console.log("a",index,element,arr);
});

const heroes=["naagra","doga","dhruva","maniraj"]

heroes.forEach((h)=>{
    console.log(h.toUpperCase())
});

arr.map(function(element,index,arr) {
    console.log(element,index,arr);
});
heroes.map((h)=>console.log(h.toUpperCase()));