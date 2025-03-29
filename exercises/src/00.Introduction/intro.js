import { exercise1Html } from './exercise1'
import { exercise2Html } from './exercise2'
import { exercise3Html } from './exercise3'
import { nav0Html } from './nav0'
import { menuHtml, setMenu } from '../menu'

export function intro0(content, setNav) {
    content.innerHTML = introHtml()

    if(setNav) {
        setNavigation(content)
    }
}

function introHtml() {
    return `
    <h2>Capitulo 00 - Introducci&oacute;n</h2>
    <h3>Ejercicio 0</h3>
    <p>
        En este capitulo realizaremos ejercicios basicos de Javascript. <br />
        Comenzaremos declarando una variable, asignadole el valor <span style="font-family:courier;">'Hola Mundo'</span><br />
        y mostrando el resultado por consola. <br />
        Si desea ver como resolver este ejercicio haga click en "Resoluci&oacute;n"
    </p>
    <details>
        <summary>Resoluci&oacute;n</summary>
        <pre>
    let gretting = "Hola Mundo!"
    console.log(gretting)
        </pre>
    </details>
`
}

async function setNavigation(content) {
    document.querySelector("#nav").innerHTML = nav0Html()
    document.querySelector("#menu").innerHTML = menuHtml()
    setMenu()

    document.querySelector("#intro0").addEventListener('click', async () =>
    {
        intro0(content, false)
    })

    document.querySelector("#intro1").addEventListener('click', () =>
    {
        content.innerHTML = exercise1Html()
    })

    document.querySelector("#intro2").addEventListener('click', () =>
    {
        content.innerHTML = exercise2Html()
    })

    document.querySelector("#intro3").addEventListener('click', () =>
    {
        content.innerHTML = exercise3Html()
    })
}