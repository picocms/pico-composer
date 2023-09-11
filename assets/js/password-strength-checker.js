// Function to analyze the password
function analyzePassword(password) {
  let metCriteriaCount = 0;
  let recommendationChecks = [];

  // Check length
  if (password.length < 12) {
    recommendationChecks.push({
      recommendation: "Your password should have at least 12 characters.",
      status: "❌",
    });
  } else {
    metCriteriaCount++;
    recommendationChecks.push({
      recommendation: "Your password should have at least 12 characters.",
      status: "✔️",
    });
  }

  // Check if the password contains lowercase letters
  if (!/[a-z]/.test(password)) {
    recommendationChecks.push({
      recommendation:
        "Your password should contain at least one lowercase letter.",
      status: "❌",
    });
  } else {
    metCriteriaCount++;
    recommendationChecks.push({
      recommendation:
        "Your password should contain at least one lowercase letter.",
      status: "✔️",
    });
  }

  // Check if the password contains uppercase letters
  if (!/[A-Z]/.test(password)) {
    recommendationChecks.push({
      recommendation:
        "Your password should contain at least one uppercase letter.",
      status: "❌",
    });
  } else {
    metCriteriaCount++;
    recommendationChecks.push({
      recommendation:
        "Your password should contain at least one uppercase letter.",
      status: "✔️",
    });
  }

  // Check if the password contains numbers
  if (!/[0-9]/.test(password)) {
    recommendationChecks.push({
      recommendation: "Your password should contain at least one number.",
      status: "❌",
    });
  } else {
    metCriteriaCount++;
    recommendationChecks.push({
      recommendation: "Your password should contain at least one number.",
      status: "✔️",
    });
  }

  // Check if the password contains special characters
  if (!/[^A-Za-z0-9]/.test(password)) {
    recommendationChecks.push({
      recommendation:
        "Your password should contain at least one special character.",
      status: "❌",
    });
  } else {
    metCriteriaCount++;
    recommendationChecks.push({
      recommendation:
        "Your password should contain at least one special character.",
      status: "✔️",
    });
  }

  let strengthIndicator;

  // Determine password strength
  if (metCriteriaCount > 4 && password.length >= 12) {
    strengthIndicator = {
      text: "Your password is very strong.",
      color: "green",
    };
  } else if (metCriteriaCount >= 3 && password.length >= 10) {
    strengthIndicator = { text: "Your password is strong.", color: "blue" };
  } else if (metCriteriaCount >= 2 && password.length >= 8) {
    strengthIndicator = { text: "Your password is medium.", color: "orange" };
  } else {
    strengthIndicator = { text: "Your password is weak.", color: "red" };
  }

  // Return the analysis result
  return { recommendationChecks, strengthIndicator };
}

// Function to render results
function renderResults(result) {
  // Create password strength table
  let passwordStrengthTable = document.createElement("table");
  let passwordStrengthHeader = document.createElement("thead");
  let passwordStrengthHeaderRow = document.createElement("tr");
  let passwordStrengthHeaderCell = document.createElement("th");
  passwordStrengthHeaderCell.textContent = "Password Strength";
  passwordStrengthHeaderRow.appendChild(passwordStrengthHeaderCell);
  passwordStrengthHeader.appendChild(passwordStrengthHeaderRow);
  passwordStrengthTable.appendChild(passwordStrengthHeader);

  let passwordStrengthBody = document.createElement("tbody");
  let passwordStrengthBodyRow = document.createElement("tr");
  let passwordStrengthBodyCell = document.createElement("td");
  passwordStrengthBodyCell.setAttribute("id", "password-strength");
  passwordStrengthBodyRow.appendChild(passwordStrengthBodyCell);
  passwordStrengthBody.appendChild(passwordStrengthBodyRow);
  passwordStrengthTable.appendChild(passwordStrengthBody);

  // Create recommendations table
  let recommendationsTable = document.createElement("table");
  let recommendationsHeader = document.createElement("thead");
  let recommendationsHeaderRow = document.createElement("tr");
  let recommendationsHeaderCell1 = document.createElement("th");
  let recommendationsHeaderCell2 = document.createElement("th");
  recommendationsHeaderCell1.textContent = "Recommendation";
  recommendationsHeaderCell2.textContent = "Status";
  recommendationsHeaderRow.appendChild(recommendationsHeaderCell1);
  recommendationsHeaderRow.appendChild(recommendationsHeaderCell2);
  recommendationsHeader.appendChild(recommendationsHeaderRow);
  recommendationsTable.appendChild(recommendationsHeader);

  let recommendationsBody = document.createElement("tbody");
  recommendationsBody.setAttribute("id", "password-recommendations");
  recommendationsTable.appendChild(recommendationsBody);

  // Clear previous content
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "<hr>";

  // Insert password strength table into the result element
  resultElement.appendChild(passwordStrengthTable);

  // Insert recommendations table into the result element
  resultElement.appendChild(recommendationsTable);

  // Get table elements
  let passwordStrengthElement = document.getElementById("password-strength");
  let recommendationsElement = document.getElementById(
    "password-recommendations"
  );

  // Display password strength
  let strengthIndicatorElement = document.createElement("span");
  strengthIndicatorElement.textContent = result.strengthIndicator.text;
  strengthIndicatorElement.style.color = result.strengthIndicator.color;
  passwordStrengthElement.appendChild(strengthIndicatorElement);

  // Display recommendations
  result.recommendationChecks.forEach(function (check) {
    let tr = document.createElement("tr");
    let tdRecommendation = document.createElement("td");
    tdRecommendation.textContent = check.recommendation;
    let tdStatus = document.createElement("td");
    tdStatus.textContent = check.status;
    tr.appendChild(tdRecommendation);
    tr.appendChild(tdStatus);
    recommendationsElement.appendChild(tr);
  });

  // Smooth scroll to the results
  passwordStrengthElement.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  let password = document.getElementById("password-input").value;
  let result = analyzePassword(password);
  renderResults(result);
}

// Get the form and add the submission event
const form = document.getElementById("password-form");
form.addEventListener("submit", handleSubmit);
