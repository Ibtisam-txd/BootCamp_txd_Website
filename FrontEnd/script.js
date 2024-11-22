// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form Validation for Login
  if (document.querySelector('.login-container')) {
    const loginForm = document.querySelector('.login-container form');
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = loginForm.querySelector('input[type="text"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();
  
      if (!username || !password) {
        alert('Please fill in all fields.');
      } else if (password.length < 6) {
        alert('Password must be at least 6 characters.');
      } else {
        alert('Login successful!');
        window.location.href = "index.html";
      }
    });
  }
  
  // Login Form Validation and Redirect
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerBtn = document.getElementById("register-btn");
  
    // Handle login form submission
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
        window.location.href = "index.html";
      }
    });
  
    // Redirect to the registration page
    registerBtn.addEventListener("click", () => {
      window.location.href = "registration.html";
    });
  });
  