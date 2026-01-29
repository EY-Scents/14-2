// Dummy login logic (front-end only, NOT secure for real use)
// For demo: Username: "magda", Password: "7/9/2025"
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    // Updated check
    if (user === "magda" && pass === "7/9/2025") {
        // Save a login flag in localStorage (front-end only)
        localStorage.setItem('romanticLoggedIn', 'true');
        // Animate then redirect
        document.querySelector('.container').classList.add('fade-in');
        setTimeout(() => {
            window.location.href = "private.html";
        }, 1000);
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});
