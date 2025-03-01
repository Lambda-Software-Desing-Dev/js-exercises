export async function arith1(content) {
    content.innerHTML = await (await fetch('./src/01 - Arithmetic/arith1.html')).text()
}