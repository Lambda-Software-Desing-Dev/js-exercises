export async function exercise1(element) {
    element.innerHTML = await (await fetch('./src/00 - Introduction/intro1.html')).text()
}