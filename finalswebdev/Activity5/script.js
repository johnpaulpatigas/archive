function calculateBmi() {
  const weight = parseFloat(document.getElementById("weight").value)
  const height = parseFloat(document.getElementById("height").value)
    
  const bmi = weight / (height * height)
    
  let result
  if (bmi < 18.5) {
    result = "Underweight"
  } else if (bmi < 25) {
    result = "Normal weight"
  } else if (bmi < 30) {
    result = "Overweight"
  } else {
    result = "Obese"
  }

  document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${result}.`;
}
