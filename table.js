const details = [
    {id : 1 , fullName : "Bill Gates", position : 'Founder Microsoft' , salary : 1000},
    {id : 2 , fullName : "Steve Jobs", position : 'Founder Apple' , salary : 1200},
    {id : 3 , fullName : "Larry Page", position : 'Founder Google' , salary : 1100},
    {id : 4 , fullName : "Mark Zuckeberg", position : 'Founder Facebook' , salary : 1300}
    
];

const table = document.getElementById("htmlTable");

for(let i=0; i<details.length; i++){
    const tableData = details[i];
    const row1 = document.createElement("tr");

    for(const key in tableData){
        const td = document.createElement('td');
        td.innerText = tableData[key];
        row1.append(td);
    }
   
    
    table.append(row1);

}


const gadgets = [
    {product : "Laptop" , category : "Electronics" , price : `$800`},
    {product : "Bookshelf" , category : "Furniture" , price : `$150`},
    {product : "Coffee Maker" , category : "Appliances" , price : `$50`},
];

const tableTwo = document.getElementById('gadgets');

for(let i=0; i <gadgets.length; i++){
    const gadget = gadgets[i];
    const row = document.createElement('tr');
    
    for(const key in gadget){
        const td = document.createElement('td');
        td.innerText = gadget[key];
        row.append(td);
    }

    tableTwo.append(row)
};


const information = [
    {Name : "Anna Fitzgerald" , jobTitle : "Staff writer" , emailAdress : "example@gmail.com"},
    {Name : "John Smith" , jobTitle : "Marketing Manager" , emailAdress : "example2@gmail.com"},
    {Name : "Zendaya Grace" , jobTitle : "CEO" , emailAdress : "example3@gmail.com"}
];

const tableThree = document.getElementById("htmlTableThree");

for(let i=0; i <information.length; i++){
    const info = information[i];
    const row = document.createElement('tr');

    for(const key in info){
        const td = document.createElement('td');
        td.innerText = info[key];
        row.append(td);
    }
    
    tableThree.append(row)
}


const accountHolders = [
    {id : 231 , Name : "Albert Master" , Email : "albert.master@gmail.com" , investments : "Bonds"},
    {id : 210 , Name : "Alferd Alan" , Email : "aalan@gmail.com" , investments : "Stocks"},
    {id : 256 , Name : "Alison Smart" , Email : "asmart@biztalk.com" , investments : "Residential Property"},
    {id : 211 , Name : "Ally Emery" , Email : "alley@easymail.com" , investments : "Stocks"},
    {id : 248 , Name : "Andrew Phips" , Email : "andyp@mycorp.com" , investments : "Stocks"},
    {id : 234 , Name : "Andy Mitchel" , Email : "andym@hotmail.com" , investments : "Stocks"},
    {id : 226 , Name : "Angus Robins" , Email : "arobins@orbins.com" , investments : "Bonds"},
    {id : 241 , Name : "Ann Melan" , Email : "ann_melan@iinet.com" , investments : "Residential Property"},
    {id : 225 , Name : "Ben Bessel" , Email : "benb@hotmail.com" , investments : "Stock"},
    {id : 235 , Name : "Bensen Romanolf" , Email : "benr.@albert.net" , investments : "Bonds"},
];

const tableFour = document.getElementById('htmlTableFour');

for(let i=0; i < accountHolders.length; i++){
    const user = accountHolders[i];
    const row = document.createElement('tr');

    for(const key in user){
        const td = document.createElement("td");
        td.innerText = user[key];
        row.append(td);
    }

    tableFour.append(row);
}