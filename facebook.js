const validUser = {
  userName: 'sahalsachu869@gmail.com',
  password: 'test',
}

const signInForm = document.querySelector('#sign-in')
signInForm.addEventListener('click', signInHandler)

function signInHandler(e) {
  window.location.href = './sign_in.html'
}

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', submitHandler)

function submitHandler(event) {
  event.preventDefault()
  const userDetails = {
    username: '',
    password: '',
  }
  const userNameInput = document.querySelector('#username')
  const passwordInput = document.querySelector('#password')
  const userNameError = document.querySelector('#username ~ p')
  const passwordInputErorr = document.querySelector('#password ~ p')

  userDetails.username = userNameInput.value
  userDetails.password = passwordInput.value

  let isFormValid = true

  if (!userDetails.username) {
    isFormValid = false
    userNameError.classList.remove('hide')
    userNameInput.style.borderColor = 'red'
  } else {
    userNameInput.style.borderColor = '#cccbcb'
    userNameError.classList.add('hide')
  }

  if (!userDetails.password) {
    isFormValid = false
    passwordInput.style.borderColor = 'red'
    passwordInputErorr.classList.remove('hide')
  } else {
    passwordInput.style.borderColor = '#cccbcb'
    passwordInputErorr.classList.add('hide')
  }

  if (isFormValid) {
    console.log(userDetails)
    validateUserData(userDetails)
  }
}

function validateUserData(user) {
  if (user.username === validUser.username && user.password === validUser.password) {
    window.location.href = '#'
  } else {
    alert('Wrong username or password')
  }
}
