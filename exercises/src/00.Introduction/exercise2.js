export async function exercise2(content) {
    content.innerHTML = await (await fetch('./src/00.Introduction/intro2.html')).text()
}