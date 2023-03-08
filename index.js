const calculation = document.getElementById("calculationText");
const result = document.getElementById("resultText");

function insert(num) {
    calculation.textContent += num;
    calculation.textContent = calculation.textContent.replace("*", "X")
}

document.getElementById("clear").addEventListener("click", function () {
    calculation.textContent = "";
    result.textContent = 0;
});

document.getElementById("back").addEventListener("click", function () {
var exp = calculation.textContent;
calculation.textContent = exp.substring(0, exp.length - 1);
});

document.getElementById("equal").addEventListener("click", function () {
    var exp = calculation.textContent.replace("X", "*");
    result.textContent = eval(exp);
    calculation.textContent = result.textContent;
});