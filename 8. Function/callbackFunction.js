// CALLBACK FUNCTION

const calculate=(a,b,opeartion)=>{
    return opeartion(a,b);
}


//method1 of the callback function
 const addition= calculate(2,3,function(num1,num2){
    return num1+num2;
 });

 console.log(addition);

 //method2 of the callback function

const subtraction=(a,b)=>  a-b;

const subResult=calculate(5,3,subtraction)

console.log(subResult);

//method 3 of callback function
function multiply(a,b){
    return a*b
}

const mulResult=calculate(3,2,multiply)
console.log(mulResult);
