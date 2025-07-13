document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (email && message) {
    document.getElementById("formMessage").textContent = "Thank you for contacting us!";
    this.reset();
  } else {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
  }
});
