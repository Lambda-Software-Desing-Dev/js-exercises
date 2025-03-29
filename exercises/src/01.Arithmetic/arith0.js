import { nav1Html } from './nav1'
import { menuHtml, setMenu } from '../menu'
import { arith1Html } from './arith1'
import { arith2Html } from './arith2'
import { arith3Html } from './arith3'

export function arith0(content, setNav) {
    content.innerHTML = arith0Html()
    
    if(setNav) {
        setNavigation(content)
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

async function setNavigation(content) {

    document.querySelector("#nav").innerHTML = nav1Html()
    document.querySelector("#menu").innerHTML = menuHtml()
    setMenu()
    
    document.querySelector("#arith0").addEventListener('click', () =>
    {
        arith0(content, false)
    })

    document.querySelector("#arith1").addEventListener('click', () =>
    {
        content.innerHTML = arith1Html()
    })
    
    document.querySelector("#arith2").addEventListener('click', () =>
    {
        content.innerHTML = arith2Html()
    })

    document.querySelector("#arith3").addEventListener('click', () =>
    {
        content.innerHTML = arith3Html()
    })
}
