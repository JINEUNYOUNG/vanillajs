const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username= loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, username);
 
  greeting.innerText = `Good Day! ${username}`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}



const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else {
  //show the greetings
   
  greeting.innerText = `Helloo ${saveUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}