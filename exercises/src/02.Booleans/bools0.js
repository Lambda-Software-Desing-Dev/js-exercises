import { setNav2 } from './nav2'

export function bools0(content, setNav) {
    content.innerHTML = bools0Html()
    
    if(setNav) {
        setNav2(content)
    }
}

function bools0Html() {
    //TODO: Excercise 0 -> Greater than 18 (use Confirm)
    //TODO: Excercise 1 -> Validate sequence equal to '1234' (use Prompt)
    //TODO: Excercise 2 -> Greater than 18 (use Prompt)
    //TODO: Excercise 3 -> Validate range between 0 - 10 (use Prompt)
    //TODO: Excercise 4 -> Vote Validator (use 2 Confirm - AND operator)
    //TODO: Excercise 5 -> IT Background Requests (use 3 Confirm - OR operator)
    return `<h2>Capitulo 02 - Booleanos</h2>
<h3>Ejercicio 0</h3>
<p></p>`
}