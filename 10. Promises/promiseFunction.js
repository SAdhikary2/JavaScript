// PROMISSES IN JAVASCRIPT SYNCRONOUS

const ticket=new Promise(function(resolve,reject){
    const isboarded =true;
    if(isboarded){
        resolve('you are in the flight');
    }else{
        reject('Your flight has been cancelled')
    }
});

ticket.then((data)=>{
    console.log('wohoo',data);
}).catch((data)=>{
    console.log('oh no!!',data);
}).finally(()=>{
    console.log("I will be always be executed ");
});