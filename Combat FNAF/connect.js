let dark_button = document.querySelector("#dark_mode")
let body = document.querySelector("body")
let img = document.querySelector("#dark_img")
let img2 = document.querySelector("#light_img")

let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let errorContainer = document.querySelector('.message-error')
    let successContainer = document.querySelector('.message-success')
    errorContainer.classList.remove('visible')
    while (errorContainer.firstChild) {
        errorContainer.removeChild(errorContainer.firstChild)
    }
    successContainer.classList.remove('visible')

    let pseudo = document.querySelector('#pseudo')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let password2 = document.querySelector('#password2')
    let passCheck = new RegExp (
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])"
    )
    let conf = document.querySelector('#conf')

    if (pseudo.value.length < 6) {
        
        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"

        errorContainer.appendChild(err)

    } else {
        pseudo.classList.add("success")
    }

    if(email.value == '') {
        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ email est invalide"

        errorContainer.appendChild(err)
    } else {
        email.classList.add("success")
    }

    if(password.value.length < 10 || passCheck.test(password.value) == false) {

        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit contenir 10 caractères minimum, une majuscule, une minuscule, un chiffre et un caractère spécial. "

        errorContainer.appendChild(err)

    } else {
        password.classList.add("success")
    }

    if(password.value === password2.value && password.classList.contains('success')) {
        password2.classList.add("success")
    } else {
        errorContainer.classList.add('visible')
        password2.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Les mots de passes doivent être identique. "

        errorContainer.appendChild(err)
    }

    if (!conf.checked) {
        errorContainer.classList.add('visible')

        let err = document.createElement('li')
        err.innerText = "Vous devez accepter les conditions d'utilisation. "

        errorContainer.appendChild(err)
    }

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password2.classList.contains('success') &&
        conf.checked
    ) {
        successContainer.classList.add('visible')
    }
})

function showPassword(y) {
    switch(y){
        case 0:
            var x = document.getElementById("password");
            break;
        case 1:
            var x = document.getElementById("password2");
            break;
        default:
            break;
    }
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// Dark Mode
dark_button.addEventListener("click", function(){
    body.classList.toggle('white')
    img.classList.toggle('desactivate')
    img2.classList.toggle('desactivate')
    button.forEach(element => {
        element.classList.toggle('light_button')
    });
});