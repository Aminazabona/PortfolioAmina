const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

nameError.textContent="";
emailError.textContent="";
messageError.textContent="";
successMessage.textContent="";

let isValid=true;

if(name===""){
nameError.textContent="Veuillez entrer votre nom";
isValid=false;
}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email===""){
emailError.textContent="Veuillez entrer votre email";
isValid=false;
}
else if(!email.match(emailPattern)){
emailError.textContent="Format email invalide";
isValid=false;
}

if(message===""){
messageError.textContent="Veuillez entrer un message";
isValid=false;
}

if(isValid){
successMessage.textContent="Votre message a été envoyé avec succès !";
form.reset();
}

});