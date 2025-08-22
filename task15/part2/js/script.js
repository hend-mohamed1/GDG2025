

console.log(100000);      
console.log(100_000);        
console.log(5e4 + 5e4);      
console.log(10 ** 5);         
console.log(Math.pow(10, 5)); 
console.log(Number("100000"));
console.log(parseInt("100000")); 
console.log(parseFloat("100000.00")); 
console.log(+"100000");     
console.log(JSON.parse("100000")); 
console.log(Math.max(100000));
console.log(1e6 / 10);       
console.log(1_00_000);        


console.log(Number.MIN_SAFE_INTEGER * -1); 


console.log(Number.MAX_SAFE_INTEGER.toString().length); 


let myVar = "100.56789 Views";

console.log(parseInt(myVar));     
console.log(Number(parseFloat(myVar).toFixed(2))); 


let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); 

let flt = 10.4;

console.log(Math.floor(flt));   
console.log(Math.trunc(flt));  
console.log(parseInt(flt));     
console.log(Number(flt.toFixed(0))); 
console.log(Math.round(flt));  


console.log(Math.floor(Math.random() * 5)); 
