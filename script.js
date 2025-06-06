document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('name').value.trim();
    const lastName = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const nameError = document.getElementById('nameError');
    const lastNameError = document.getElementById('LastnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    nameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    document.querySelectorAll('.form__input').forEach(input => input.classList.remove('error'));

    let isValid = true;

    if (!firstName) {
        nameError.textContent = 'First Name cannot be empty';
        document.getElementById('name').parentElement.classList.add('error');
        isValid = false;
    }

    if (!lastName) {
        lastNameError.textContent = 'Last Name cannot be empty';
        document.getElementById('surname').parentElement.classList.add('error');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'Email cannot be empty';
        document.getElementById('email').parentElement.classList.add('error');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Looks like this is not an email';
        document.getElementById('email').parentElement.classList.add('error');
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = 'Password cannot be empty';
        document.getElementById('password').parentElement.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});
