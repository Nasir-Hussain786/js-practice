let text = "Learn Javascript";
console.log(text.length ,text[0], text[15]);

let months = ["jan","feb",'mar','apr','may','jun'];
console.log(months.length , months[0], months[4]);

let number = [20, 30, 33, 55, 99];
console.log("Length of number is", number.length ,"third number of index is ", number[3] );

let mixed = ['Bilal', 22, true, undefined, 4.4];
console.log(mixed.length ,mixed[0], mixed[2] , mixed[4]);


//****---- Loop practice ----****

for(let i = 1; i <= 10 ; i++){
    console.log("Nasir khanzada" , i);
}

for(let i = 0; i <= 5; i++){
    console.log("Hello world" , i);
}

for(let i = 3; i <=24 ; i++){
    console.log("Javascript is fun" , i);
}

for(let i = 0; i <= 5; i++){
    console.log("Learning new things" , i);
}

for(let i = 0; i <= 7; i++){
    console.log("Practice makes perfect" , i);
}

for(let i = 0; i <= 10; i++){
    console.log("Nasir Khanzada" , i);
}

for(let i = 0; i <= 4; i++){
    console.log("koi bhi data", i);
}

for(let i = 5; i < 8; i++){
    console.log("Learn Javascript" , i);
}

for(let i = 10; i< 20 ; i++){
    console.log("Learn coding" , i);
}

for(let i = 0 ; i < 5; i++){
    console.log("Programming", i);
}

// arrays practice


let str1 = "For loop practice";
let str2 = "Console log test";
let str3 = "Practice makes perfect";
let str4 = "Keep learning daily";

let stringsArray =[str1 , str2 , str3, str4];

for(let i = 0; i < stringsArray.length ; i++){
    console.log(stringsArray[3]);
}


let arr1 = [33, 53, 66, 4, 2, 233];
let arr2 = ["apple", "banana","mango"];
let arr3 = [true , false, true, false, false];
let arr4 = ["Nasir", "Hussain", 44, undefined];

let allArrays = [arr1,arr2,arr3,arr4];

for(let i = 0; i < allArrays.length ; i++){
    console.log(allArrays[0]);
}


let numberarray = [332,335,44,4,33];

for(let i = 0; i < numberarray.length ; i++){
    console.log(i, numberarray[1]);
}


let fruitsarray = ["apple", "banana", "mango"];
for(let i = 0; i < fruitsarray.length ; i++){
    console.log(i, fruitsarray[1]);
}


let booleanarray =[true , false , true];
for(let i = 0 ; i < booleanarray.length; i++){
    console.log(i, booleanarray);
}

let mixedvalues = [99, "mango" , true, false];

for(let i = 0; i < mixedvalues.length ; i++){
    console.log(i, mixedvalues[2]);
}

let days = ["mon","tue","wed","thu","fri","sat","sun"];
for(let i = 1 ; i <days.length ; i++){
    console.log(i, days[6]);
}
