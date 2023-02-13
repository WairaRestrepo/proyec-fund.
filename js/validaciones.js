/*tutorial tomado de   https://www.youtube.com/watch?v=j3ixg2cPI54 */ 
let email = document.getElementById('Email'); /*Se crean las variable que van a guardar  la informacion que traen por el metodo  document.getElementById, dentro de los parentesis se ponen los id de los input*/
let password = document.getElementById('password');
let error = document.getElementById('error');
error.style.color='red';



function ingresarFormulario(){/* luego se genera la funcion con el nombre  que se le puso en el evento  onclick*/ 
    alert("Validando informacion")
    
    let mensajeserror=[];
    if(email.value === null ||email.value === '' ){
        mensajeserror.push('Ingrese correo electronico con el que se registro')
        }

    if(password.value === null ||password.value === '' ){
        mensajeserror.push('Ingrese su contraseña con la que se registro')
        }

        /*  [ mensajeserror.join(',');]convertir el arreglo en cadena de texto , se pone coma para separar los mensajes de error*/ 

        error.innerHTML=mensajeserror.join(',');
        /*[error.innerHTML] se utiliza para mostrar el texto por la variable error y  innerHTML que lo lleve a el html */
            
    return false;
}