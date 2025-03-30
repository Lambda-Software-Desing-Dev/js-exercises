import { menuHtml, setMenu } from '../menu'
import { intro0 } from './intro0'
import { intro1Html } from './intro1'
import { intro2Html } from './intro2'
import { intro3Html } from './intro3'

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
        content.innerHTML = intro1Html()
    })

    document.querySelector("#intro2").addEventListener('click', () =>
    {
        content.innerHTML = intro2Html()
    })

    document.querySelector("#intro3").addEventListener('click', () =>
    {
        content.innerHTML = intro3Html()
    })
}