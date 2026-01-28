// === Sports list === 
const sports = ["cricket","football","Hokey","Basketball","Tennis"];
const ul = document.getElementById("sports-list");

for(let i = 0; i < sports.length; i++){
    const sport = sports[i];
    const li = document.createElement("li");
    li.innerText = sport;
    ul.append(li);
}

// === Colors List === 
const colors = ["Red","Green","Blue","Yellow","Black","White"];
const ul = document.getElementById('colors-list');

for(let i = 0; i <colors.length; i++){
    const color = colors[i];
    const li = document.createElement('li');
    li.innerText = color;
    ul.append(li);
}

// === Social Media Platforms === 
const socialMediaPlatforms = ["Facebook","Youtube","Instagram","Linkedin","Github"];
const ul = document.getElementById("social-list");

for(let i = 0; i < socialMediaPlatforms.length; i++){
    const socialPlatforms = socialMediaPlatforms[i];
    const li = document.createElement("li");
    li.innerText = socialPlatforms;
    ul.append(li);
}


// === Animals List === 
const animals = ["Lion","Tiger","Elephant","Horse","Dog","Cat"];
const ul = document.getElementById("animal-list");

for(let i = 0; i < animals.length; i++){
    const animal = animals[i];
    const li = document.createElement('li');
    li.innerText = animal;
    ul.append(li);
}

// === Animals List === 
const jobRolesList = ["Web Developer","Data Entry","Computer operator","Designer","SEO Exper"];
const ul = document.getElementById('job-list');

for(let i = 0; i < jobRolesList.length; i++){
    const job = jobRolesList[i];
    const li = document.createElement('li');
    li.innerText = job;
    ul.append(li);
}


// === Programming Languages ===
const programmingLanguages = ["Python","Javascript","C++","PHP","Java"];
const ul = document.getElementById('languages-list');

for(let i = 0; i < programmingLanguages.length; i++){
    const language = programmingLanguages[i];
    const li = document.createElement('li');
    li.innerText = language;
    ul.append(li);
}


// === Fruits List ===
const fruits = ["apple","banana","mango","orange","grapes"];
const ul = document.getElementById('fruits');

for(let i = 0; i < fruits.length; i++){
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
    ul.append(li);
}
