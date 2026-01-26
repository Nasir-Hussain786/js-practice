// **** ---- addition function ----**** 
function add(a,b){
    return a + b;
}

let result = add(9,9);
console.log(result);

// **** ---- Substraction function ----**** 
function substraction(a,b){
    return a - b;
}

let result1 = substraction(20,7);
console.log(result1)

// **** ---- Multiplication function ----****
function mul(a,b){
    return a * b;
} 

let result3 = mul(8,7);
console.log(result3);

// **** ---- Division function ----**** 
function divide(a,b){
    return a/b;
}

let result2 = divide(42,7);
console.log(result2);


// square
function square(num){
    return num * num;
}

let numberSquare = square(9,9);
console.log(numberSquare);

// string
function capitalWords (firstName){
    return firstName.toUpperCase();
}
console.log(capitalWords("nasir hussain"));

// fullName
function fullName(firstName,lastName){
    return firstName + " " + lastName;
}

console.log(fullName("Hasnain","Anwar"));

function greet(){
    alert("Assalam O Alaikum"); 
}

function add(){
    let a = 10;
    let b = 50;
    alert("10 + 50 = " + " " + (a + b));
}

function sub(){
    let a = 90;
    let b = 50;
    alert("90 - 50 = " + " " +  (a - b));
}

function mul(){
    let a = 6;
    let b = 7;
    alert("6 * 7 = " + " " + (a * b));
}
