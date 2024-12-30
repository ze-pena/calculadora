const mathData = [[
  { type: "option", value: "(", label: "(" },
  { type: "option", value: ")", label: ")" },
  { type: "option", value: "D", label: "Apagar", icon: "./assets/icons/Arrow.svg" },
  { type: "option", value: "C", label: "C" },
], [
  { type: "number", value: "7", label: "7" },
  { type: "number", value: "8", label: "8" },
  { type: "number", value: "9", label: "9" },
  { type: "operator", value: "/", label: "/" },
], [
  { type: "number", value: "4", label: "4" },
  { type: "number", value: "5", label: "5" },
  { type: "number", value: "6", label: "6" },
  { type: "operator", value: "*", label: "*" },
], [
  { type: "number", value: "1", label: "1" },
  { type: "number", value: "2", label: "2" },
  { type: "number", value: "3", label: "3" },
  { type: "operator", value: "+", label: "+" },
], [
  { type: "number", value: "0", label: "0" },
  { type: "option", value: ".", label: "." },
  { type: "option", value: "=", label: "=" },
  { type: "operator", value: "-", label: "-" }
]]

const themeData = [{
  theme: "light",
  isVisible: false,
  src: "./assets/icons/Sun.svg",
  alt: "Light theme icon"
}, {
  theme: "dark",
  isVisible: true,
  src: "./assets/icons/Moon.svg",
  alt: "Dark theme icon"
}]

export { mathData, themeData }
