document.getElementById("loginForm").addEventListener("submit", function (e) {
	e.preventDefault()

	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	var username = "user"
	var password = "1234"

	if (username === username && password === password) {
		document.getElementById("message").innerHTML = "Login successful!"
		window.location.href = "portfolio/index.html";
  	} else {
		document.getElementById("message").innerHTML =
		"Invalid username or password. Please try again."
  	}
})
