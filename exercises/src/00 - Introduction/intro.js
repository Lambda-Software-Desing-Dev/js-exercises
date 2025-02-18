import { exercise1 } from './exercise1'
import { exercise2 } from './exercise2'
import { exercise3 } from './exercise3'

export async function intro(element, setNav) {
    element.innerHTML = await (await fetch('./src/00 - Introduction/intro0.html')).text()

    if(setNav) {
        setNavigation(element)
    }
}

async function setNavigation(element) {

    document.querySelector("#intro0").addEventListener('click', async function intro0()
    {
        await intro(element, false)
    })

    document.querySelector("#intro1").addEventListener('click', async function intro1()
    {
        await exercise1(element)
    })

    document.querySelector("#intro2").addEventListener('click', async function intro2()
    {
        await exercise2(element)
    })

    document.querySelector("#intro3").addEventListener('click', async function intro3()
    {
        await exercise3(element)
    })
}