// **** ---- Ternary Operator ---- **** 

// Pass and fail example

let marks = 60;
let result = marks >= 50 ? "Pass" : "Fail";
console.log(result);

let number = 7;
let finalResult = number >= 0 ? "Positive" : "Negative";
console.log(finalResult);

// Grade example

let examMarks = 100;
let grade = examMarks >= 45 && examMarks <= 60 ? "C" : examMarks >= 61 && examMarks <= 75 ? "B" : examMarks >= 76 && examMarks <= 100 ? "A" : "Enter valid number"; 
console.log(grade);

// **** ---- Logical or example ---- ****


let day = "sunday";

if(day === "saturday" || day === "sunday"){
    document.write("Holiday");
}else{
    document.write("Working day");
};

document.write("<br><br>");

let country = "India";
if(country === "Pakistan" || country === "India" || country === "Dubai"){
    document.write("Shipping Available");
}else{
    document.write("Shipping Not Available");
};













// let a = 10;
// let b = 10;

// if(a == b){
//     console.log("A equal to b");
// };


// let age = 18;

// if(age >= 18){
//     console.log("You are Adult");
// }else{
//     console.log("You are minor");
// };


// let marks = 49;

// if(marks >= 45 && marks <= 60){
//     document.write("Your Grade is <b> C </b>");
// }else if( marks >= 61 && marks <= 75){
//     document.write("Your Grade is <b>B</b>");
// }else if(marks >= 76 && marks <= 100){
//     document.write("Your Grade is <b>A</b>");
// }else if(marks >= 33 && marks <= 44 ){
//     document.write("<b> Fail </b>");
// }else{
//     document.write("<b> Invalid Number </b>");
// };


// document.write("<br><br>")

// // Traffic Singal

// let signal = "Red";

// if(signal === "Red"){
//     console.log("Stop");
// }else if(signal === "Yellow"){
//     console.log("Ready");
// }else if(signal === "Green"){
//     console.log("Go");
// }else{
//     console.log("Invalid Signal");
// };