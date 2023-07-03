// una funcion nos permite encapsular(guardar) bloques de codigo para volverlos a utilizar cuando queramos dentro del programa y no tener que copiar nuevamente el mismo codigo

function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

//una funcion me sirve cuando tenemos codigo que se repite ( hace lo mismo con cambios que podrian ser parametros y argumentos) y se pueden encapsular en una funcion.

// la diferencia entre parametro y argumento es que parametro se le llama a las variables que requiere la funcion cuando la creamos. y argumento es el valor que le damos a esas variables cuando llamamos o ejecutamos esa funcion.

function saludo(name, lastname, username) {
    completeName = nombreCompleto(name, lastname);
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username);
}

saludo("marcelo", "lencina", "enki");

// condicionales
// son la forma de que ejecutamos un bloque de codigo u otro, dependiendo de alguna condicion o validacion.

// If (else y else if), Switch

//el condicional if(con else y else if) nos permite hacer validaciones completamente distintas(si asi lo queremos). en el caso de Switch todas las cases se comparan con la misma variable o condicion que definimos en el switch.

//si, las funciones pueden encapsular cualquier bloque de codigo. incluyendo condicionales.

function conseguirTipoSuscripcion(suscripcion) {
    if(suscripcion == "Free") {
        console.log("solo puedes tomar cursos gratis");
        return;
    } if(suscripcion == "Basic") {
        console.log("puedes tomar casi todos los cursos de platzi durante un mes");
        return;
    } if(suscripcion == "Expert") {
        console.log("puedes tomar casi todos los cursos de platzi durante un año");
        return;
    } if(suscripcion == "ExpertDuo") {
        console.log("tu y alguien mas pueden tomar Todos los cursos de platzi durante un año");
        return;
    } else {
        console.warn("ese tipo de suscripcion no existe");
    }
}
// hacer lo mismo pero sin tantos if.

const tiposDeSuscripciones = {
    free: "solo puedes tomar cursos gratis",
    basic: "puedes tomar casi todos los cursos de platzi durante un mes",
    expert: "puedes tomar casi todos los cursos de platzi durante un año",
    expertDuo: "tu y alguien mas pueden tomar Todos los cursos de platzi durante un año"
};

function conseguirTipoSuscripcionSimple(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("Ese tipo de suscripcion no existe");
}


// Ciclos
// un ciclo es la forma que tenemos de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.
//While, do while, for.
//un ciclo infinito es cuando la validacion que tenemos para que acabe el ciclo nunca se cumple y termina toteando (rompiendo) la aplicacion.

//si es posible mezclar ciclos y condicionales, aunque los ciclos son una especie de condicionales nada nos impide agregar mas condicionales dentro de un ciclo.

let respuesta;

while(respuesta != "4"){
    let pregunta = prompt("cuanto es 2 + 2?");
    respuesta = pregunta;
}

//listas: arrays y objetos

// un array es una lista de elementos

// un objeto es una lista de elementos PERO cada elemento tiene un nombre clave. para que a la hora de buscarlo no necesitemos llamarlo por su posicion, en su lugar usaremos el nombre clave.

//arrays cuando lo que haremos en un elemento es lo mismo que en los demas(la regla se puede incumplir) mientras que un objeto lo usamos cuando los nombres de caada elemento son importantes para nuestro algoritmo.

//si, los objetos y arrays pueden mezcarse. usando arrays dentro de objetos y objetos dentro de arrays.

function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}

function imprimirElementoPorElemento(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// obtener los valores de un objeto
function imprimirElementoPorElementoObj(obj) {
    let arr = Object.values(obj);//vaalores del objeto
    let arr2 = Object.keys(obj)// palabras clave del objeto
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}