// script.js
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Thank you for your message!");
  return true;
}

function showProject(title, description) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
    })
    .catch(err => {
      alert("Failed to send message.");
      console.error(err);
    });

  return false; // prevent form reload
}
