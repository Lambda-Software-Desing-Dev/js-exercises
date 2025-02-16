import './style.css'
import lambdaLogo from '/lambdaSD&D.svg'
import { callHtml } from './00 - Introduction/intro.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="home">
      <a id="logo">
        <img src="${lambdaLogo}" class="logo" alt="Lambda logo" />
      </a>
      <h1>Welcome to Lambda-SD&D School!</h1>
      <p class="read-the-docs">
        Click on the logo to learn more
      </p>
    </div>
    <div id="main"></div>
  </div>
`

let link = document.querySelector("#logo")
link.addEventListener('click', (e) =>
{
  callHtml(document.querySelector('#main'))
  document.querySelector("#home").style.display = 'none'
})

