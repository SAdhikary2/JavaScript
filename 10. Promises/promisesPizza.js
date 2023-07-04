function getcheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            const cheese="🧀";
            resolve(cheese);
        },2000);
    });
}


function makedough(cheese){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            const dough=cheese + "🍩";
            resolve(dough)
        },2000);
    });
};

function bakepizza(dough){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            const pizza=dough+"🍕";
            resolve(pizza);
        },2000);
    });
}


// caling the promise function

// getcheese()
//          .then((cheese)=>{
//             console.log('here is the cheeese :',cheese);
//             return makedough(cheese)
//          })
//          .then((dough)=>{
//             console.log('here is the dough :',dough);
//             return bakepizza(dough)

//          })
//          .then((pizza)=>{
//             console.log('Here is the pizza :',pizza);
//          })
//          .catch((data)=>{
//             console.log("error occured ",data);
//          })
//          .finally(()=>{
//             console.log("Process Ended");
//          });


// calling promise through asynchronous function

 async function orderpizza(){
try{
const cheese= await getcheese();
console.log('Here is the cheese ',cheese);

const dough=await makedough(cheese);
console.log('Here is the dough:',dough);

const pizza=await bakepizza(dough);
console.log('Here is the pizza ',pizza);
} catch (err){
console.log('error occured ',err);
}
console.log("process ended !!!!");
 }

orderpizza()