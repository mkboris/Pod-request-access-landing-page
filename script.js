"use strict";

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("emailInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const emailInput = document.getElementById("emailInput");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Oops! Please add your email";
    } else if (!emailRegex.test(email)) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Oops! Please check your email";
      emailInput.placeholder = "example@email.com";
    } else {
      errorMessage.style.display = "none";
      errorMessage.textContent = "";
      emailInput.placeholder = "Enter your email";
      location.reload();
      alert("Thank you!");
    }
  });
