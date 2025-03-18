const FIRSTNAME_SELECT = document.getElementById("firstname");
const SPAN_SELECT = document.getElementById("display-firstname");

FIRSTNAME_SELECT.addEventListener("keyup",firstNameInput);

function firstNameInput(){
    let firstname = FIRSTNAME_SELECT.value;
    SPAN_SELECT.innerHTML = firstname;
};


const AGE_SELECT = document.getElementById("age");
const HARD_TRUTH_SELECT = document.getElementById("a-hard-truth");

AGE_SELECT.addEventListener("keyup",areYouAdult);

function areYouAdult(){
    let age = Number(AGE_SELECT.value);
    

    if(age >= 18){
        HARD_TRUTH_SELECT.setAttribute(`style`,`visibility: visible;`)
    }else{
        HARD_TRUTH_SELECT.setAttribute(`style`,`visibility: hidden;`)
    };
};



const PWD_SELECT = document.getElementById("pwd");
const PWD_CONFIRM_SELECT = document.getElementById("pwd-confirm");

PWD_SELECT.addEventListener("keyup",pwdConfirmer);
PWD_CONFIRM_SELECT.addEventListener("keyup",pwdConfirmer);


function pwdConfirmer(){
    let firstPwd = PWD_SELECT.value;
    let secondPwd = PWD_CONFIRM_SELECT.value;

    console.log(firstPwd , secondPwd)
    if(firstPwd.length < 6 ){
        PWD_SELECT.setAttribute(`style`,` border: 2px solid red;`);
    }else{
        if(firstPwd === secondPwd){
            PWD_SELECT.setAttribute(`style`,` border: 2px solid green;`);
        }else{
            PWD_SELECT.setAttribute(`style`,` border: 2px solid red;`);
        }
    };

};


const DARK_SELECT = document.getElementById("toggle-darkmode");
const DARK_VALUE = DARK_SELECT.value

DARK_SELECT.addEventListener(`change`,darkmode)


function darkmode(e){
   let darkLight = e.target.value;

   const BODY = document.querySelector("body");
    const HEADER = document.querySelector("header");
    const FOOTER = document.querySelector("footer");
   
   if(darkLight === "dark"){
        BODY.setAttribute(`style`,`background-color: black; color: white;`);
        HEADER.setAttribute(`style`,`background-color: white; color: black;`);
        FOOTER.setAttribute(`style`,`background-color: white; color: black;`);
   }else{
        BODY.setAttribute(`style`,`background-color: white; color: black;`);
        HEADER.setAttribute(`style`,`background-color: black; color: white;`);
        FOOTER.setAttribute(`style`,`background-color: black; color: white;`);
   }
}
