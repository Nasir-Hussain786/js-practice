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