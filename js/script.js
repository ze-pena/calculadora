import { buildCalculator, buildThemeButton } from "./buildCalculator.js"

(function buildElements() {
  const parent = document.getElementById("main")
  const theme = buildThemeButton()
  const calculator = buildCalculator()
 
  parent.appendChild(theme)
  parent.appendChild(calculator)
})()
