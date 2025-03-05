export function exercise2Html() {
    return `
<h2>Capitulo 00 - Introducci&oacute;n</h2>
<h3>Ejercicio 2</h3>
<p>
    En el segundo ejercicio de Introducci&oacute;n,<br />
    vamos a mostrar una ventana modal de confirmaci&oacute;n<br />
    utilizando la sentencia <pre>confirm</pre> con el mensaje "Desea continuar con los ejercicios?"<br />
    y mostrando por consola la opcion seleccionada
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>let response = confirm("Desea continuar con los ejercicios?")<br />console.log(response)</pre>
</details>
`
}