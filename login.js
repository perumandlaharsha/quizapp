document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();

  if (username.length > 0) {
    localStorage.setItem("quizUsername", username);
    window.location.href = "quiz.html";
  } else {
    alert("Please enter your name to continue.");
  }
});
