//HTML ELEMENT ACCESSING METHOD

//finding an element by the id 
// const box1=document.getElementById('box-1');
// console.log(box1);
// box1.style.backgroundColor='red'

// finding the element by the tag name
const divs=document.getElementsByTagName('div');
console.log(divs);

const paragraph=document.getElementsByTagName('p')
console.log(paragraph);

// finding element by the class name
//  const boxes=document.getElementsByClassName('box')
//  console.log(boxes);

 //finding element by the query selector
//  const random=document.querySelector('.container .random')
const random=document.querySelectorAll('.container .random')
console.log(random);


// MODIFYING THE HTML ELEMENT

const box1=document.getElementById('box-1');
// box1.innerHTML="Hello"
// box1.innerHTML="<h1>HEllo</h1>"
box1.innerHTML="<h1>HEllo</h1><p>hello guys</P>"
box1.style.backgroundColor='red';
//for changing immage source
// document.getElementById('myimage').src='landscape.jpg';

//adding class in html 
box1.classList.add('round-border');

//adding class to the all box classes
const boxes=document.getElementsByClassName('box')
for(i=0;i<boxes.length;i++)
{
boxes[i].classList.add('round-border');
}

//removing class
box1.classList.remove('round-border');


//CREATING AND THE APPENDING THE HTML

const newparagraph=document.createElement('p');
newparagraph.innerText='This is  the new text';
// const container=document.getElementById("container")
// container.appendChild(newparagraph);

const body=document.getElementById("body")
body.appendChild(newparagraph);






