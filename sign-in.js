const sign = document.querySelector('#signIn_Form')
sign.addEventListener('submit', Handler)

function Handler(e) {
  e.preventDefault()
  const signInDeatails = {
    Name: '',
    email: '',
    phoneNo: '',
    gender: '',
    country: '',
    hobbies: '',
    password: '',
  }
  const NameInput = document.querySelector('#name')
  const EmailInput = document.querySelector('#email')
  const PhoneInput = document.querySelector('#phone')
  const GenderInput = document.querySelector('input[name="gen"]:checked')
  const SelectInput = document.querySelector('#countrys')
  const PasswordInput = document.querySelector('#password-1')
  const HobbiesInput = document.querySelector('input[name="hobbies"]:checked')

  const NameError = document.querySelector('#name ~ p')
  const EmailError = document.querySelector('#email ~ p')
  const PhoneNoError = document.querySelector('#phone ~ p')
  const GenderError = document.querySelector('input[name="gen"] ~ p')
  const SelectError = document.querySelector('#countrys ~ p')
  const HobbieError = document.querySelector('input[name="hobbies"] ~ p')
  const PasswordError = document.querySelector('#password-1 ~ p')

  signInDeatails.Name = NameInput.value
  signInDeatails.email = EmailInput.value
  signInDeatails.phoneNo = PhoneInput.value
  signInDeatails.gender = GenderInput ? GenderInput.value : ''
  signInDeatails.country = SelectInput.value
  signInDeatails.hobbies = HobbiesInput ? HobbiesInput.value : ''
  signInDeatails.password = PasswordInput.value

  let formvalid = true

  if (!signInDeatails.Name) {
    formvalid = false
    NameError.classList.remove('Error')
    NameInput.style.borderColor = 'red'
  } else {
    NameError.classList.add('Error')
    NameInput.style.borderColor = '#cccbcb'
  }

  if (!signInDeatails.email) {
    formvalid = false
    EmailError.classList.remove('Error')
    EmailInput.style.borderColor = 'red'
  } else {
    EmailError.classList.add('Error')
    EmailInput.style.borderColor = '#cccbcb'
  }

  if (!signInDeatails.phoneNo) {
    formvalid = false
    PhoneNoError.classList.remove('Error')
    PhoneInput.style.borderColor = 'red'
  } else {
    PhoneNoError.classList.add('Error')
    PhoneInput.style.borderColor = '#cccbcb'
  }

  if (!signInDeatails.gender) {
    formvalid = false
    GenderError.classList.remove('Error')
  } else {
    GenderError.classList.add('Error')
  }

  if (!signInDeatails.country) {
    formvalid = false
    SelectError.classList.remove('Error')
  } else {
    SelectError.classList.add('Error')
  }

  if (!signInDeatails.hobbies) {
    formvalid = false
    HobbieError.classList.remove('Error')
  } else {
    HobbieError.classList.add('Error')
  }

  if (!signInDeatails.password) {
    formvalid = false
    PasswordError.classList.remove('Error')
    PasswordInput.style.borderColor = 'red'
  } else {
    PasswordError.classList.add('Error')
    PasswordInput.style.borderColor = '#cccbcb'
  }

  if (formvalid) {
    console.log(signInDeatails)
  }
}
