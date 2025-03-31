export function intro3Html() {
    return `
<h2>Capitulo 00 - Introducci&oacute;n</h2>
<h3>Ejercicio 3</h3>
<p>
    En el tercer ejercicio de Introducci&oacute;n,<br />
    debemos ingresar un nombre por parametro mediante la sentencia <span style="font-family:courier;">prompt</span><br />
    y luego mostrar dicho valor por consola.<br />
    Si deseas ver como resolver este ejercicio hace click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let name = prompt("Ingrese su nombre", "Jonh Doe")
console.log("Su nombre es: " + name)
    </pre>
</details>
`
}