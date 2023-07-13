let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" },
];

console.log(students);

//FILTER METHODS
//FILTER CANNOT CHANGE THE ARRAY
const newArray=students.filter((curvalue)=>{
if (curvalue.id%2==0) return true;
else return false;
})

console.log("The new array is here.....");
console.log(newArray);

//USING ARRAY NORMAL METHOD
const TestArray=[];
for(let i=0;i<students.length;i++)
{
    if(students[i].id%2==0)
    {
        TestArray.push(students[i]);
    }
}
console.log(TestArray);

// MAP IN THE JAVASCRIPT
const MappedArray=students.map((currentValue,index,array)=>{

    return currentValue.name;
});

console.log(MappedArray);

//MAP ANOTHER EXAMPLE
// const number=[4,9,16,25];
// const newArr=number.map(Math.sqrt);
// console.log(newArr);

// MAPPED ANOTHER EXAMPLE
// MAPPED CAN CHANGE THE ARRAY 
const numbers=[65,44,12,4];
const newArr=numbers.map((currentValue)=>{
    return currentValue*10;
})
console.log(newArr);


console.log('started...');
// const test=students
// .filter((curvalue)=>curvalue.sports==="Cricket")
// .map((curvalue)=>{
//     return `<li>${curvalue.name}</li>}`
// });
// console.log(test);

// const div=document.getElementById('container');
// div.innerHTML = `<ul>${test.join("")}</ul>`;
  

const Experiment = students
    .filter((curValue) => curValue.sports === "Cricket")
    .map((curValue, index, array) => {
        return `<li>${curValue.name}</li>`;
    });

console.log(Experiment);

const FetchedElement = document.getElementById("container");

FetchedElement.innerHTML = `<ul>${Experiment.join("")}</ul>`;




