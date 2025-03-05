export async function exercise3(content) {
    content.innerHTML = await (await fetch('./src/00.Introduction/intro3.html')).text()
}

export function exercise3Html() {
    return `
<h2>Capitulo 00 - Introducci&oacute;n</h2>
<h3>Ejercicio 3</h3>
<p>
    En el tercer ejercicio de Introducci&oacute;n,<br />
    debemos ingresar un nombre por parametro mediante la sentencia prompt<br />
    y luego mostrar dicho valor por consola.
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>let name = prompt("Ingrese su nombre", "Jonh Doe")<br />console.log("Su nombre es: " + name)</pre>
</details>
`
}