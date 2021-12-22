const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank!');
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'The email address cannot be empty!');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'The email address is invalid!');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'The password cannot be empty!');
    }
    else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password verification cannot be empty!');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords dont match!');
    }
    else{
        setSuccessFor(password2);
    }

    const btn = document.querySelector('button');
    btn.innerHTML = 'Successfully tested!';
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}