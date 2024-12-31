export function handleClickButton(event) {
	const { target: { dataset: { value } }} = event

	if (value == "C") {
		return handleClearContent()
	}

	if (value == "D") {
		return handleDeleteContent()
	}

	if (value == "=") {
		return handleSolveContent()
	}

	handleUpdateContent(value)
}

export function handleUpdateContent(value) {
	const display = document.getElementById("display")
	const content = display.value

	if (content == "Erro") {
		display.value = value
		return
	}

	if (!content && value.match(/[\/\*]/gi)) {
		display.value = ""
		return
	}

	display.value += value
}

export function handleClearContent() {
	const display = document.getElementById("display")
	display.value = ""
}

export function handleDeleteContent() {
	const display = document.getElementById("display")
	const content = display.value

	if (!content || content == "Erro") {
		display.value = ""
		return
	}

	display.value = content.slice(0, content.length - 1)
}

export function handleSolveContent() {
	const display = document.getElementById("display")
	const content = display.value
	let answer = ""

	if (!content) {
		display.value = ""
		return
	}

	try { 
		answer = eval(content)
	} catch { 
		answer = "Erro"
	} finally {
		display.value = answer
	}
}

function getCalculatorConfig() {
	const config = JSON.parse(localStorage.getItem("calculator") || "{}")
	return config
} 

function setCalculatorConfig(update) {
	const config = getCalculatorConfig()
	Object.assign(config, update)
	localStorage.setItem("calculator", JSON.stringify(config))
}

export function handleSwitchThemeColor(event) {
	const { target: { parentElement }} = event
	const config = getCalculatorConfig()
	const theme = config?.theme || "dark"
	
	if (theme == "dark") {
		parentElement.classList.replace("--dark", "--light")
		config.theme = "light"
	}

	if (theme == "light") {
		parentElement.classList.replace("--light", "--dark")
		config.theme = "dark"
	}

	setCalculatorConfig(config)
}

export function handleInitThemeColor() {
	const config = getCalculatorConfig()
	const theme = config?.theme || "dark"
	return theme
}
