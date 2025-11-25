function showError(msg) {
    let box = document.getElementById("errorBox");
    box.style.display = "block";
    box.textContent = msg;

    setTimeout(() => {
        box.style.display = "none";
    }, 2000);
}

/* EMAIL PATTERN */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* LOGIN */
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let pass  = document.getElementById("loginPass").value.trim();

    if (email === "" || pass === "") return showError("Please fill all fields.");
    if (!emailPattern.test(email)) return showError("Invalid email address.");

    window.location.href = "404.html";
});

/* REGISTER */
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let name  = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let pass  = document.getElementById("regPass").value.trim();

    if (name === "" || email === "" || pass === "") return showError("Please fill all fields.");
    if (!emailPattern.test(email)) return showError("Invalid email address.");

    window.location.href = "404.html";
});

/* FORGOT PASSWORD */
document.getElementById("forgotForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("forgotEmail").value.trim();

    if (email === "") return showError("Please enter your email.");
    if (!emailPattern.test(email)) return showError("Invalid email address.");

    window.location.href = "404.html";
});
