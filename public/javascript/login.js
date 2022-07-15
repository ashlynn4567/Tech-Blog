// login form submission
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById("username-login").value.trim();
    const password = document.getElementById("password-login").value.trim();

    if (username && password) {
        const response = await fetch(`/api/users/login`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" }
        });

        // check the response status
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        };
    };
};

// signup form submission
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById("username-signup").value.trim();
    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch(`/api/users`, {
            method: "POST", 
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" }
        });

        // check the response status
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        };
    };
};

// event listeners
document.querySelector(".login-btn").addEventListener("submit", loginFormHandler);
document.querySelector(".signup-btn").addEventListener("submit", signupFormHandler);