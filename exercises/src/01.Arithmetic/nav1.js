import { menuHtml, setMenu } from '../menu'
import { arith0 } from './arith0'
import { arith1Html } from './arith1'
import { arith2Html } from './arith2'
import { arith3Html } from './arith3'
import { arith4Html } from './arith4'

export function nav1Html() {
    return `
<ul class="nav">
    <li id="menu"></li>
    <li><a class="tab" href="#" id="arith0">Ejercicio 0</a></li>
    <li><a class="tab" href="#" id="arith1">Ejercicio 1</a></li>
    <li><a class="tab" href="#" id="arith2">Ejercicio 2</a></li>
    <li><a class="tab" href="#" id="arith3">Ejercicio 3</a></li>
    <li><a class="tab" href="#" id="arith4">Ejercicio 4</a></li>
</ul>
`
}

export function setNav1(content) {

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

    document.querySelector("#arith4").addEventListener('click', () =>
    {
        content.innerHTML = arith4Html()
    })
}