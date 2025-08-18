// Add Variables Here
let numberOne = 10;  // Number
let numberTwo = 20;  // Number

// Output
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
console.log(
  "I'm In\n" +
  "\\\\\n" +
  "Love \\\\ \"\"\" '''\n" +
  "++ With ++\n" +
  "\\\"\"\"\\\"\"\"\n" +
  "\"\"JavaScript\"\"``"
);
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_${b}_`);
