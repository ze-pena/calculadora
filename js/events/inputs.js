import { handleClearContent, handleSolveContent } from "../events/buttons.js"

export function handleKeyDown(event) {
  const { key } = event

  if (key == "=" || key == "Enter") {
    return handleSolveContent()
  }

  if (key == "Escape") {
    return handleClearContent()
  }
}
