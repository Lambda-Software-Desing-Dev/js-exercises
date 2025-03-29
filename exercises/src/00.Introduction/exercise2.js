export function exercise2Html() {
    return `
<h2>Capitulo 00 - Introducci&oacute;n</h2>
<h3>Ejercicio 2</h3>
<p>
    En el segundo ejercicio de Introducci&oacute;n,<br />
    vamos a mostrar una ventana modal de confirmaci&oacute;n utilizando la sentencia <span style="font-family:courier;">confirm</span><br />
    con el mensaje "Desea continuar con los ejercicios?" y mostrando por consola la opcion seleccionada
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let response = confirm("Desea continuar con los ejercicios?")
console.log(response)
    </pre>
</details>
`
}