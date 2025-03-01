import { exercise1 } from './exercise1'
import { exercise2 } from './exercise2'
import { exercise3 } from './exercise3'

export async function intro0(content, setNav) {
    content.innerHTML = await (await fetch('./src/00.Introduction/intro0.html')).text()

    if(setNav) {
        setNavigation(content)
    }
}

async function setNavigation(content) {

    document.querySelector("#intro0").addEventListener('click', async () =>
    {
        await intro0(content, false)
    })

    document.querySelector("#intro1").addEventListener('click', async () =>
    {
        await exercise1(content)
    })

    document.querySelector("#intro2").addEventListener('click', async () =>
    {
        await exercise2(content)
    })

    document.querySelector("#intro3").addEventListener('click', async () =>
    {
        await exercise3(content)
    })
}