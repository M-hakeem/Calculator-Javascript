// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
 }
 
 // This function display values
 function display(value) {
  document.getElementById("result").value += value;
 }
 // This function evaluates the expression and return result
 function calculate() {
  var num = document.getElementById("result").value;
  var digits = eval(num);
  document.getElementById("result").value = digits;
 }


 