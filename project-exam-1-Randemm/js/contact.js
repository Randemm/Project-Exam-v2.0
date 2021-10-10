const formContainer = document.getElementById("form");
const infoContainer = document.getElementById("info");

function validateForm() {
  var formError = false;
  var fnamePointer = "full name";
  var fullName = document.forms["contactForm"][fnamePointer].value;
  document.getElementById("fnameerror").innerHTML = "";

  if (validateString(fullName, 5)) {
    document.getElementById("fnameerror").innerHTML =
      "Name must be longer than 5 characters. ";
    formError = true;
  }
  if (!validateName(fullName)) {
    document.getElementById("fnameerror").innerHTML +=
      "Can only consist of alphabetical letters";
    formError = true;
  }
  if (formError == true) {
    document.getElementById("fname").classList.add("input-error");
  } else {
    document.getElementById("fname").classList.remove("input-error");
  }

  var emailPointer = "email";
  var email = document.forms["contactForm"][emailPointer].value;
  document.getElementById("emailerror").innerHTML = "";
  if (validateString(email, 0)) {
    formError = true;
  }
  console.log(validateEmail(email));

  if (!validateEmail(email)) {
    document.getElementById("emailerror").innerHTML = "Email not valid.";
    document.getElementById("email").classList.add("input-error");
    formError = true;
  } else {
    document.getElementById("email").classList.remove("input-error");
  }

  var subjectPointer = "subject";
  var subject = document.forms["contactForm"][subjectPointer].value;
  document.getElementById("subjecterror").innerHTML = "";
  if (validateString(subject, 15)) {
    document.getElementById("subjecterror").innerHTML =
      "Subject cannot be empty or less than 15 characters.";
    document.getElementById("subject").classList.add("input-error");
    formError = true;
  } else {
    document.getElementById("subject").classList.remove("input-error");
  }
  var messagePointer = "message";
  var message = document.forms["contactForm"][messagePointer].value;
  document.getElementById("messageerror").innerHTML = "";
  if (validateString(message, 25)) {
    document.getElementById("messageerror").innerHTML =
      "Message cannot be empty or less than 25 characters.";
    document.getElementById("message").classList.add("input-error");
    formError = true;
  } else {
    document.getElementById("message").classList.remove("input-error");
  }
  if (formError == false) {
    infoContainer.innerHTML =
      '<h1 class="headline"> Form was submitted successfully.</h1><p>Your question has been recieved and you will recieve an answer within one week.</p>';
    document.querySelector(
      ".contactform"
    ).innerHTML = `<i class="material-icons">check_circle</i>
    <button onClick="refreshPage()" class="submit padded">Return</button>`;
  }
  return false;
}

function refreshPage() {
  window.location.reload();
}

function validateString(string, minLength) {
  if (string == "") {
    return true;
  }

  if (minLength != 0) {
    if (string.length < minLength) {
      return true;
    }
  }

  return false;
}
function validateEmail(email) {
  const re = /.+@.+\..+/;
  return re.test(String(email).toLowerCase());
}
function validateName(fullName) {
  const re = /^[a-zA-Z ]+$/;
  return re.test(String(fullName).toLowerCase());
}
