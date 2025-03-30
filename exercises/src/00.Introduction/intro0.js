import { setNav0 } from './nav0'

export function intro0(content, setNav) {
    content.innerHTML = introHtml()

    if(setNav) {
        setNav0(content)
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