// NORMAL FUNCTION IN JAVASCRIPT

const a = 12;
const b = 4;
const result = sumOfTwoNumbers(a, b);
console.log("returned result", result);
//
// do something else
//
const c = 2;
const d = 24;
sumOfTwoNumbers(c, d);
//
// do something else
//

function sumOfTwoNumbers(a, b) {
    const sum = a + b;
    console.log("result is", sum);
    return sum;
}

const e = 5;
const f = 14;
sumOfTwoNumbers(e, f);


//FUNCTION EXPRESSION/ANYNOMOUS FUNCTION
// IN ANNYNOMOUS FUNCTION WE CANNOT CALL A FUNCTION BEFORE DEFINE IT THAT MEANS IT CANNOT SUPPORT HOSTING
//IT CANNOT HAVE ANY NAME
// IT IS USED WHEN WE ASSIGN FUNCTION IN THE THE VARIABLE
const square=function(num){
    return num*num
}

console.log(square);
console.log(square(3));

//EXAMPLE
let sum=function(a,b){
    return a+b;
}
console.log('The Sum of the two number :',sum(2,3));

//FAT ARROW FUNCTION 
//IT IS A ADVANCED VERSION OF THE FUNCTION EXPRESSION SAME AS FUNCTION EXPRESSION
const sub= (e,f) =>{
    return e-f;
}
console.log('the sub is :',sub(5,2));

//one statement arrow function
const multi =(num) => num*num;
console.log('the oneliner arrow function: ',multi(3));