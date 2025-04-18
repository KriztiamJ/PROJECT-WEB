//VERIFIACADOR DE CONTRASEÑAS
const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input=document.getElementById('email-input')
const password_input=document.getElementById('password-input')
const repeat_password_input=document.getElementById('repeat-password-input')
const error_message=document.getElementById('error-message')

form.addEventListener('submit',(e)=>{
    //e.preventDefault()
    let errors = []
    if(firstname_input){
        errors =getSignupFormErrors(firstname_input.value,email_input.value,password_input.value,repeat_password_input.value)
    }else {
        errors =getLoginFormsErrors(email_input.value,password_input.value)
    }
    if (errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})
function getSignupFormErrors(firstname,email,password,repeatPassword){
    let errors = []
    if (firstname === '' || firstname == null){
        errors.push('El nombre es requerido')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null){
        errors.push('El email es requerido')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null){
        errors.push('La contraseña es requerida')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length<8){
        errors.push('La contraseña debe tener más de 8 caracteres')
    }
    if (password !== repeatPassword) {
        errors.push('Las contraseñas no coinciden')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}
const allInputs = [firstname_input,email_input,password_input,repeat_password_input]
allInputs.forEach(input =>{
    input.addEventListener('input',()=>{
        if (input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
        }
    })
})
function getLoginFormsErrors(email,password){
    let errors = []
    if (email === '' || email == null){
        errors.push('El email es requerido')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null){
        errors.push('La contraseña es requerida')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

//Boton de reproducir musica
function reproducirMusica() {
    const music = document.getElementById("musica");
    const musicIcon = document.querySelector("#music-btn i");

    if (music.paused) {
        music.play();
        musicIcon.classList.remove("fa-music");
        musicIcon.classList.add("fa-pause");
    } else {
        music.pause();
        musicIcon.classList.remove("fa-pause");
        musicIcon.classList.add("fa-music");
    }
}


