try {
    console.log("Before starting the try..");
    console.log(age);
} catch (error) {

    console.log(error.name);
    console.log(error.message);
    
}

//creating own error/ error customization
try {
    const res=prompt("are you a robot");
    if(res==='y')
    {
        throw new error('Error is detected..')
    }
} catch (e) {
    
    console.log(e.name);
    console.log(e.message);
}
finally{
    console.log("it will always works finally..");
}