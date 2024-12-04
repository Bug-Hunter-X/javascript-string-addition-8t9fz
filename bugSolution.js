function foo(a, b) {
  return a + b;
}

console.log(foo(2, "2")); // Output: "22"

function bar(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(bar(2, "2")); // Output: 4

//More robust solution handling potential errors
function addNumbers(a, b) {
  const numA = parseInt(a);
  const numB = parseInt(b);

  if(isNaN(numA) || isNaN(numB)) {
    return "Invalid input: Operands must be numbers or number strings.";
  }
  return numA + numB;
}
console.log(addNumbers(2, "2")); //Output: 4
console.log(addNumbers("abc", 2)); //Output: Invalid input: Operands must be numbers or number strings.