const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password2');
const successMessage = document.getElementById('btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === ''){

        setErrorFor(userName, 'Username cannot be blank');
    } else {

        setSuccessFor(userName);

    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be black');
    
    } else if (!isEmail(emailValue)) {
        
        setErrorFor(email, 'Email is not valid');

    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be black');

    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password two cannot be black');

    }else if (passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords does not match');

    } else {
        setSuccessFor(password2);
    }
    
    

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}

function isEmail (email) {
    return /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(email);
}

}