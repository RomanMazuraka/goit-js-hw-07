const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {};
    for (let i = 0; i < loginForm.elements.length; i++) {
      const element = loginForm.elements[i];
      if (element.type !== 'submit') {
        formData[element.name] = element.value.trim();
      }
    }

    const formValues = Object.values(formData);
    if (formValues.some(value => value === '')) {
      alert('All form fields must be filled in');
      return;
    }

    console.log(formData);

    loginForm.reset();
  });
