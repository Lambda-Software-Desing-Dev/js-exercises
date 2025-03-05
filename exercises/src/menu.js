import { intro0 } from './00.Introduction/intro'
import { arith0 } from './01.Arithmetic/arith0'
import { string0 } from './02.Strings/string0'

export function menuHtml() {
    return  `
<div class="dropdown">
    <button class="dropbtn">Menu</button>
    <div class="dropdown-content">
      <a id="cap0" href="#">Capitulo 00</a>
      <a id="cap1" href="#">Capitulo 01</a>
      <a id="cap2" href="#">Capitulo 02</a>
    </div>
</div>
`
}

export function setMenu() {

    let content = document.querySelector('#content')

    document.querySelector("#cap0").addEventListener('click', () =>
    {
        intro0(content, true)
    })
    
    document.querySelector("#cap1").addEventListener('click', async function cap1()
    {
        await arith0(content, true)
    })
    /*
    document.querySelector("#cap2").addEventListener('click', async function cap2()
    {
        await string0(content, true)
    })*/
}