let output = document.getElementById("output");

function log(text) {
  output.textContent += text + "\n";
}

function clearOutput() {
  output.textContent = "";
}

// التكليف 01
function task01() {
  clearOutput();
  let nums = [9, 20, 110];
  nums.forEach(num => {
    let result = num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
    log(result);
  });
}

// التكليف 02
function task02() {
  clearOutput();
  let num1 = 9;
  let str = "9";
  let str2 = "20";

  if (num1 == str) {
    log(`${num1} Is The Same Value As ${str}`);
  }
  if (num1 == str && num1 !== str) {
    log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
  }
  if (num1 != str2 && typeof num1 !== typeof str2) {
    log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
  }
  if (str != str2 && typeof str === typeof str2) {
    log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
  }
}

// التكليف 03
function task03() {
  clearOutput();
  let num1 = 10;
  let num2 = 30;
  let num3 = "30";

  if (num3 > num1 && typeof num3 !== typeof num2) {
    log(`${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As number`);
  }

  if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
    log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As number`);
  }

  if (num3 !== num1 && typeof num3 !== typeof num1 && typeof num3 !== typeof num2) {
    log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
  }
}

// التكليف 04
function task04() {
  clearOutput();
  let num1 = 20;
  let num2 = 10;
  let num3 = "20";
  let num4 = 40;

  if (num1 > num2) log("True"); else log("False");
  if (num1 > num2 && num1 < num4) log("True"); else log("False");
  if (num1 > num2 && num1 === num3) log("True"); else log("False");
  if ((num1 + num2) < num4) log("True"); else log("False");
  if ((num1 + num3) < num4) log("True"); else log("False");
  if ((num1 + num2 + num3) < num4) log("True"); else log("False");
  if (num4 - (num1 + num3) + num2 === 21) log("True"); else log("False");
}
