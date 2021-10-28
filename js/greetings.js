const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME =  "hidden";
const USERNAME_KEY = "username"
function onLoginSubmit(e){
    e.preventDefault(); //브라우저의 기본동작을 막아줌(ex.새로고침)
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}