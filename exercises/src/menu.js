import { intro0 } from './00.Introduction/intro'
import { arith0 } from './01 - Arithmetic/arith0'
import { string0 } from './02 - Strings/string0'

export async function setMenu() {

    let content = document.querySelector('#content')

    document.querySelector("#cap0").addEventListener('click', async function cap0()
    {
        await intro0(content, true)
    })

    document.querySelector("#cap1").addEventListener('click', async function cap1()
    {
        await arith0(content, true)
    })

    document.querySelector("#cap2").addEventListener('click', async function cap2()
    {
        await string0(content, true)
    })
}