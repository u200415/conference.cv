function Validate() {
  // Clear all error messages
  document.getElementById("name-error").innerText = "";
  document.getElementById("email-error").innerText = "";
  document.getElementById("username-error").innerText = "";
  document.getElementById("img-error").innerText = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const imageError = document.getElementById("img-error");

  let isValid = true;

  // Validate name
  if (name === "") {
    document.getElementById("name-error").innerText = "Fullname is required";
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").innerText =
      "Please enter a valid email address";
    isValid = false;
  }

  // Validate username
  if (username === "") {
    document.getElementById("username-error").innerText =
      "Github username is required";
    isValid = false;
  }

  return isValid; // Prevent form submission if invalid
}
