let pattern='sandeep'

let reg1= new RegExp(pattern)

let flag='gi'
let reg2= new RegExp(pattern,flag)

let reg3=/sandeep/gi

const stringtocheck = "sandeep is inteelignent stuedent sandeep is adfdgjf sandeep"

const result=reg3.test(stringtocheck);
console.log(result);

const anotherResult=stringtocheck.match(reg3)
console.log(anotherResult);
const oneMoreResult= stringtocheck.replace(reg3,"arti")
console.log(oneMoreResult);

const webUrl="https://pwskills.com/hitesh%20choudhry"

const usebUrl=webUrl.replace(/%\d\d/,'_')
console.log(usebUrl);