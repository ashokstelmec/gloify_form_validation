const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cnfpassword = document.getElementById('cnfpassword');
const dateOfBirth = document.getElementById('date1');
const image = document.getElementById('image');
// const gender = document.querySelectorAll('input[name="gender"]:checked');



form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cnfpasswordValue = cnfpassword.value.trim();
  const dateOfBirthValue = dateOfBirth.value.trim();
  const imageValue = image.value.trim();
  // const genderValue = gender.value;

  if (firstNameValue === '') {
    setErrorFor(firstName, 'Firstname cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

  if (imageValue === '') {
    setErrorFor(image, 'Please select an image');
  } else {
    setSuccessFor(image);
  }

  // if (genderValue === '') {
  //   setErrorFor(gender, 'Please select a gender');
  // } else {
  
  // }

  if (dateOfBirthValue === '') {
    setErrorFor(dateOfBirth, 'Please enter your Date Of Birth');
  } else {
    setSuccessFor(dateOfBirth);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Lastname cannot be blank');
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (cnfpasswordValue === '') {
    setErrorFor(cnfpassword, 'Confirm Password cannot be blank');
  } else if (passwordValue !== cnfpasswordValue) {
    setErrorFor(cnfpassword, 'Passwords does not match');
  } else {
    setSuccessFor(cnfpassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}