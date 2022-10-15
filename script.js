const button = document.querySelector("button");
const nume = document.querySelector(".user");
const parola = document.querySelector(".pass");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const error = document.querySelector(".eroare");
let j;
let flag=0;
button.addEventListener("click",()=>{
    if(nume.value===""){
     error.style.visibility="visible";
     error.innerHTML = "Invalid user name";
     flag=1;
     setTimeout(()=>{
        error.style.visibility="hidden";
     },1000)   
}
if(parola.value.length<8){
   error.style.visibility="visible";
   error.innerHTML = "Password needs to be at least 8 characters long";
   flag=1;
   setTimeout(()=>{
      error.style.visibility="hidden";
   },1000)   
}
if(!email.value.includes("@")){
   error.style.visibility="visible";
   error.innerHTML = "Invalid email address";
   flag=1;
   setTimeout(()=>{
      error.style.visibility="hidden";
   },1000)
}

if(typeof(+phone.value) !== NaN && phone.value.lenght >= 10 ){
   error.style.visibility="visible";
   error.innerHTML = "Invalid number";
   flag=1;
   setTimeout(()=>{
      error.style.visibility="hidden";
   },1000)
}
if(flag===0 ){
   error.style.visibility="visible";
   error.innerHTML = "Form completed succesfully";
   setTimeout(()=>{
      error.style.visibility="hidden";
   },1000)
}
})


// phone.value.split("").forEach(character => {
//    if(!(+character >= 0 && +character <= 9)){
//       flag = 1;
//    }
// });

