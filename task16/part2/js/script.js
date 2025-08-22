

let start1 = 10;
let end1 = 100;
let exclude1 = 40;

let t1 = document.getElementById("task1");
for (let i = start1; i <= end1; i += start1) {
  if (i === exclude1) continue;
  t1.innerHTML += i + "\n";
}


let start2 = 10;
let end2 = 0;
let stop2 = 3;

let t2 = document.getElementById("task2");
for (let i = start2; i >= stop2; i--) {
  if (i < start2) {
    t2.innerHTML += (i < start2 && i < 10 ? "0" : "") + i + "\n";
  } else {
    t2.innerHTML += i + "\n";
  }
}


let start3 = 1;
let end3 = 6;
let breaker3 = 2;

let t3 = document.getElementById("task3");
for (let i = start3; i <= end3; i++) {
  t3.innerHTML += i + "\n";
  for (let j = breaker3; j < end3; j += breaker3) {
    t3.innerHTML += "-- " + j + "\n";
  }
}


let index4 = 10;
let jump4 = 2;

let t4 = document.getElementById("task4");
for (;;) {
  t4.innerHTML += index4 + "\n";
  index4 -= jump4;
  if (index4 < jump4 * 2) break;
}


let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter5 = "a";

let t5 = document.getElementById("task5");
let counter = 1;
for (let i = 0; i < friends5.length; i++) {
  if (friends5[i][0].toLowerCase() === letter5) continue;
  t5.innerHTML += `"${counter} => ${friends5[i]}"\n`;
  counter++;
}


let start6 = 0;
let swappedName = "elZerO";
let t6 = document.getElementById("task6");
let result6 = "";

for (let i = start6; i < swappedName.length; i++) {
  let char = swappedName[i];
  result6 += char === char.toLowerCase()
    ? char.toUpperCase()
    : char.toLowerCase();
}
t6.innerHTML = `"${result6}"`;


let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

let t7 = document.getElementById("task7");
for (let i = start7; i < mix.length; i++) {
  if (typeof mix[i] === "number" && mix[i] !== true) {
    if (mix[i] === 1) continue;
    t7.innerHTML += mix[i] + "\n";
  }
}
