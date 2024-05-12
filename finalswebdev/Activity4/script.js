function clock() {
    var date = new Date();
    var hr = date.getHours().toString().padStart(2, "0");
    var min = date.getMinutes().toString().padStart(2, "0");
    var sec = date.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").innerHTML = `${hr}:${min}:${sec}`;
    if (hr == "07" && min == "50") {
        clearInterval(clockInterval);
        alert("It's 7:50!");
    }
}

var clockInterval = setInterval(clock, 1000);
