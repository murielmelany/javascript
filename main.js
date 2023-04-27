/* Curso medio-mayor, Jardin "Rayito de sol". Total 10 alumnos.
Al profesor le indicaron que todos los niños que en sus 2 primeras evaluaciones tuvieron una calificacion 
"no logrado" deberian ir a clases de reforzamiento con el psicopedagogo. */

// tenemos que confirmar que alumno cumple las condiciones para ir a refozamiento//

const primeraNota = "no logrado";
const segundaNota = "no logrado";

let alumno = "";
while (alumno != "salir") {
    alumno = prompt("Ingrese nombre del alumno: (Ingrese salir si desea parar) ").toLowerCase();
    if (alumno === "salir") {
        alert("Gracias, buen dia!");
        break;
    }

    alumnoReforzamiento();
}

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





