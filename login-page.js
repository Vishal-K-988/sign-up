console.log('Perfectly working...')

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
// const page2 = document.getElementById("redirect");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    if (username === "vishalkumarvkvk988@gmail.com" && password === "123") {
        alert("You have successfully logged in.");
        // location.reload();
        window.location.href = "webpage.html";
    }
    else {
        alert("error.");
    }
});