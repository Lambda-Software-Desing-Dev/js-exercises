export function arith3Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 3</h3>
<p>
    Como ejercicio final vamos a utilizar herramientas del Capitulo 00 con lo aprendido en este<br />
    Vamos a crear un programa para calcular la nota final de la materia "Algoritmos"<br />
    Utilizando la funcion <span style="font-family:courier;">Prompt</span> ingresaremos por pantalla<br />
    la nota de los 3 trimestres y mostrar por consola el resultado.<br />
    Tene en cuenta que la funcion Prompt devuelve valores del tipo string, por lo que recomiendo utilizar <span style="font-family:courier;">parseFloat</span><br />
    para convertir los resultados ingresados por pantalla a valores decimales
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let notaTrimestreUno = parseFloat(prompt("Ingrese la nota del 1° trimestre", 6.5))
let notaTrimestreDos = parseFloat(prompt("Ingrese la nota del 2° trimestre", 8.5))
let notaTrimestreTres = parseFloat(prompt("Ingrese la nota del 3° trimestre", 7.2))
let sumaNotas = notaTrimestreUno + notaTrimestreDos + notaTrimestreTres
let promedio = sumaNotas / 3
console.log("La nota final de la materia 'Algoritmos' es: " + promedio.toFixed(2))
    </pre>
</details>
`
}