export function arith2Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 2</h3>
<p>
    En el ejercicio 2 aprenderemos como programar un 'acumulador' de 1 en 1.<br />
    Para ello vamos a declarar una variable numerica del tipo entero con el valor cero y mostrar su valor por consola.<br />
    Luego realizaremos la operacion <span style="font-family:courier;">+= 1</span> sobre esta variable, mostrandolo por consola<br />
    Repetiremos esta operacion 3 veces mas (Con un total de 4 acumulaciones) <br />
    El resultado por consola deberia ser el siguente:<br />
    <pre>
0
1
2
3
4
    </pre>
    Hay otra forma en la que podemos incrementar el valor de una variable numerica en 1.<br />
    Es utilizando el operador <span style="font-family:courier;">++</span>, dejo que lo investigues por tu cuenta<br />
    Esta ultima puede ayudarte a resolver este ejercicio en menos lineas de codigo que la propuesta mas abajo.<br />
    Si queres saber como resolver este ejercicio con el operador <span style="font-family:courier;">+= 1</span> hace click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let acumulador = 0
console.log(acumulador)
acumulador += 1
console.log(acumulador)
acumulador += 1
console.log(acumulador)
acumulador += 1
console.log(acumulador)
acumulador += 1
console.log(acumulador)
    </pre>
</details>
`
}