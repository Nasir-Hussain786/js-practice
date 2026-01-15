// **** ---- while loop practice ----****

let i = 0; 
while(i < 10){
    console.log(i);
    i++;
}

// ****---- For Loop Practice ----****

const fruits = ["banana","mango","orange","apple"];
for(let i = 0; i < fruits.length; i++){
    console.log(i);
}

// ****---- Loop Break ----****
for(let i = 0; i <= 20; i++){
    if(i == 13){
        break;
    }else{
        console.log(i);
    }
}

// ****---- Loop continue ----****
for(let i = 0; i < 5; i++){
    if(i == 3){
        continue;
    }else{
        console.log(i);
    }
}


let firstName = "Nasir";
let lastName = "Hussain";
let fullName = `My Full Name is ${firstName} ${lastName}`;

console.log(fullName);

let day = "Monday";
console.log(day.length);
console.log(day[0]);

// upper case
let name = "Bilal";
let nameUpper = name.toUpperCase();
let nameLower = name.toLowerCase();
console.log(nameLower);

let country = "I am Pakistan";
// indexOf 
console.log(country.indexOf("I"));
// lastIndexOf
console.log(country.lastIndexOf("kis"));
// includes
console.log(country.includes("tan"));

let word = "Javascript";
// slice
console.log(word.slice(2,7));
// slice Negative value ke sath
console.log(word.slice(-7,-2));

// concatenate
let text1 = "Hello";
let text2 = "World";
let text3 = text1+ " " +text2;
console.log(text3);

// replace
let fruit = "i like apple. apple is sweet";
let result = fruit.replace("apple","mango");
console.log(result);

// replaceAll
let fruit1 = "i like apple. Apple is apple";
let result1 = fruit1.replaceAll("apple" , "mango");
console.log(result1);

// Trim 
let firstName1 = "   Nasir   ";
console.log(firstName1.trim());

// TrimStart 
let firstName2 = "    Fahim   ";
console.log(firstName2.trimStart());

// TrimEnd
let firstName3 = "    Mubashir    ";
console.log(firstName3.trimEnd());

// Split separate each letter
let review = "I love javascript";
console.log(review.split(""));

// Split using comma
let data = "apple , banana , mango";
console.log(data.split(","))