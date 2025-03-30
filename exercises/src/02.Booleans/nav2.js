import { menuHtml, setMenu } from '../menu'
import { bools0 } from './bools0'

export function nav2Html() {
    return `
<ul class="nav">
    <li id="menu"></li>
    <li><a class="tab" href="#" id="bools0">Ejercicio 0</a></li>
</ul>
`
}

export function setNav2(content) {

    document.querySelector("#nav").innerHTML = nav2Html()
    document.querySelector("#menu").innerHTML = menuHtml()
    setMenu()
    
    document.querySelector("#bools0").addEventListener('click', () =>
    {
        bools0(content, false)
    })
}