console.log(document.title);

// let titleElement = document.querySelector('title');
// titleElement.innerHTML = "Modifying the DOM";

document.title = "Modifying the DOM";

console.log(document.title);

// document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "#" + (Math.floor(Math.random()*0xFFFFFF)).toString(16);

for (let element of document.body.children){
    console.log(element)
}