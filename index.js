const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // prevent form from submitting normally
  event.preventDefault();

  // get input field values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!firstName || !lastName || !email || !password) {
    return alert("Please fill all the fields");
  }

  if (!emailIsValid(email)) {
    return alert("Please enter a valid email");
  }

  // submit form
  form.submit();
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
