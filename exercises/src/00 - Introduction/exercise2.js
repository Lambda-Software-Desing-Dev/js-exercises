export async function exercise2(element) {
    element.innerHTML = await (await fetch('./src/00 - Introduction/intro2.html')).text()
}