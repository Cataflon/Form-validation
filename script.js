const button = document.querySelector("button");
const nume = document.querySelector(".user");
const parola = document.querySelector(".pass");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const error = document.querySelector(".eroare");

button.addEventListener("click",()=>{
    if(nume.value===""){
     error.style.visibility="visible";
     error.innerHTML = "Invalid user name";
     setTimeout(()=>{
        error.style.visibility="hidden";
     },1000)
    }
})

//Password - lungime de 8 caractere minime
//Email - sa contina @
//Phone number - lungime de numar valid (10 numere)
//CUM SA LE FAC? google manipulare string-uri js.