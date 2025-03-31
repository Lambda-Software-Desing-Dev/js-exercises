import { setNav3 } from './nav3'

export function string0(content, setNav) {
    content.innerHTML = string0Html()
    
    if(setNav) {
        setNav3(content)
    }
}

export function string0Html() {
    //TODO: Excercise 0 -> Get fixed length
    //TODO: Excercise 1 -> Get variable length with prompt
    //TODO: Excercise 2 -> Concatenate strings & format with ${}
    //TODO: Excercise 3 -> Upper, Lower & Trim
    //TODO: Excercise 4 -> Replace & Slice
    //TODO: Excercise 5 -> Revert & Palindrome
    return `<h2>Capitulo 03 - Manejo de Strings</h2><h3>Ejercicio 0</h3><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>`
}