const estudiantes = [
{ nombre: "Ana", nota: 4.5 },
{ nombre: "Luis", nota: 3.2 },
{ nombre: "Carlos", nota: 2.8 },
{ nombre: "Sofía", nota: 4.8 },
{ nombre: "María", nota: 3.9 }
];

const nombreEstudiante = estudiantes.map(estudiantes =>estudiantes.nombre);
console.log(nombreEstudiante);

const notasEst = estudiantes.filter(estudiantes => estudiantes.nota >= 3);
console.log(notasEst);

const notaMayor = estudiantes.find(estudiantes => estudiantes.nota > 4.5);
console.log(notaMayor);