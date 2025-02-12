// Dados para criação da calculadora
import { buttonDataList } from "../data/buttons.js"

// Eventos de tratamento de botões da calculadora
import { handleClickButton } from "../events/buttons.js"

// Eventos de entrada de teclado da calculadora
import { handleKeyDown } from "../events/inputs.js"

// Máscara de input de número da calculadora
import { numberMaskInput } from "../utils/masks/numbers.js"

function buildOutput() {
  const container = document.createElement("div")
  const input = document.createElement("input")

  input.id = "display"
  input.classList.add("display")
  input.setAttribute("type", "text")
  input.setAttribute("title", "input")
  input.setAttribute("name", "input")
  input.setAttribute("autocomplete", "off")
  input.addEventListener("input", numberMaskInput)
  input.addEventListener("keydown", handleKeyDown)
  
  container.classList.add("output")
  container.appendChild(input)
  return container
}

function buildInput() {
  const container = document.createElement("ul")
  container.classList.add("input")

  buttonDataList.forEach(list => {
    const row = document.createElement("li")
    row.classList.add("row")
    
    list.forEach(item => {
      const { type, value, label } = item
      const button = document.createElement("button")

      button.classList.add("button", `--${type}`)
      button.setAttribute("type", "button")
      button.setAttribute("data-value", value)
      button.addEventListener('click', handleClickButton)
      button.innerHTML = label
      row.appendChild(button)
    })

    container.appendChild(row)
  })

  return container
}

export function buildCalculator() {
  const container = document.createElement("main")
  const output = buildOutput()
  const input = buildInput()

  container.id = "math"
  container.appendChild(output)
  container.appendChild(input)

  return container
}
