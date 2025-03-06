/*export async function arith1(content) {
    content.innerHTML = await (await fetch('./src/01 - Arithmetic/arith1.html')).text()
}
*/
export function arith1Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 1</h3>
<p>
    Vamos a ponerle un poco mas de ritmo<br />
    Declararemos otras dos variables numericas, pueden ser valores enteros o decimales<br />
    pero en este caso vamos a restarlas y mostrarlo por consola<br />
    multiplicar las mismas variables y mostrarlo por consola<br />
    y por ultimo dividirlas y mostrarlo por consola<br />
    Si desea ver como resolver este ejercicio haga click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let primerFactor = 20.20
let segundoFactor = 10.10
let resta = primerFactor - segundoFactor
let multiplicacion = primerFactor * segundoFactor
let division = primerFactor / segundoFactor
console.log("El resultado de la resta es: " + resta)
console.log("El resultado de la multiplicacion es: " + multiplicacion.toFixed(2))
console.log("El resultado de la division es: " + division)
    </pre>
</details>
`
}