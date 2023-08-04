function DeleteMe() {
  document.getElementById("MyResult").value = "";
}

function calculator(NewValue) {
  document.getElementById("MyResult").value += NewValue;
}

function Answer() {
  var a = document.getElementById("MyResult").value;
  var b = eval(a);
  document.getElementById("MyResult").value = b;
}

function deleteLastDigit() {
    let currentValue = document.getElementById("MyResult").value;
    if (currentValue.length > 0) {
      let deleteValue = currentValue.slice(0, -1);
      document.getElementById("MyResult").value = deleteValue;
    }
  }
  