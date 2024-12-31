import { handleClearContent, handleSolveContent } from "./buttonEvents.js"

export function numberMaskInput(event) {
  const display = document.getElementById("display")
  const { target: { value }} = event
  display.value = value.replace(/^([\/\*])|([^\d*.*()*\+\-\/\*])/gi, "")
}

export function handleKeyDown(event) {
  const { key } = event

  if (key == "=" || key == "Enter") {
    return handleSolveContent()
  }

  if (key == "Escape") {
    return handleClearContent()
  }
}
