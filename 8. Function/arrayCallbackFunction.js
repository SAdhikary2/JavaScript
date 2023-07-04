const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

const FirstNegative=(num)=>{
    return num <0;
};


// const result=a.find(FirstNegative);
 
// const result=a.findIndex(FirstNegative);
// console.log(result);

a.forEach((num,i) => {
    console.log("array num", num,i);
    
});