export function callHtml(element) {
    element.innerHTML = `
    <h2>00 - Introduccion</h2>
    <p>
        En este capitulo realizaremos ejercicios basicos de Javascript. <br />
        Comenzaremos declarando una variable, asignadole el valor 'Hola Mundo' <br />y mostrando el resultado por consola. <br />
    
        Si desea ver como resolver este ejercicio haga click en "Resoluci&oacute;n"
    </p>
    <details>
        <summary>Resoluci&oacute;n</summary>
        <pre>let gretting = "Hola Mundo!"<br />console.log(gretting)</pre>
    </details>
    `
}