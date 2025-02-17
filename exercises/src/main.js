import './style.css'
import lambdaLogo from '/lambdaSD&D.svg'
import { intro } from './00 - Introduction/intro.js'

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
      <iframe src="https://www.jsplayground.dev/" title="jsplayground" width="640px" height="480px">
      </iframe>

      <p>Agradecimientos especiales a <a href="https://www.jsplayground.dev/">jsplayground.dev</a>
      por facilitar este entorno</p>
    </div>
  </div>
`

let logo = document.querySelector("#logo")
document.querySelector("#nav").innerHTML = await (await fetch('./src/nav/nav.html')).text()

logo.addEventListener('click', async (e) =>
{
  await intro(document.querySelector('#content'))
  document.querySelector("#main").style.display = 'inline'
  document.querySelector("#home").style.display = 'none'
})

