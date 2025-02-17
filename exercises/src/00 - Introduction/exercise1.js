import { intro } from './intro'

export async function exercise1(element) {
    element.innerHTML = await (await fetch('./src/00 - Introduction/intro1.html')).text()
    
    let prev = document.querySelector("#prev")
    prev.style.display = 'block'
    prev.addEventListener('click', async () =>
    {
        intro(element)
    })
    
    let next = document.querySelector("#next")
    next.removeEventListener('click')
    next.addEventListener('click', async () =>
    {
        //exercise2(element)
    })
}