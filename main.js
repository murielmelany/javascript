/* Curso medio-mayor, Jardin "Rayito de sol". Total 10 alumnos.
Al profesor le indicaron que todos los niños que en sus 2 primeras evaluaciones tuvieron una calificacion 
"no logrado" deberian ir a clases de reforzamiento con el psicopedagogo. */

// tenemos que evaluar las notas para saber si el alumno va a refozamiento

const primeraNota = "no logrado";
const segundaNota = "no logrado";

let alumno = "";
while (alumno != "salir") {
    alumno = prompt("Ingrese nombre del alumno: (Ingrese salir si desea parar) ");
    if (alumno === "salir") {
        alert("Gracias,Buen dia!");
        break;
    }
    let primeraCalificacion = prompt("Indique logrado o no logrado para la primera calificacion");
    let segundaCalificacion = prompt("Indique logrado o no logrado para la segunda calificacion");

    if (primeraCalificacion === primeraNota && segundaCalificacion === segundaNota) {
        alert(alumno + " SI debe ir a reforzamiento");
    } else {
        alert(alumno + " NO debe ir a reforzamiento");
    }

}






