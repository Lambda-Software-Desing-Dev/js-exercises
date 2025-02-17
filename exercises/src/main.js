import './style.css'
import lambdaLogo from '/lambdaSD&D.svg'
import { callHtml } from './00 - Introduction/intro.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="home">
      <a id="logo">
        <img src="${lambdaLogo}" class="logo" alt="Lambda logo" />
      </a>
      <h1>Bienvenido a Lambda-SD&D School!</h1>
      <p class="read-the-docs">
        Haga click en el logo para continuar
      </p>
    </div>
    <div id="main" style="display:none">
      <div id="nav"></div>
      <div id="content"></div>
    </div>
  </div>
`

let link = document.querySelector("#logo")
//document.querySelector("#nav").innerHTML = await (await fetch('./src/nav/nav.html')).text()

link.addEventListener('click', (e) =>
{
  callHtml(document.querySelector('#content'))
  document.querySelector("#main").style.display = 'inline'
  document.querySelector("#home").style.display = 'none'
})

