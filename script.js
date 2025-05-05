function calculateBMI() {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (!age || !height || !weight) {
      result.innerHTML = "Please fill all the fields.";
      result.style.color = "red";
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let message = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
      message += "You should take good calorie-rich food.";
      result.style.color = "orange";
    } else if (bmi >= 18.5 && bmi < 25) {
      message += "You are perfect!";
      result.style.color = "green";
    } else {
      message += "You should work out.";
      result.style.color = "red";
    }

    result.innerHTML = message;
  }