export function callHtml(element) {
    element.innerHTML = `
    <h2>00 - Introduccion</h2>
    <p>
        En este capitulo realizaremos ejercicios basicos de Javascript. <br />
        Comenzaremos declarando una variable, asignadole el valor 'Hola Mundo' <br />y mostrando el resultado por consola. <br />
    
        Si desea ver como resolver este ejercicio haga click en "Resolucion"
        <details>
            <summary>Resolucion</summary>
            <pre>
                let gretting = "Hola Mundo!"
                console.log(gretting)
            </pre>
        </details>
    </p>
    <iframe src="https://www.jsplayground.dev/" title="jsplayground" width="640px" height="480px">
    </iframe>

    <p>Agradecimientos especiales a <a href="https://www.jsplayground.dev/">jsplayground.dev</a>
    por facilitar este entorno</p>
    `
}