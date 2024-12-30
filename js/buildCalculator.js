// Dados para criação da calculadora
import { mathData, themeData } from "./data.js"

// Eventos de tratamento de botões da calculadora
import { handleClickButton } from "./buttonEvents.js"

// Eventos de entrada de teclado da calculadora
import { numberMaskInput, handleKeyDown } from "./inputEvents.js"

function buildOutput() {
  const container = document.createElement("div")
  const result = document.createElement("small")
  const input = document.createElement("input")
  
  result.classList.add("result")

  input.id = "display"
  input.classList.add("display")
  input.setAttribute("type", "text")
  input.setAttribute("title", "input")
  input.setAttribute("name", "input")
  input.setAttribute("autocomplete", "off")
  input.addEventListener("input", numberMaskInput)
  input.addEventListener("keydown", handleKeyDown)
  
  container.classList.add("output")
  container.appendChild(result)
  container.appendChild(input)
  return container
}

function buildInput() {
  const container = document.createElement("ul")
  container.classList.add("input")

  mathData.forEach(list => {
    const row = document.createElement("li")
    row.classList.add("row")
    
    list.forEach(item => {
      const { type, value, label, icon } = item
      const button = document.createElement("button")

      button.classList.add("button", `--${type}`)
      button.setAttribute("type", "button")
      button.setAttribute("data-value", value)
      button.addEventListener('click', handleClickButton)

      if (icon) {
        const svg = document.createElement("img")
        svg.classList.add("icon")
        svg.setAttribute("title", label)
        svg.setAttribute("src", icon)

        button.appendChild(svg)
      } else {
        button.innerText = label
      }

      row.appendChild(button)
    })

    container.appendChild(row)
  })

  return container
}

export function buildThemeButton() {
  const container = document.createElement("button")

  container.id = "theme"
  container.setAttribute("type", "button")

  themeData.forEach(item => {
    const { theme, isVisible, alt, src } = item
    const icon = document.createElement("img")

    icon.classList.add("icon", `--${theme}`)
    icon.setAttribute("alt", alt)
    icon.setAttribute("src", src)

    if (isVisible) {
      icon.classList.add("--is-visible")
    }

    container.appendChild(icon)
  })

  return container
}

export function buildCalculator() {
  const container = document.createElement("section")
  const output = buildOutput()
  const input = buildInput()

  container.id = "math"
  container.appendChild(output)
  container.appendChild(input)

  return container
}
