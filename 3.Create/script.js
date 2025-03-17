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
// SELECH2.appendChild(newSection)
// let newP = document.createElement("p");
// newP.innerHTML= form[0] ;
// newSection.appendChild(newP);

function isDark(randomColor) {

  const r = parseInt(randomColor.substring(0, 2), 16);
  const g = parseInt(randomColor.substring(2, 4), 16);
  const b = parseInt(randomColor.substring(4, 6), 16);

  const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
  return brightness < 128;
}

function setTextColorBasedOnBackground(newP,randomColor) {
  const isBackgroundDark = isDark(randomColor);
  
  // element.style.color = isBackgroundDark ? 'white' : 'black';
  if(isBackgroundDark === true){
    newP.style.color = `white`;
  }else{
    newP.style.color = `black`;
  }
}

function createP(i){
  SELECH2.appendChild(newSection)
  let newP = document.createElement('p');
  newP.className = `student`;
  newP.innerHTML= i ;
  let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
  newP.style.backgroundColor = `#${randomColor}`;
  setTextColorBasedOnBackground(newP,randomColor)
  newSection.appendChild(newP);
}

  

for(let i of form){
  createP(i);
}


// for(let i of form){
//   let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
//   i.style.backgroundcolor = "#" + randomColor;
// }

  
 