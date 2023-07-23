//Haz tú validación en javascript acá
export function valida(input){
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").inneHTML= "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").inneHTML= mostrarMensajeDeError(tipoDeInput, input);
    }
}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]


const mensajesDeError ={
    nombre:{
        valueMissing: "Este campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "Este campo correo no puede estar vacio",
        typeMismatch: "El correo no es válido",
    },
    asunto:{
        valueMisisng: "Este campo no puede estar vacio",
        patternMismatch: "contener entre 100 caracteres",
    },
    mensaje:{
        valueMisisng: "Este campo no puede estar vacio",
        patternMismatch: "contener entre 500 caracteres",
    }
}



function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}
