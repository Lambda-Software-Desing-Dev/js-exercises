import { arith1 } from './arith1'
import { setMenu } from '../menu'

export async function arith0(content, setNav) {
    content.innerHTML = await (await fetch('./src/01 - Arithmetic/Arith0.html')).text()
    
    if(setNav) {
        setNavigation(content)
    }
}

async function setNavigation(content) {

    document.querySelector("#nav").innerHTML = await (await fetch('./src/01 - Arithmetic/nav.html')).text()
    document.querySelector("#menu").innerHTML = await (await fetch('./src/menu.html')).text()
    setMenu()
    
    document.querySelector("#arith0").addEventListener('click', async () =>
    {
        await arith0(content, false)
    })

    document.querySelector("#arith1").addEventListener('click', async () =>
    {
        await arith1(content)
    })
}
