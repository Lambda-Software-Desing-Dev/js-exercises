import { menuHtml, setMenu } from '../menu'
import { intro0 } from './intro0'
import { exercise1Html } from './exercise1'
import { exercise2Html } from './exercise2'
import { exercise3Html } from './exercise3'

export function nav0Html() {
    return `
<ul class="nav">
    <li id="menu"></li>
    <li><a class="tab" href="#" id="intro0">Ejercicio 0</a></li>
    <li><a class="tab" href="#" id="intro1">Ejercicio 1</a></li>
    <li><a class="tab" href="#" id="intro2">Ejercicio 2</a></li>
    <li><a class="tab" href="#" id="intro3">Ejercicio 3</a></li>
</ul>
`
}

export function setNav0(content) {
    document.querySelector("#nav").innerHTML = nav0Html()
    document.querySelector("#menu").innerHTML = menuHtml()
    setMenu()

    document.querySelector("#intro0").addEventListener('click', () =>
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