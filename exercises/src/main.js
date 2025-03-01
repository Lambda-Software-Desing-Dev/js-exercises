import './style.css'
import lambdaLogo from '/lambdaSD&D.svg'
import { intro0 } from './00.Introduction/intro.js'
import { setMenu } from './menu'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="home">
      <a id="logo">
        <img src="${lambdaLogo}" class="logo" alt="Lambda logo" />
      </a>
      <h1>Bienvenido a Lambda Software School!</h1>
      <p class="read-the-docs">
        Haga click en el logo para continuar
      </p>
    </div>
    <div id="main" class="main" style="display:none">
      <div id="nav" class="nav"></div>
      <div id="content" class="content">
      </div>
      <div id="iframe" class="iframe">
        <iframe src="https://www.jsplayground.dev/" title="jsplayground" height="100%" width="100%">
        </iframe>
      </div>
      <div id="footer" class="footer">
        <p>Agradecimientos especiales a <a href="https://www.jsplayground.dev/">jsplayground.dev</a>
        por facilitar este entorno. Siganlos en sus redes :-)</p>
      </div>
    </div>
  </div>
`

const logo = document.querySelector("#logo")

logo.addEventListener('click', async () =>
{
  let content = document.querySelector('#content')
  await intro0(content, true)
  document.querySelector("#main").style.display = 'grid'
  document.querySelector("#home").style.display = 'none'
})