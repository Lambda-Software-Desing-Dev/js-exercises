export function arith1Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 1</h3>
<p>
    Ahora veremos como realizar una potencia y una raiz cuadrada<br />
    Para ello podemos usar las funciones <span style="font-family:courier;">Math.pow()</span> y <span style="font-family:courier;">Math.sqrt()</span> respectivamente<br />
    Si queres saber como resolver este ejercicio hace click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let potenciaDeCuatro = Math.pow(4, 2)
let raizDeCuatro = Math.sqrt(4)
console.log("El resultado de elevar 4 al cuadrado es: " + potenciaDeCuatro)
console.log("La raiz cuadrada de 4 es: " + raizDeCuatro)
    </pre>
</details>
`
}