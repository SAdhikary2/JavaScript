let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" },
];

console.log(students);

//FILTER METHODS
const newArray=students.filter((curvalue)=>{
if (curvalue.id%2==0) return true;
else return false;
})