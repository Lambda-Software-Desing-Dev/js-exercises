export async function exercise3(element) {
    element.innerHTML = await (await fetch('./src/00 - Introduction/intro3.html')).text()
}