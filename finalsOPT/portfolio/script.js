// ScrollToView
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault()

		const targetId = this.getAttribute("href")
		document.querySelector(targetId).scrollIntoView({
		behavior: "smooth",
		})
	})
})

// HorizontalScrolling
const container = document.getElementById("main")

container.addEventListener("wheel", function (e) {
	if (e.deltaY > 0) {
		container.scrollLeft += 100
		e.preventDefault();
	} else {
		container.scrollLeft -= 100
		e.preventDefault();
	}
});

// Calculator
function appendDisplay(value) {
  	document.getElementById("display").value += value
}

function clearDisplay() {
  	document.getElementById("display").value = ""
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
