let fullName = "Nasir Hussain";
    fullName = "Khanzada Nasir";
    fullName = "Nasir khanzada";


const websiteName = "Google";
const officeOpenTime = "9:00 AM";
const userId = 773;
const companyName = "Tech Solution";


let age = 20 ;

if(age >= 19){
    document.write("Adult");
}else{
    document.write("Not Adult");
}


let marks = 45;

if(marks >= 45){
    document.write("<br>Pass");
}else{
    document.write("<br>Fail");
}

let enterPin = 1234;
let savePin = 123554;

if(enterPin == savePin){
    console.log("Pin Correct");
}else{
    console.log("Pin incorrect");
};

let userCity = "Islamabad";
let deliveryCity = "Lahore";

if(userCity != deliveryCity){
    console.log("Out of delivery area");
}else{
    console.log("Delivery available");
};

// ==== ---- Object ---- ====

let student = {
    name : "Raza" ,
    age : 23,
    city : "karachi" 
};

let mobile = {
    brand: "Samsung",
    model : "A52",
    price : 74000
};

let car = {
    company : "Toyota",
    color : "white",
    modelYear : 2022
};

// ==== ---- Array ---- ==== 

let fruits = ["Apple","banana","mango"];

let userInfo = ["Ali", 22, true , "Lahore", undefined];


// ==== ---- Logical And Practice ---- ====

// Example === 01 ===

let isLogin = true;
let isAdmin = true;
console.log(isLogin && isAdmin); // result true

// Example === 02 ===

let x = 10;
console.log(x > 5 && x > 20) // resut false

document.write("<br><br>");

// Example === 03 ===

let examMarks = 45;  // result Your Grade is C

if(examMarks >= 45 && examMarks <= 60){
    document.write("Your Grade is <b>C</b>");
}else if(examMarks >= 61 && examMarks <= 75){
    document.write("Your Grade is <b> B </b>");
}else if(examMarks >= 76 && examMarks <= 90){
    document.write("Your Grade is <b> A </b>");
}else if(examMarks >= 91 && examMarks <= 100){
    document.write("Your Grade is <b> A++ </b>");
}else if(examMarks >= 33 && examMarks <= 44){
    document.write("Fail");
}else{
    document.write("Invalid Exam Marks");
};


// ==== ---- logical OR Practice ----====

// Example === 01 ===

let a = true;
let b = false;

if(a || b){
    console.log("At least one is true");
}else{
    console.log("Both are false");
};

// Example === 02 ===

let hasCar = true;
let hasBike = false;

if(hasCar || hasBike){
    console.log("You can go to work");
}else{
    console.log("Take public transport");
};

// Example === 03 ===

let isRaining = false;
let isSnowing = true;

if(isRaining || isSnowing){
    console.log("Take an umbrella");
}else{
    console.log("No need for umbrella");
};

// Example === 04 ===

let hasPizza = false;
let hasBurger = false;

if(hasPizza || hasBurger){
    console.log("You have food to eat");
}else{
    console.log("Order food online");
};



// ==== ---- Ternary Operator ---- ====

// Example === 01 ===

let voterAge = 17;

let canVote = voterAge >= 20 ? "Eligible to vote" : "Not eligible";
console.log(canVote);


// Example === 02 ===

let prefersCoffee = false;
let morningDrink = prefersCoffee ? "Coffee" : "Tea";
console.log(morningDrink);

// Example === 03 ===

let orderAmount = 1000;
let delivery = orderAmount >= 1100 ? "Free delivery" : "Delivery charge applies";
console.log(delivery);

// Example === 04 ===

let isStudent = false;
let ticketPrice = isStudent ? "200" : "400";
console.log(ticketPrice);

// Example ===  05 ===

let signal = "Green";
let action = signal === "Green" ? "Go" : "Stop" ;
console.log(action);



// **** ---- Switch Case ----****

let daynum = 6;

switch(daynum){
    case 1 : console.log("Monday");
    break;
    case 2 : console.log("Tuesday");
    break; 
    case 3 : console.log("Wednesday");
    break;
    case 4 : console.log("Thursday");
    break;
    case 5 : console.log("Friday");
    break
    case 6 : console.log("Saturday");
    break;
    case 7 : console.log("Sunday");
    break;
    default: console.log("Invalid Day");
}


let trafficlight = "yellow";

switch(trafficlight){
    case "red": console.log("Stop");
    break;

    case "yellow" : console.log("Ready");
    break; 

    case "green" : console.log("Go");
    break;
}

let browserName = "google chrome";

switch(browserName){
    case "chrome" : console.log("Google Chrome Browser");
    break;

    case "firefox" : console.log("Mozilla Firefox Browser");
    break;

    default : console.log("Other Browser");
}


let isMember = true;
let hasCoupon = false;

switch(true){
    case (isMember && hasCoupon): console.log("Discount Applied");
    break;

    default : console.log("No Discount");
}