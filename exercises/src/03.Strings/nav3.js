import { menuHtml, setMenu } from '../menu'
import { string0 } from './string0'

export function nav3Html() {
    return `
<ul class="nav">
    <li id="menu"></li>
    <li><a class="tab" href="#" id="string0">Ejercicio 0</a></li>
</ul>
`
}

export function setNav3(content) {

    document.querySelector("#nav").innerHTML = nav3Html()
    document.querySelector("#menu").innerHTML = menuHtml()
    setMenu()
    
    document.querySelector("#string0").addEventListener('click', () =>
    {
        string0(content, false)
    })
}