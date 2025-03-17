const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}




const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  const SELECT_WRAPPER = document.querySelector(`.displayedsquare-wrapper`);
  const DIV = document.createElement(`div`);
  DIV.className ="displayedsquare";
  DIV.classList.add(`${e.target.classList[1]}`);
  SELECT_WRAPPER.appendChild(DIV);

  const SELECT_UL = document.querySelector(`ul`);
  const LI = document.createElement(`li`);
  LI.innerHTML = `[${getElapsedTime()}] Create a new ${e.target.classList[1]} square`;
  SELECT_UL.appendChild(LI);


  const displayedSquare = document.querySelectorAll(".displayedsquare");
  for (let displayedSquares of displayedSquare) {
    displayedSquares.addEventListener('click', alertColorSquare)
  }
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
  
}


const backgroundColorChangeSpacebar = (event) => {
  if(event.key === ' '){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;

    const SELECT_UL = document.querySelector(`ul`);
    const LI = document.createElement(`li`);
    LI.innerHTML = `[${getElapsedTime()}] Spacebar have been pressed`;
    SELECT_UL.appendChild(LI);
  }
}

document.addEventListener(`keypress`,backgroundColorChangeSpacebar);

const RemoveLogWithI = (event) => {
  if(event.key === `i`){
    let ul = document.querySelector(`ul`);
    // while( ul.length !== "" ){
    //   ul.removeChild(ul.firstChild);
    // }
    while(ul.firstChild){
      ul.removeChild(ul.firstChild);
    }
  }
}
document.addEventListener(`keypress`,RemoveLogWithI);


let sectionSquare = document.querySelector(`section.displayedsquare-wrapper`);
const RemoveSquareWithS = (event) => {
  if(event.key === `s`){
    // let sectionSquare = document.querySelector(`section.displayedsquare-wrapper`);
    while(sectionSquare.firstChild){
      sectionSquare.removeChild(sectionSquare.firstChild);
    }
  }
}
document.addEventListener(`keypress`,RemoveSquareWithS);


const alertColorSquare = (event) => {
  alert(`${event.target.classList[1]}`)
}


