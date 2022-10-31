import './style.css'
import javascriptLogo from './javascript.svg'
//import { setupCounter } from './counter.js'
import { test, show } from './script.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello lucky!</h1>
    <div class="card">
      <button type="button" class="btn" id="generate"></button>
    </div>
    <div class="results">
      <ul id="results"></ul>
    </div>
    <p class="read-the-docs">
      Copyright &copy; 2022
    </p>
  </div>
`

//setupCounter(document.querySelector('#counter'))
test(document.querySelector('#generate'))
show(document.querySelector('#results'))
