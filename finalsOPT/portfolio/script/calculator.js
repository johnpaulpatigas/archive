function append(value) {
  	document.getElementById("display").value += value
}

function backspace() {
  	const display = document.getElementById("display")
  	display.value = display.value.slice(0, -1)
}

function calculate() {
  	const displayValue = document.getElementById("display").value
  	try {
		const result = eval(displayValue)
		document.getElementById("display").value = result
  	} catch (error) {
		document.getElementById("display").value = "Error"
  }
}

function clear() {
  	document.getElementById("display").value = ""
}
