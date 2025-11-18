// Variables para cada input que realice el usuario 

const form= document.getElementById('form');
const userName=document.getElementById('Username');
const email=document.getElementById('Useremail');
const password=document.getElementById('password');
const password2= document.getElementById('password2');
const phone=document.getElementById('phone');

// Agregar un evento de escucha para el envío del formulario
form.addEventListener('submit', (e)=>{
    e.preventDefault(); // Evitar el envío del formulario por defecto
    validateInputs();
});

// Funciones de validación de los inputs del formulario
const setError=(element,message)=>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerText= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
// Función para mostrar que el input es correcto
const setSuccess= element=>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerText= '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// aqui utilizamos una expresion regular que es la que nos permite la verificacion del correo electronico
const isValidEmail=email=>{
    // esta es una expresion regular en la que verificamos el correo electronico
    const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Con eso hacemos las verificaciones de las entradas del usuario
const validateInputs = () => {
    let valido = true;

    const userNameValue= userName.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const password2Value= password2.value.trim();
    const phoneValue= phone.value.trim();

    if (userNameValue === '') {
        setError(userName, 'El nombre de usuario es obligatorio');
        valido = false;
    } else {
        setSuccess(userName);
    }

    if (emailValue === '') {
        setError(email, 'El correo electrónico es obligatorio');
        valido = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'El correo electrónico no es válido');
        valido = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'La contraseña es obligatoria');
        valido = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Debe tener al menos 8 caracteres');
        valido = false;
    } else {
        setSuccess(password);
    }

    if (phoneValue === '') {
        setError(phone, 'Ingrese un número telefónico');
        valido = false;
    } else if (!/^(6|2)\d{3}-\d{4}$/.test(phoneValue)) {
        setError(phone, 'El número telefónico no es válido');
        valido = false;
    } else {
        setSuccess(phone);
    }

    if (password2Value === '') {
        setError(password2, 'Por favor confirma tu contraseña');
        valido = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Las contraseñas no coinciden');
        valido = false;
    } else {
        setSuccess(password2);
    }

    return valido;
};


document.getElementById('registrarse').addEventListener('click', function() {
    if (validateInputs()) {  
        window.location.href = "main-iniciarsesion.html";  
    }
});
