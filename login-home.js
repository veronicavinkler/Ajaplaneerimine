
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        const errorElement = document.getElementById("error-container");
        errorElement.innerHTML +=
            '<p>Oled edukalt sisse logitud!</p>'+
            'br'+
            '<p>Palun oota kuni leht laeb.</p>';
        alert("You have successfully logged in.");
        window.location="home.html";
    } else {
        const errorElement = document.getElementById("error-container");
        errorElement.innerHTML += '<p>Kasutaja nimi või parool on vale</p>';

        loginErrorMsg.style.opacity = 1;
    }
})