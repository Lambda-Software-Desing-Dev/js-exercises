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
    Comenzaremos declarando dos variables numericas, pueden ser valores enteros o decimales<br />
    luego mostraremos por consola el resulado de la suma de esas 2 variables <br />
    recorda utilizar nombres apropiados para tus variables, y no algo generico <br />
    como 'variable1', 'variable2', 'x', 'y', etc<br />
    Si desea ver como resolver este ejercicio haga click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let primerSumando = 200.05
let segundoSumando = 400.10
let resulado = primerSumando + segundoSumando
console.log("El resultado de la suma es: " + resulado.toFixed(2))
    </pre>
</details>
`
}