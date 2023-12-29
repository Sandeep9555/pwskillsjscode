const heros =["Naagraj","doga","Dhruva","maniraj"]

const heroswithraj=heros.filter((h)=>{
   return h.endsWith("raj");
})
console.log(heroswithraj);

const cartbill=[20,30,40];
const sumcartBill=cartbill.reduce( (prev,curr) => prev+curr,0)
console.log(sumcartBill);

const gamescore= [200,300,310,250,100]

const gameScoreCheck=gamescore.every((v)=>
         typeof v ==='number'
)
console.log("check :", gameScoreCheck)