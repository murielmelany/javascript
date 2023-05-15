/* Curso medio-mayor, Jardin "Rayito de sol" */

// PROFESOR DEBE INGRESAR LOS ALUMNOS  //


let alumno = "";
let notas = [];
const curso = [];

while (alumno != "salir") {
    alumno = prompt("Ingrese nombre y apellido del alumno: (Ingrese salir si desea parar) ").toLowerCase();

    if (alumno === "salir") {
        alert("Gracias, buen dia!");
        break;
    }

    for (let i=0; i<5; i++) {
        const notaIngresada = prompt(`Ingrese las notas del alumno ${i +1} de 5: (Ingrese salir si desea parar)`);
        notas.push(parseInt(notaIngresada))
    }

    if (notas === "salir") {
        alert("Gracias, buen dia!");
        break;
    }

    curso.push({
        nombre: alumno,
        notas
    });

    notas = [];
    
}

let opcion = ''
// aqui vamos hacer el menú de interacciones
while(opcion !== 'salir'){
    opcion = prompt('Que opción desea ejecutar\n \t 1: Mostrar alumnos que pasaron \n \t 2: Mostrar los alumnos que se van a reforzamiento \n Escriba "salir" si desea parar');
    if (opcion === "salir") {
        alert("Gracias, buen dia!");
        break;
    }

    switch(opcion){

        case '1':
            //sacar promedio de notas de cada alumno y decir si va o no a refozamiento

            // recorremos el array de curso y vamos trabajando cada alumno por separado
            for(i=0; i < curso.length ;i++){
                // aqui se guarda el promedio acumulado
                let promedio = 0;

                // se recorren las notas para sumarlas del alumno
                for(j=0; j < 5 ; j++){
                    promedio = curso[i].notas[j] + promedio
                }
                // valido que si el promedio es mayor o igual a 4 no va a reforzamiento
                if(Math.round(promedio/5) >= 4 ){
                    console.log(`El Alumno ${curso[i].nombre} no va reforzamiento. promedio: ${Math.round(promedio/5)}`);
                }
            
            }

            break;
        
        case '2':
            //sacar promedio de notas de cada alumno y decir si va o no va a refozamiento

            // recorremos el array de curso y vamos trabajando cada alumno por separado
            for(i=0; i < curso.length ;i++){
                // aqui se guarda el promedio acumulado
                let promedio = 0;

                // se recorren las notas para sumarlas del alumno
                for(j=0; j < 5 ; j++){
                    promedio = curso[i].notas[j] + promedio
                }
                // valido que si el promedio es menor a 4  va a reforzamiento
                if(Math.round(promedio/5) < 4 ){
                    console.log(`El Alumno ${curso[i].nombre} va reforzamiento. promedio: ${Math.round(promedio/5)}`);
                }
            }

            break;

        case '3':
            prompt('3');
            break;
        
        default:
            prompt('opcion no valida')

    }

}


// mostrar la lista de los alumnos a calificar 
console.log(curso)

function alumnoReforzamiento() {
    let primeraCalificacion = prompt("Indique 'logrado' o 'no logrado' para la primera calificacion");
    let segundaCalificacion = prompt("Indique 'logrado' o 'no logrado' para la segunda calificacion");
    let resultado;
    if (primeraCalificacion.toLowerCase() === primeraNota && segundaCalificacion.toLowerCase() === segundaNota) {
        resultado = "El estudiante " + alumno + " SI debe ir a reforzamiento";
    } else { 
        resultado = "El estudiante " + alumno + " NO debe ir a reforzamiento";
    } 

    alert(resultado);
}





