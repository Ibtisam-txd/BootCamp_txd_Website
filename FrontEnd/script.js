// Smooth Scroll for Internal Navigation Links (those with href starting with '#')
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Check if the link is an internal section link (starts with '#')
    if (href.startsWith('#')) {
      e.preventDefault();  // Prevent default link behavior
      
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // Else let the default behavior (navigation) take place for links like './login.html'
  });
});

// Login Form Validation and Redirect
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerBtn = document.getElementById("register-btn");

  // Only add event listener if login form exists
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
          window.location.href = "index.html";
        }
      });
  }

  // Only add event listener if register button exists
  if (registerBtn) {
      registerBtn.addEventListener("click", () => {
          window.location.href = "registration.html";
      });
  }
});
