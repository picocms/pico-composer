var form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var firstName = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var termsChecked = document.getElementById('checkbox').checked;

  if (!termsChecked) {
    alert('Please agree to the Privacy Policy');
    return;
  }

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        alert(this.responseText);
      } else {
        console.error("An error occurred while sending the email.");
        document.getElementById("message").innerHTML = "An error occurred while sending the email.";
      }
    }
  };

  var params = "first-name=" + encodeURIComponent(firstName) + "&subject=" + encodeURIComponent(subject) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
  xhttp.open("POST", "send-mail", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
});
