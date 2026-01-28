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
function great(name = "Guest"){
    return  `Hello  ${name}`
}
console.log(great());
console.log(great("Asik"));
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
// Student Result
function getResult(mark){
    if(mark >=80){
        return "You Got A+"
    }else if(mark>=70){
        return "You Got A"
    }
    else if(mark>=60){
        return "You Got A-"
    }
    else if(mark>=50){
        return "You Got B"
    }else return "You Fail"
}
console.log(getResult(75));
// discount
function discount(price){
    if(price>=1000){
        return price-price*0.1;
    }else{
        return price
    }
}
console.log(discount(1200));