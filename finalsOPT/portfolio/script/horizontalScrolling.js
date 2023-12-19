function horizontalScrolling() {
	const container = document.getElementById("main")

	container.addEventListener("wheel", function (e) {
		if (e.deltaY > 0) {
			container.scrollLeft += 100
			e.preventDefault()
		} else {
			container.scrollLeft -= 100
			e.preventDefault()
		}
	})
}

export { horizontalScrolling }
