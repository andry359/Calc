// Калькулятор на циклах

function calc(oper, a, b) {
    let result;
    if (checkInput(oper, a, b)) {
        if (oper === "+") {
            result = a + b;
            return checkResult(result);
        } else if (oper === "-") {
            result = a - b;
            return checkResult(result);
        } else if (oper === "*") {
            result = a * b;
            return checkResult(result);
        } else if (oper === "/") {
            result = a / b;
            return checkResult(result);
        } else if (oper === "**") {
            result = a ** b;
            return checkResult(result);
        } else if (oper === "%") {
            result = a % b;
            return checkResult(result);
        } else {
            return console.log("unknown operation");
        }
    }
    return console.log("ERROR");
}
function checkInput(oper, a, b) {
    const operIsNotValid = oper === undefined || oper === "" || a === undefined || a === "" || b === undefined || b === "";
    if (operIsNotValid) {
        return false;
    }
    return true;

}
function checkResult(result) {
    const resultIsNotValid = result === undefined || result === NaN || result === Infinity;
    if (resultIsNotValid) {
        return console.log("ERROR");
    } else {
        return result;
    }
}

let oper = prompt(`Введите действие:`);
let a = Number(prompt(`Введите a:`));
let b = Number(prompt(`Введите b:`));

if (calc(oper, a, b) || false) {
    console.log(calc(oper, a, b));
}
