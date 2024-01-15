const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailElement = loginForm.elements['email'];
    const passwordElement = loginForm.elements['password'];

    const emailValue = emailElement ? emailElement.value.trim() : '';
    const passwordValue = passwordElement ? passwordElement.value.trim() : '';

    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);

    loginForm.reset();
});
