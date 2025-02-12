import { buildCalculator } from "./builders/calculator.js"
import { buildHeader } from "./builders/header.js"
import { handleInitThemeColor } from "./events/buttons.js"

(function buildElements() {
  const theme = handleInitThemeColor()
  const parent = document.getElementById("app")
  const header = buildHeader()
  const calculator = buildCalculator()

  parent.classList.add("app", `--${theme}`)
  parent.appendChild(header)
  parent.appendChild(calculator)
})()
