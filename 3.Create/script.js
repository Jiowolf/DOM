let form = ["Kamal","Jordan", "Liana","Valentin","Antoine","Manu","Stephane","Hungo","Inna","Pierre","Arseniia" ];


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  shuffle(form);


// function addElement() {
//   let newSection = document.createElement("section");
//   let newP = document.createElement("p");
//   let newContent="";
//   newContent= newContent.innerHTML("test");
//   article.appendChild(newSection);
//   newSection.appendChild(newP);
//   newP.appendChild(newContent);

// //   let currentDiv = document.getElementById("h2");
  
// }

// document.body.onload = addElement;

const SELECH2 = document.querySelector("article");
console.log(SELECH2);
let newSection = document.createElement("section");
// newSection.classList.add('jeSuisLMeilleurZebi')
SELECH2.appendChild(newSection)
let newP = document.createElement("p");
// newP.innerHTML= form[0] ;
// newSection.appendChild(newP);

function createP(){
  
}

  

for(let i of form){
  newP.innerHTML= i ;
newSection.appendChild(newP);
}


// for(let element of form){
//   let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
//   element.style.color = "#" + randomColor;
// }

  
 