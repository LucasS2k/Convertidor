var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

function myResult() {
  option_from = inputType.value;
  option_to = resultType.value;

  if (option_from === "Gota" && option_to === "Microgota") {
    result.value = Number(input.value * 3).toFixed(2);
  } else if (option_from === "Gota" && option_to === "Cc/Ml") {
    result.value = Number(input.value / 20).toFixed(2);
  } else if (option_from === "Gota" && option_to === "Gota") {
    result.value = input.value;
  }

  if (option_from === "Microgota" && option_to === "Gota") {
    result.value = Number(input.value / 3).toFixed(2);
  } else if (option_from === "Microgota" && option_to === "Cc/Ml") {
    result.value = Number(input.value / 60).toFixed(2);
  } else if (option_from === "Microgota" && option_to === "Microgota") {
    result.value = input.value;
  }

  if (option_from === "Cc/Ml" && option_to === "Microgota") {
    result.value = Number(input.value * 60).toFixed(2);
  } else if (option_from === "Cc/Ml" && option_to === "Gota") {
    result.value = Number(input.value * 20).toFixed(2);
  } else if (option_from === "Cc/Ml" && option_to === "Cc/Ml") {
    result.value = input.value;
  }
}
