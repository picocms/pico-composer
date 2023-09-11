// Get the form element
const form = document.getElementById("password-form");

// Add event listener to the form upon submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the user's preferences
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSpecialChars = document.getElementById("special-chars").checked;
  const length = document.getElementById("length").value;

  // Generate the password based on user preferences
  const password = generatePassword(
    length,
    includeUppercase,
    includeNumbers,
    includeSpecialChars
  );

  // Set the generated password to the password field and handles password field effects
  const passwordField = document.getElementById("password");
  passwordField.value = password;
  passwordField.removeAttribute("disabled");
  passwordField.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Add event listener to the reset button
form.addEventListener("reset", function () {
  // Handles password field effects
  const passwordField = document.getElementById("password");
  passwordField.setAttribute("disabled", "disabled");
});

// Function to generate the password
function generatePassword(
  length,
  includeUppercase,
  includeNumbers,
  includeSpecialChars
) {
  // Define the character sets
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*";

  // Create the character pool based on user preferences
  let characterPool = lowercaseChars;
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeNumbers) {
    characterPool += numberChars;
  }
  if (includeSpecialChars) {
    characterPool += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    // Randomly select a character from the character pool
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
}
