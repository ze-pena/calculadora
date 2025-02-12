export function numberMaskInput(event) {
  const display = document.getElementById("display")
  const { target: { value }} = event
  display.value = value.replace(/^([\/\*])|([^\d*.*()*\+\-\/\*])/gi, "")
}
