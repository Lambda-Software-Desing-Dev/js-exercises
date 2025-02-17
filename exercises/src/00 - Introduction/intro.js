import { exercise1 } from './exercise1'

export async function intro(element) {
    element.innerHTML = await (await fetch('./src/00 - Introduction/intro0.html')).text()

    document.querySelector("#prev").style.display = 'none'
    document.querySelector("#next").addEventListener('click', async () =>
    {
        await exercise1(element)
    })
}