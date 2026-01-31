const studentData = [
    {firstName : "Nasir" , lastName : "Hussain"},
    {subject : "Math" , score : 100},
    {subject : "English" , score : 100},
    ["Math","English","Science","Chemistry","Physics"],
];

for(let i=0; i<studentData.length; i++){
    console.log(i , studentData[i]);
}

console.log("_______School object______")

const school = {
    name :"Ali",
    class : 10,
    age : 15,
    subjects : ["Biology","Urdu","Math"]
};

for(const key in school){
    console.log(key + " " + school[key]);
}

console.log("_______student object______")

const student = {
    name : "Ali",
    age : 20,
    subjects : ["Math","Urdu","English"],
};
;8
for(const key in student){
    console.log(key + " " + student[key]);
}

console.log("_______car object______")

const car = {
    brand : "Toyota",
    model : 2024,
    color : "Black",
};

for(const key in car){
    console.log(key + " " + car[key]);
}

console.log("_______mobile object______")

const mobile = {
    company : "Apple",
    price : 120000,
    color : "Black",
    feature : ["Camera","Bluetooth"]
};

for(const key in mobile){
    console.log(key + " " + mobile[key]);
}

console.log("_______user object______")

const user = {
    username : "starbro",
    password : 3234324,
    hobbies : ["Coding","gaming"]
};

for(const key in user){
    console.log(key + " " + user[key]);
}

console.log("_______book object______")

const book = {
    title : "JavaScript Basics",
    pages : 200,
    author : "Brendan Eich",
    age : 64
};

for(const key in book){
    console.log(key + " " + book[key]);
}

delete book.pages;

// *** --- Empty Object --- ***

console.log("_______mydata object______")

const mydata = {};
mydata.firstName = "Nasir";
mydata.lastName = "Hussain";
mydata.education = "BS Information Technology";
mydata.cnic = 45301-33543550;
mydata['age'] = 29;;

mydata.rollNumber = 11;
delete mydata.age;


for(const key in mydata){
    console.log(key + " " + mydata[key]);
}

console.log("_______Student Marks object______")

const studentMarks = {};
studentMarks.Nasir = {math : 90, english : 93, chemistry : 87};
studentMarks.Mudasir = {english : 67, physics : 88, chemistry : 73};

for(const key in studentMarks){
    console.log(key + ' ' + studentMarks[key]);
}


console.log("_______headPhones object______")

const headPhones = {
    brand : "sony",
    model : "wh-1000XM4",
    color : "black",
    isWireless : true
};

for(const key in headPhones){
    console.log(key + " " + headPhones[key]);
}

console.log("_______Watch object______")


const watch = {
    brand : "Rolex",
    type : "Analog",
    material : "Stainless Steel",
    waterproof : true
}

for(const key in watch){
    console.log(key + " " + watch[key]);
}

console.log("_______Table object______")

const table = {
    material : "Wood",
    shape : "Rectangle",
    length : "120cm",
    width : "60cm",
    color : "Brown"
};

for(const key in table){
    console.log(key + " " + table[key]);
}
