//Synchronous Function
// console.log("hello");
// console.log("Sukalyan");
// console.log("Adhikary");

//Asynchoronous Function
console.log("hello");

setTimeout(function(){
    console.log("Sukalyan");
},3000)


console.log("Adhikary");

//CALLBACK HELL 
//IT OCCURS WHEN MULTIPLE CALLBACK OCCURS THAT MEANS CALLBACKS ARE OCCUR WITHIN THE CALLBACK FUNCTION

function getCheese(callback){
    setTimeout(()=>{
        const cheese ='🧀🧀'
        console.log("Here is the cheese :",cheese);
        callback(cheese);

    },4000)
}



function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🫓";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}


getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        });
    });
});
