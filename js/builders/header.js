// Dados para criação da calculadora
import { buttonThemeList } from "../data/buttons.js"

// Eventos de tratamento de botões da calculadora
import { handleSwitchThemeColor } from "../events/buttons.js"

export function buildTitle() {
  const container = document.createElement("h1")
  const emphasis = document.createElement("strong")

  container.classList.add("title")
  container.innerText = "calculadora"
  emphasis.innerText = "DEV"
  container.appendChild(emphasis)
  return container
}

export function buildThemeButton() {
  const container = document.createElement("button")

  container.classList.add("theme")
  container.setAttribute("type", "button")
  container.addEventListener("click", handleSwitchThemeColor)

  buttonThemeList.forEach(item => {
    const { theme, alt, src } = item
    const content = document.createElement("div")
    const icon = document.createElement("img")

    icon.setAttribute("alt", alt)
    icon.setAttribute("src", src)
    icon.classList.add("icon")
    content.classList.add("content", `--${theme}`)
    content.appendChild(icon)
    container.appendChild(content)
  })

  return container
}

export function buildHeader() {
  const container = document.createElement("header")
  const title = buildTitle()
  const themeButton = buildThemeButton()
  
  container.id = "header"
  container.appendChild(title)
  container.appendChild(themeButton)
  return container
}