export async function exercise3(content) {
    content.innerHTML = await (await fetch('./src/00 - Introduction/intro3.html')).text()
}