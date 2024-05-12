function message() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message");

    if (name) {
        message.innerHTML = `<p>Welcome Mr/Mrs ${name}</p>`;
    } else {
        message.innerHTML = "<p>Please enter your name</p>";
    }
}
