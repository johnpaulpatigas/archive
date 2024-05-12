const questions = [
    { q: "1. What is the capital of Philippines?", a: "Manila" },
    { q: "2. Who is the current Philippine president?", a: "Bongbong Marcos" },
    { q: "3. Where is Philippines located?", a: "Asia" },
    { q: "4. What is the Queen City of the South?", a: "Cebu City" },
    { q: "5. Where did Lapu-Lapu vs. Magellan's fight take place?", a: "Mactan" }
]

let i = 0

function display() {
    document.getElementById("question").textContent = questions[i].q
}

function check() {
    const answer = document.getElementById("answer").value
    if (answer === questions[i].a) {
      i++
      if (i === questions.length) {
        alert("Congrats! You answered all questions correctly!")
      } else {
        display()
        document.getElementById("feedback").textContent = "Correct! Next question..."
      }
    } else {
      i = 0
      display()
      document.getElementById("feedback").textContent = "Incorrect. Please try again."
    }
    document.getElementById("answer").value = ""
}

display()
document.getElementById("submit").addEventListener("click", check)