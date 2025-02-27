import { intro00 } from './00 - Introduction/intro'
import { intro01 } from './01 - Arithmetic/intro'
import { intro02 } from './02 - Strings/intro'

export async function setMenu() {

    let content = document.querySelector('#content')

    document.querySelector("#cap0").addEventListener('click', async function cap0()
    {
        await intro00(content, true)
    })

    document.querySelector("#cap1").addEventListener('click', async function cap1()
    {
        await intro01(content, true)
    })

    document.querySelector("#cap2").addEventListener('click', async function cap2()
    {
        await intro02(content, true)
    })
}