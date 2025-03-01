export async function exercise1(content) {
    content.innerHTML = await (await fetch('./src/00 - Introduction/intro1.html')).text()
}