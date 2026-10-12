function convertValue() {
  var dollar = document.getElementById("dollar").value;
  var result = document.getElementById("result");
  result.innerHTML = dollar * 50 + " EGP";
  return false;
}
