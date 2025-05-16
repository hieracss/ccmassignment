function validateLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    const users = [
      { email: "leroybrown@stu.ccm.edu.jm", password: "student123" },
      { email: "nahiera@ccm.edu.jm", password: "teacher123" },
      { email: "joshua@ccm.edu.jm", password: "teacher123" },
      { email: "leroybrown@ccm.edu.jm", password: "teacher123" }
    ];
  
    const userFound = users.find(user => user.email === email && user.password === password);
  
    if (userFound) {
      window.location.href = "home.html";
      return false; 
    } else {
      errorMessage.textContent = "Invalid email or password. Please try again.";
      return false;
    }
  }
  