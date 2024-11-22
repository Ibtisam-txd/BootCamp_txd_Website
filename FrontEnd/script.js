

// Login Form Validation and Redirect
document.addEventListener("DOMContentLoaded", () => {
  // Login Form Validation
  const loginForm = document.getElementById("login-form");
  const registerBtn = document.getElementById("register-btn");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!username || !password) {
        alert("Please fill in all fields.");
      } else if (password.length < 6) {
        alert("Password must be at least 6 characters.");
      } else {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home or dashboard
      }
    });
  }

  // Redirect to Registration Page
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      window.location.href = "registration.html";
    });
  }

  // Registration Form Validation
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("register-password").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();

      if (!fullname || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Simulate successful registration
      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to the login page
    });
  }
});
