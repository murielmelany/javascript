// /* Curso kinder, Colegio "Rayito de sol";
// Todos los alumnos que en su promedio de notas no superen 4.0 deben asistir a reforzamiento 
// El sistema pide que ingrese nombre y apellido del alumno y sus 5 calificaciones */


// obtener los alumnos desde el localStorage
// agregar un nuevo alumno al localStorage

let curso = [];

document.addEventListener('DOMContentLoaded', function () {

    curso = JSON.parse(localStorage.getItem("curso")) || [];

    if (curso.length > 0) {

        curso.forEach((alumno, index) => {
            let promedioFilter = 0;

            // sumar las notas del alumno

            for (j = 0; j < 5; j++) {
                promedioFilter = parseFloat(alumno.notas[j]) + promedioFilter
            }

            const promedioFinal = promedioFilter / 5;


            let tableRef = document.getElementById("tablaCurso").getElementsByTagName('tbody')[0];
            tableRef.insertRow().innerHTML =
                "<th scope='row'>" + (index + 1).toString() + "</th>" +
                "<td>" + alumno.nombre + "</td>" +
                "<td>" + alumno.notas + "</td>" +
                "<td>" + promedioFinal.toFixed(1) + "</td>" +
                "<td>" + (promedioFinal.toFixed(1) >= 4 ? ("<p class='text-white bg-success text-center'> No va a Reforzamiento</p>") : ("<p class='text-white bg-danger text-center'> Va a Reforzamiento</p>")) + "</td>" +
                "<td>" + "<button class='btn btn-danger' id='" + alumno.nombre + "'>" + "borrar" + "</button>" + "</td>";

            document.getElementById(alumno.nombre).addEventListener('click', function () {

                
                let row = this.parentNode.parentNode;
                // Eliminar la fila de la tabla
                row.parentNode.removeChild(row);
                curso = curso.filter((cursoAlumno) => cursoAlumno.nombre !== alumno.nombre)
                localStorage.setItem("curso", JSON.stringify(curso));

            })
        });


    }

    

});



document.getElementById("agregarAlumno").addEventListener('submit', function (e) {
    e.preventDefault();
    const nombreAlumno = document.getElementById("nombreAlumno").value;
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    const nota4 = document.getElementById("nota4").value;
    const nota5 = document.getElementById("nota5").value;

    curso.push({
        nombre: nombreAlumno,
        notas: [nota1, nota2, nota3, nota4, nota5]
    });

    localStorage.setItem("curso", JSON.stringify(curso));
    let tableRef = document.getElementById("tablaCurso").getElementsByTagName('tbody')[0];
    let promedioFilter = 0;
    for (j = 0; j < 5; j++) {
        promedioFilter = parseFloat([nota1, nota2, nota3, nota4, nota5][j]) + promedioFilter
    }

    const promedioFinal = promedioFilter / 5;

    tableRef.insertRow().innerHTML =
        "<th scope='row'>" + (curso.length + 1).toString() + "</th>" +
        "<td>" + nombreAlumno + "</td>" +
        "<td>" + [nota1, nota2, nota3, nota4, nota5] + "</td>" +
        "<td>" + promedioFinal.toFixed(1) + "</td>" +
        "<td>" + (promedioFinal.toFixed(1) >= 4 ? ("<p class='text-white bg-success text-center'> No va a Reforzamiento</p>") : ("<p class='text-white bg-danger text-center'> Va a Reforzamiento</p>")) + "</td>" +
        "<td>" + "<button class='btn btn-danger' id='" + nombreAlumno + "'>" + "borrar" + "</button>" + "</td>";

        document.getElementById(nombreAlumno).addEventListener('click', function () {

            
            let row = this.parentNode.parentNode;
            // Eliminar la fila de la tabla
            row.parentNode.removeChild(row);
            curso = curso.filter((cursoAlumno) => cursoAlumno.nombre !== nombreAlumno)
            localStorage.setItem("curso", JSON.stringify(curso));

        })
   


});





// const promedioNotas = (cursoActual) => {

//     //seleccionar el alumno para mostrar el promedio
//     // Recorrer la lista para mostrar los nombres de los alumnos

//     let listaAlumnos = `Escriba el nombre del alumno: \n`;
//     cursoActual.forEach((al, index) => {
//         listaAlumnos = listaAlumnos + `${al.nombre} \n`
//     });

//     const alumnoSeleccionado = prompt(listaAlumnos);

//     const alumnoEncontrado = cursoActual.find((al) => {

//         return alumnoSeleccionado === al.nombre
//     });

//     if (alumnoEncontrado !== undefined) {

//         //con este for vamos a recorrer las notas del alumno encontrado

//         let acumulador = 0;
//         for (i = 0; i < 5; i++) {
//             acumulador = acumulador + alumnoEncontrado.notas[i];
//         }

//         alert('El Promedio del alumno es: ' + (acumulador / 5).toFixed(1));
//     } else {
//         alert('Alumno no existe')
//     }

// }

// //Aca se ingresan los datos del alumno y sus notas.

// let alumno = "";
// let notas = [];
// const curso = [];

// while (alumno != "salir") {
//     alumno = prompt("Ingrese nombre y apellido del alumno: (Ingrese salir para terminar) ").toLowerCase();

//     if (alumno === "salir") {
//         alert("Datos almacenados");
//         break;
//     }
//     while (notas.length !== 5) {
//         const notaIngresada = prompt(`Ingrese las 5 notas del alumno: `);
//         if (isNaN(notaIngresada)) {
//             alert('Numero invalido')
//         } else {
//             notas.push(parseFloat(notaIngresada))
//         }

//     }
//     curso.push({
//         nombre: alumno,
//         notas
//     });

//     notas = [];

// }

// let opcion = ''

// // El usuario escoge la opcion a mostrar

// while (opcion !== 'salir') {
//     opcion = prompt(
//         'Que opción desea ejecutar\n' +
//         '\t 1: Mostrar alumnos que pasaron \n ' +
//         '\t 2: Mostrar los alumnos que se van a reforzamiento \n ' +
//         '\t 3: Mostrar promedio del alumno \n ' +
//         'Escriba "salir" si desea parar');
//     if (opcion === "salir") {
//         alert("Gracias, buen dia!");
//         break;
//     }

//     switch (opcion) {

//         case '1':

//             // esta funcion filtra a los alumnos que tengan un promedio mayor o igual a 4

//             const resultadoDelFiltro = curso.filter((alumno) => {

//                 let promedioFilter = 0;

//                 // sumar las notas del alumno

//                 for (j = 0; j < 5; j++) {
//                     promedioFilter = alumno.notas[j] + promedioFilter
//                 }

//                 // se hace la validacion si el promedio es mayor o igual a 4

//                 return promedioFilter / 5 >= 4;
//             });
//             let resultadoAlert = ""

//             // con el array resultante del filtrado se muestran los alumnos que no van a reforzamiento

//             resultadoDelFiltro.forEach((alumno) => {

//                 resultadoAlert = resultadoAlert + `El Alumno ${alumno.nombre} NO va a reforzamiento. \n`
//             });

//             alert(resultadoAlert);

//             break;

//         case '2':

//             const resultadoDelFiltroDos = curso.filter((alumno) => {

//                 let promedioFilter = 0;

//                 for (j = 0; j < 5; j++) {
//                     promedioFilter = alumno.notas[j] + promedioFilter
//                 }

//                 return promedioFilter / 5 < 4;
//             });
//             let resultadoAlertDos = ""
//             resultadoDelFiltroDos.forEach((alumno) => {
//                 resultadoAlertDos = resultadoAlertDos + `El Alumno ${alumno.nombre} va a reforzamiento. \n`
//             });

//             alert(resultadoAlertDos);

//             break;

//         case '3':

//             promedioNotas(curso);
//             break;

//     }
// }

