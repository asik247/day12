// function start
function myFunk(){
    console.log('first funk');
}
myFunk()
// return funk
function firendsName(name){
    return `Hi ${name}`
}
console.log(firendsName("Asik"));
// parameter and argunment
function para(a,b){
    return a*b;
}
let multiplication = para(10,20);
console.log(multiplication);
// Arrow function
const firstArrow = ((a,b,c)=>{
    return (a+b)/c;
})
let arrowAns = firstArrow(50,100,2);
console.log(arrowAns);
// Real life example:ATM Machine
const atmFuk = ((ballence,amount)=>{
    if(amount<=ballence){
        return ballence - amount;
    }else{
        return 'Insufficient balance'
    }
})
let atmTotal = atmFuk(100000,50000);
console.log(atmTotal);