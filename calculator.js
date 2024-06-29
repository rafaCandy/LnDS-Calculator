function calculate() {
    var operation = document.getElementById('operation').value;
    if (operation === 'addition') {
        calculateAddition();
    } else if (operation === 'subtraction') {
        calculateSubtraction();
    }
}

function calculateAddition() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = document.getElementById('result').value;

    if (!num1 && num2 && result) {
        // Calculate num1
        num1 = parseFloat(result) - parseFloat(num2);
        document.getElementById('num1').value = num1;
    } else if (num1 && !num2 && result) {
        // Calculate num2
        num2 = parseFloat(result) - parseFloat(num1);
        document.getElementById('num2').value = num2;
    } else if (num1 && num2 && !result) {
        // Calculate result
        result = parseFloat(num1) + parseFloat(num2);
        document.getElementById('result').value = result;
    } else {
        alert("Please enter values in two fields to calculate the third.");
    }
}

function calculateSubtraction() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = document.getElementById('result').value;

    if (!num1 && num2 && result) {
        // Calculate num1
        num1 = parseFloat(result) + parseFloat(num2);
        document.getElementById('num1').value = num1;
    } else if (num1 && !num2 && result) {
        // Calculate num2
        num2 = parseFloat(num1) - parseFloat(result);
        document.getElementById('num2').value = num2;
    } else if (num1 && num2 && !result) {
        // Calculate result
        result = parseFloat(num1) - parseFloat(num2);
        document.getElementById('result').value = result;
    } else {
        alert("Please enter values in two fields to calculate the third.");
    }
}