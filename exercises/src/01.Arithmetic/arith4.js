export function arith4Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 4 - Promedio de Notas</h3>
<p>
    Como ejercicio final vamos a utilizar herramientas del Capitulo 00 con lo aprendido en este Capitulo<br />
    Vamos a crear un programa para calcular la nota final de la materia "Algoritmos"<br />
    Utilizando la funcion <span style="font-family:courier;">prompt</span> ingresaremos por pantalla<br />
    la nota de los 3 trimestres y mostrar en una ventana modal el resultado.<br />
    Tene en cuenta que la funcion <span style="font-family:courier;">prompt</span> devuelve valores del tipo string, por lo que recomiendo<br />
    utilizar <span style="font-family:courier;">parseFloat</span> para convertir los resultados ingresados por pantalla a valores decimales<br />
    Si queres saber como resolver este ejercicio hace click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let notaUnoString = prompt("Ingrese la nota del 1° trimestre", 6.5)
let notaTrimestreUno = parseFloat(notaUnoString)
let notaDosString = prompt("Ingrese la nota del 2° trimestre", 8.5)
let notaTrimestreDos = parseFloat(notaDosString)
let notaTresString = prompt("Ingrese la nota del 3° trimestre", 7.2)
let notaTrimestreTres = parseFloat(notaTresString)
let sumaNotas = notaTrimestreUno + notaTrimestreDos + notaTrimestreTres
let promedio = sumaNotas / 3
alert("La nota final de la materia 'Algoritmos' es: " + promedio.toFixed(2))
    </pre>
</details>
`
}