function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }
  if (operation === "add" || operation === undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 52} Weeks`);
    console.log(`${theAge * 365} Days`);
    console.log(`${theAge * 365 * 24} Hours`);
    console.log(`${theAge * 365 * 24 * 60} Minutes`);
    console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`);
  }
}
function checkStatus(a, b, c) {
  let name, age, status;
  [a,b,c].forEach((val)=>{
    if (typeof val === "string") name = val;
    else if (typeof val === "number") age = val;
    else if (typeof val === "boolean") status = val;
  });
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"} For Hire`);
}
function createSelectBox(startYear, endYear) {
  let select = document.createElement("select");
  for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
  document.getElementById("box").appendChild(select);
}

createSelectBox(2000, 2021);
function multiply(...numbers) {
  let result = 1;
  numbers.forEach(num => {
    if (typeof num === "string") return;
    if (typeof num === "number") {
      result *= Math.floor(num);
    }
  });
  console.log(result);
}
