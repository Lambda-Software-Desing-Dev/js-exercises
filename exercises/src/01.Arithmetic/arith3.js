export function arith3Html() {
    return `
<h2>Capitulo 01 - Aritmetica Basica</h2>
<h3>Ejercicio 3 - Promedio de Edades</h3>
<p>
    En este ejercicio debemos declarar en distintas variables, la edad de los integrantes de nuestra familia.</br>
    Una vez declaradas estas variables como numeros enteros</br>
    Debemos realizar el promedio de las edades y mostrarlo por consola</br>
    Recorda que el promedio se realiza sumando todos los valores y dividiendo por la cantidad.</br>
    En este caso deberias sumar todas las edades y luego dividir por la cantidad de integrantes de tu familia</br>
    Si queres saber como resolver este ejercicio hace click en "Resoluci&oacute;n"
</p>
<details>
    <summary>Resoluci&oacute;n</summary>
    <pre>
let edadPapa = 62
let edadMama = 60
let edadHermana = 40
let miEdad = 35
let promedio = (edadPapa + edadMama + edadHermana + miEdad) / 4
console.log("El promedio de Edades en mi familia es de: " + promedio)
    </pre>
</details>
`
}