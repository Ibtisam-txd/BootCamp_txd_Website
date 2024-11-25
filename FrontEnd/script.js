 
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
 
  // Registration Form Validation and API Integration
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
      e.preventDefault();
 
      const username = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("register-password").value.trim();
 
      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }
 
      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
 
      // Log data being sent to the backend
      console.log({ username, email, password });
 
      // Make API request to backend
      try {
        console.log("hello");
   
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, // Ensure the backend expects `fullname`
                email,
                password,
            }),
        });
        console.log("happy")
        if (!response.ok) {
            // If the response is not ok, handle the error
            const errorData = await response.json();
            throw new Error(errorData.message || "An error occurred during registration.");
        }
   
        const data = await response.json(); // Parse the JSON response
        alert(data.message || "Registration successful!");
        window.location.href = "login.html"; // Redirect to the login page
    } catch (error) {
        console.error("Registration Error:", error);
        alert(error.message || "An unexpected error occurred.");
    }
   
    });
  }
});
 
 
 
 
 