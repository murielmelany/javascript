
// Todos los alumnos que en su promedio de notas no superen 4.0 deben asistir a reforzamiento 
// El sistema pide que ingrese nombre y apellido del alumno y sus 5 calificaciones


// obtener los alumnos desde el localStorage
// agregar un nuevo alumno al localStorage

let curso = [];
const url_base = "https://api.generadordni.es/v2/profiles/person?results=1&include_fields=name,surname";

document.addEventListener('DOMContentLoaded', async function () {



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

// agregar alumno desde al api

document.getElementById("agregarDesdeApi").addEventListener('click', async function () {

    try {
        const response = await fetch(url_base);
        const jsonData = await response.json();
        var min = 1;
        var max = 7;

        const nombreAlumno = jsonData[0].name + " "+jsonData[0].surname
        const nota1 = Math.floor(Math.random()*(max-min+1)+min);
        const nota2 = Math.floor(Math.random()*(max-min+1)+min);
        const nota3 = Math.floor(Math.random()*(max-min+1)+min);
        const nota4 = Math.floor(Math.random()*(max-min+1)+min);
        const nota5 = Math.floor(Math.random()*(max-min+1)+min);

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
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                background: '#e3001b',
                color: "white",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Alumno eliminado'
            })
        });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Alumno agregado!'
        })




    } catch (e) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            background: '#e3001b',
            color: "white",
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Fallo en obtener datos de una Api'
        })
    }

    

})



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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            background: '#e3001b',
            color: "white",
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Alumno eliminado'
        })
    });
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Alumno agregado!'
    })



});
