import { buildCalculator, buildThemeButton } from "./buildCalculator.js"
import { handleInitThemeColor } from "./buttonEvents.js"

(function buildElements() {
  const theme = handleInitThemeColor()
  const parent = document.getElementById("main")
  const button = buildThemeButton()
  const calculator = buildCalculator()

  parent.classList.add("main", `--${theme}`)
  parent.appendChild(button)
  parent.appendChild(calculator)
})()
