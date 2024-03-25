// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.


function multiplicacion(a,b) {
    return a * b;
}

console.log(multiplicacion(5, 5));


// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

function mayorOmenor() {
    let edad = prompt('Introdudzca su edad');
    switch (true) {
        case edad < 18:
            console.log('Eres menor de edad');
            break;
        case edad >= 18 && edad < 50:
            console.log('Eres mayor de edad');
            break;
        case edad >= 50:
            console.log('Eres un adulto mayor');
            break;
        default:
            return 'Edad no validad';
    }
}

// mayorOmenor();


// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".


function sumaTresNumeros(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return a + b + c;
    } else {
        return 'Debo ser ejecutada con numeros';
    }
}

console.log(sumaTresNumeros(1, 7, 3));


// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.


function primerosTresCaracteres(palabra) {
    let tresLetras = '';
    if (typeof palabra === 'string') {
        tresLetras = palabra.substr(0,3);
        console.log(tresLetras);
    } else {
        console.log('Debo ser ejecutada con un string');
    }
}

primerosTresCaracteres('super');


// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'No es un formato correcto'.

function getPrecioMostrarIVA(precio) {
    if (typeof precio === 'number') {
        return precio *= 1.21;
    } else {
        return 'No es un formato correcto';
    }
}

console.log(getPrecioMostrarIVA(2));