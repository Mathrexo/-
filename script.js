// Toggle between Login & Signup
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
});

signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});

// Form Validation (Basic Example)
document.querySelectorAll(".form").forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll("input");
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = "1px solid red";
                isValid = false;
            } else {
                input.style.border = "1px solid #ddd";
            }
        });

        if (isValid) {
            alert(form.id === "loginForm" ? "تم تسجيل الدخول بنجاح!" : "تم إنشاء الحساب بنجاح!");
            form.reset();
        }
    });
});