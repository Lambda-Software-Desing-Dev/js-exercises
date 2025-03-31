import { setNav1 } from './nav1'

export function arith0(content, setNav) {
    content.innerHTML = arith0Html()
    
    if(setNav) {
        setNav1(content)
    }
}

function arith0Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 0</h3>
<p>
    En este capitulo realizaremos operaciones aritmeticas basicas<br />
    Comenzaremos declarando dos variables numericas, pueden ser valores enteros o decimales.<br />
    Primero debemos mostrar por consola el resulado de la suma de esas 2 variables.<br />
    Luego tomaremos las mismas variables, las restamos y mostramos el resultado por consola.<br />
    Multiplicamos las mismas y mostramos el resultado por consola.<br />
    Por ultimo dividirlas y mostrarlo por consola<br />
    intenta utilizar nombres apropiados para tus variables, y no algo generico <br />
    como 'variable1', 'variable2', 'x', 'y', etc<br />
    Si queres saber como resolver este ejercicio hace click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let primerFactor = 20.20
let segundoFactor = 10.10
let suma = primerFactor + segundoFactor
let resta = primerFactor - segundoFactor
let multiplicacion = primerFactor * segundoFactor
let division = primerFactor / segundoFactor
console.log("El resultado de la suma es: " + suma.toFixed(2))
console.log("El resultado de la resta es: " + resta)
console.log("El resultado de la multiplicacion es: " + multiplicacion.toFixed(2))
console.log("El resultado de la division es: " + division)
    </pre>
</details>
`
}