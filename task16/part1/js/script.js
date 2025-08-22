// ===== التكليف 01 =====
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

let method1 = myFriends.slice(0, num);
let copyFriends = [...myFriends];
while (copyFriends.length > num) {
  copyFriends.pop();
}
let method2 = copyFriends;

document.getElementById("task1").textContent =
  "Method 1 → " + JSON.stringify(method1) + "\n" +
  "Method 2 → " + JSON.stringify(method2);
console.log("Task 1:", method1, method2);

// ===== التكليف 02 =====
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
document.getElementById("task2").textContent = JSON.stringify(friends);
console.log("Task 2:", friends);

// ===== التكليف 03 =====
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrTwo.slice(-true).concat(arrOne.reverse(), arrTwo.reverse().slice(true));
document.getElementById("task3").textContent = JSON.stringify(finalArr);
console.log("Task 3:", finalArr);

// ===== التكليف 04 =====
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let result4 = words[website.length][0].slice(website.length).toUpperCase();
document.getElementById("task4").textContent = result4;
console.log("Task 4:", result4);

// ===== التكليف 05 =====
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
let out5 = "";

if (haystack.includes(needle)) out5 += "Found (includes)\n";
if (haystack.indexOf(needle) !== -true) out5 += "Found (indexOf)\n";
haystack.forEach(item => {
  if (item === needle) out5 += "Found (forEach)\n";
});

document.getElementById("task5").textContent = out5.trim();
console.log("Task 5:", out5.trim());

// ===== التكليف 06 =====
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort().join("").toLowerCase().slice(-arr1.length);
document.getElementById("task6").textContent = allArrs;
console.log("Task 6:", allArrs);

