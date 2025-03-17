let important = document.querySelectorAll('.important');

for(let element of important){
    element.setAttribute('title','This is an important item');
}

let img = document.querySelectorAll('img');


for (let element of img){
    if(element.className === ""){
        element.setAttribute("display",'none')
    }
    let test = element.getAttribute("display")
    console.log(test)
}




let pa = document.querySelectorAll('p');


for(let element of pa){
    console.log(element.textContent);

    if(element.className !== ""){
        console.log(element.className)
    }else{
        let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    element.style.color = "#" + randomColor;
    }
}



