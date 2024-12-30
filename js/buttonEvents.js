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
		return display.value = value
	}

	if (!content && value.match(/[\/\*]/gi)) {
		return display.value = ""
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
		return display.value = ""
	}

	display.value = content.slice(0, content.length - 1)
}

export function handleSolveContent() {
	const display = document.getElementById("display")
	const content = display.value
	let answer = ""

	if (!content) {
		return display.value = ""
	}

	try { 
		answer = eval(content)
	} catch { 
		answer = "Erro"
	} finally {
		return display.value = answer
	}
}
