'use strict';

const input_nombre_completo = document.querySelector('#txt-nombre_completo');
const input_fecha_entrada = document.querySelector('#txt-fecha_entrada');
const input_fecha_salida = document.querySelector('#txt-fecha_salida');
const input_email = document.querySelector('#txt-email');
const input_telefono = document.querySelector('#txt-telefono');
const boton_reservar = document.querySelector('#btn-reservar');


//VALIDACION DE ESPACIOS EN BLANCO 

let validar_contra_blacos = () => {
    let error = false;
    let error_fechas = false;
    let error_correo = false;
    let error_moneda = false;
    let error_terminos_y_condiciones = false;
    let elementos_requeridos = document.querySelectorAll('[required]');
    let validacion_arroba_correo = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;
    //ciclo que determina la llamada de la alerta error rojo de los campos
    for (let i = 0; i < elementos_requeridos.length; i++) {
        if (elementos_requeridos[i].value == '') {
            elementos_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            elementos_requeridos[i].classList.remove('input-error');
        }
    }


    //CARGA FUNCIONES DE CAMPOS FECHAS-CORREO-MONEDA-TERMINOS

    validar_fechas();
    validar_correo();
    validar_moneda();
    validar_terminos_y_condiciones();
    return error;
};


//VALIDACION DE LOS CAMPOS FECHAS INICIO-FINAL

let validar_fechas = () => {
    let error = false;
    let error_fechas = false;
    if (new Date(input_fecha_entrada.value) >= new Date(input_fecha_salida.value)) {
        input_fecha_entrada.classList.add('input-error');
        error = true;
        error_fechas = true;
    }
    if (new Date(input_fecha_salida.value) <= new Date(input_fecha_entrada.value)) {
        input_fecha_salida.classList.add('input-error');
        error = true;
        error_fechas = true;

    }
    return error_fechas;
}


//VALIDACION DEL CAMPO CORREO ELECTRONICO

let validar_correo = () => {
    let error = false;
    let error_correo = false;
    let validacion_arroba_correo = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;
    if (validacion_arroba_correo.test(input_email.value) == false) {
        input_email.classList.add('input-error');
        error = true;
        error_correo = true;
    }
    return error_correo;
}


//VALIDACION DEL CAMPO MONEDA

let validar_moneda = () => {
    let error = false;
    let error_moneda = false;
    let input_moneda = document.querySelector('#moneda input[type=radio]:checked');
    if (!input_moneda) {
        error = true;
        document.querySelector('#moneda').classList.add('input-error');
        error_moneda = true;
    } else {
        document.querySelector('#moneda').classList.remove('input-error');
    }
    return error_moneda;
}


//VALIDACION DEL CAMPO TERMINOS Y CONDICIONES

let validar_terminos_y_condiciones = () => {
    let error = false;
    let error_terminos_y_condiciones = false;
    let input_terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked');
    if (!input_terminos_y_condiciones) {
        error = true;
        document.querySelector('#terminos_y_condiciones').classList.add('input-error');
        error_terminos_y_condiciones = true;
    } else {
        document.querySelector('#terminos_y_condiciones').classList.remove('input-error');
    }
    return error_terminos_y_condiciones;
}


// LIMPIAR LOS CAMPOS DEL FORM

let limpiar = () => {
    input_nombre_completo.value = '';
    input_fecha_entrada.value = '';
    input_fecha_salida.value = '';
    input_email.value = '';
    input_telefono.value = '';
    document.getElementById("checkbox_y_terminos_y_condiciones").checked = false;
    document.getElementById("rbt-colones").checked = false;
    document.getElementById("rbt-dolares").checked = false;
    document.getElementById("rbt-euros").checked = false;
};



// VALIDACION DE VENTANAS EMERGENTES FORM

let obtener_datos = () => {
    let error_validacion_contra_blancos = validar_contra_blacos();

    if (error_validacion_contra_blancos) {
        Swal.fire({
            title: 'No se han podido enviar sus datos.',
            text: 'Por favor ingrese todos los datos solicitados',
            icon: 'warning'
        })
    } else {
        if (validar_fechas()) {
            Swal.fire({
                title: 'Las fechas están incorrectas.',
                text: 'La fecha de pedido tiene que ser el dia de hoy y la fecha de entrega tiene que ser un dia despues de la fecha de pedido.',
                icon: 'warning'
            })
        } else {
            if (validar_correo()) {
                Swal.fire({
                    title: 'La dirección de correo electrónico está incorrecta.',
                    text: 'La dirección de correo tiene que tener el formato correcto, incluyendo el arroba ("@")',
                    icon: 'warning'
                })
            } else {
                if (validar_moneda()) {
                    Swal.fire({
                        title: 'Elegir un metodo de entrega.',
                        text: 'Por favor seleccionar el metodo de entrega que desee',
                        icon: 'warning'
                    })
                } else {
                    if (validar_terminos_y_condiciones()) {
                        Swal.fire({
                            title: 'Términos y condiciones no aceptados',
                            text: 'Tiene que aceptar los términos y condiciones para continuar',
                            icon: 'warning'
                        })
                    } else {
                        let nombre_completo = input_nombre_completo.value;
                        let fecha_entrada = input_fecha_entrada.value;
                        let fecha_salida = input_fecha_salida.value;
                        let email = input_email.value;
                        let telefono = input_telefono.value;
                        let moneda = document.querySelector('#moneda input[type=radio]:checked').value;
                        let terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked').value;

                        Swal.fire({
                            title: 'Gracias por su pedido',
                            text: 'Pronto nos estaremos comunicando con usted por medio de correo electronico',
                            icon: 'success'

                        }).then(() => {
                            limpiar();
                        });
                    }

                }
            }
        }
    }
};


//CARGA DEL BOTON RESERVAR
boton_reservar.addEventListener('click', obtener_datos);