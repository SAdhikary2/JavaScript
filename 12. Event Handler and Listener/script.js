//EVENT HANDLER
function myfunction(){
    console.log('i was clicked');
};

const mouseOver=()=>{
    console.log("mouse overed");
};

const mouseMove=()=>{
    console.log('mouse move');
};

function KeypressEvent(){
    console.log("Key was pressed ");
}

function KeyupEvent(){
    console.log("key was uped");

}

function KeydownEvent(){
    console.log("key was downed");
}

//EVENT LISTENER
//by using event listener we can do all work in javascript
// we can add here multiple same type of event
// we can add here event object and get all the information about the event


// const box1=document.getElementById('box-1');
// box1.addEventListener('click',() => {
//     console.log('click by the event');
// });

// adding another same click event
// box1.addEventListener('click',() => {
//     console.log('click by the event 2');
// });

//adding the event object
// box1.addEventListener('click',(e) => {
//     console.log('event object',e);
// });

// box1.addEventListener('mousemove',(e) => {
//     console.log('event object',e.clientX,e.clientY);
// });

 const nameInput=document.getElementById('nameinput');
 nameInput.addEventListener("keypress",(e)=>{
    console.log('key',e.key);
 })

 nameInput.addEventListener("focus",(e)=>{
    console.log('focus',e);
 })

 //BUBLING AND CAPTURING

 //BUBLING
//inner element first and then the outer

//  const box1=document.getElementById('box-1');
// box1.addEventListener('click',() => {
//     console.log('CLICKED ON THE BOX');
// });

// const container=document.getElementById('container');
// box1.addEventListener('click',() => {
//     console.log('CLICKED ON THE CONTAINER');
// });

//CAPTURE
//outer element first and then the inner
const box1=document.getElementById('box-1');
box1.addEventListener('click',() => {
    console.log('CLICKED ON THE BOX');
});

const container=document.getElementById('container');
box1.addEventListener('click',() => {
    console.log('CLICKED ON THE CONTAINER');
},true);


