const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

function onLoginSubmit(e){
    e.preventDefault(); //브라우저의 기본동작을 막아줌(ex.새로고침)
    console.log(e);
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);