// const details = [
//     {id : 1 , fullName : "Bill Gates", position : 'Founder Microsoft' , salary : 1000},
//     {id : 2 , fullName : "Steve Jobs", position : 'Founder Apple' , salary : 1200},
//     {id : 3 , fullName : "Larry Page", position : 'Founder Google' , salary : 1100},
//     {id : 4 , fullName : "Mark Zuckeberg", position : 'Founder Facebook' , salary : 1300}
    
// ];

// const table = document.getElementById("htmlTable");

// for(let i=0; i<details.length; i++){
//     const tableData = details[i];
//     const row1 = document.createElement("tr");

//     for(const key in tableData){
//         const td = document.createElement('td');
//         td.innerText = tableData[key];
//         row1.append(td);
//     }
   
    
//     table.append(row1);

// }


// const gadgets = [
//     {product : "Laptop" , category : "Electronics" , price : `$800`},
//     {product : "Bookshelf" , category : "Furniture" , price : `$150`},
//     {product : "Coffee Maker" , category : "Appliances" , price : `$50`},
// ];

// const tableTwo = document.getElementById('gadgets');

// for(let i=0; i <gadgets.length; i++){
//     const gadget = gadgets[i];
//     const row = document.createElement('tr');
    
//     for(const key in gadget){
//         const td = document.createElement('td');
//         td.innerText = gadget[key];
//         row.append(td);
//     }

//     tableTwo.append(row)
// };


// const information = [
//     {Name : "Anna Fitzgerald" , jobTitle : "Staff writer" , emailAdress : "example@gmail.com"},
//     {Name : "John Smith" , jobTitle : "Marketing Manager" , emailAdress : "example2@gmail.com"},
//     {Name : "Zendaya Grace" , jobTitle : "CEO" , emailAdress : "example3@gmail.com"}
// ];

// const tableThree = document.getElementById("htmlTableThree");

// for(let i=0; i <information.length; i++){
//     const info = information[i];
//     const row = document.createElement('tr');

//     for(const key in info){
//         const td = document.createElement('td');
//         td.innerText = info[key];
//         row.append(td);
//     }
    
//     tableThree.append(row)
// }


// const accountHolders = [
//     {id : 231 , Name : "Albert Master" , Email : "albert.master@gmail.com" , investments : "Bonds"},
//     {id : 210 , Name : "Alferd Alan" , Email : "aalan@gmail.com" , investments : "Stocks"},
//     {id : 256 , Name : "Alison Smart" , Email : "asmart@biztalk.com" , investments : "Residential Property"},
//     {id : 211 , Name : "Ally Emery" , Email : "alley@easymail.com" , investments : "Stocks"},
//     {id : 248 , Name : "Andrew Phips" , Email : "andyp@mycorp.com" , investments : "Stocks"},
//     {id : 234 , Name : "Andy Mitchel" , Email : "andym@hotmail.com" , investments : "Stocks"},
//     {id : 226 , Name : "Angus Robins" , Email : "arobins@orbins.com" , investments : "Bonds"},
//     {id : 241 , Name : "Ann Melan" , Email : "ann_melan@iinet.com" , investments : "Residential Property"},
//     {id : 225 , Name : "Ben Bessel" , Email : "benb@hotmail.com" , investments : "Stock"},
//     {id : 235 , Name : "Bensen Romanolf" , Email : "benr.@albert.net" , investments : "Bonds"},
// ];

// const tableFour = document.getElementById('htmlTableFour');

// for(let i=0; i < accountHolders.length; i++){
//     const user = accountHolders[i];
//     const row = document.createElement('tr');

//     for(const key in user){
//         const td = document.createElement("td");
//         td.innerText = user[key];
//         row.append(td);
//     }

//     tableFour.append(row);
// };


// const productOrders = [
//     {product : "Monitor", Group : "Computers and Peripherals" , dateOfDelivery : "12/10/2013" ,Provider : "Intersection", Quantity : 10 , Price : `$390.00`, amount : `$3,900.00` },
//     {product : "System Unit", Group : "Computers and Peripherals" , dateOfDelivery : "8/10/2014" , Provider : "Magnet",Quantity : 12 , Price : `$420.00`, amount : `$5,040.006` },
//     {product : "Video Card", Group : "Computers and Peripherals" , dateOfDelivery : "10/30/2013" , Provider : "Magnet",Quantity : 23 , Price : `$540.00`, amount : `$12,420.00` },
//     {product : "Computer desk", Group : "Furniture" , dateOfDelivery : "6/26/2015" , Provider : "Driveway",Quantity : 14 , Price : `$130.00`, amount : `$1,820.00` },
//     {product : "Computer chair", Group : "Furniture" , dateOfDelivery : "9/24/2013" , Provider : "Driveway",Quantity : 43 , Price : `$70.00`, amount : `$3,010.00` },
//     {product : "A shelf", Group : "Furniture" , dateOfDelivery : "12/7/2012" , Provider : "Nori",Quantity : 25 , Price : `$210.00`, amount : `$625.00` },
//     {product : "Sofa", Group : "Furniture" , dateOfDelivery : "2/1/2015" , Provider : "Nori",Quantity : 13 , Price : `$580.00`, amount : `$2,730.00` },
//     {product : "Video Card", Group : "Computers and Peripherals" , dateOfDelivery : "3/7/2014" , Provider : "Magnet",Quantity : 19 , Price : `$600.00`, amount : `$11,020.00` },
//     {product : "A laptop", Group : "Computers and Peripherals" , dateOfDelivery : "10/4/2012" , Provider : "in touch",Quantity : 32 , Price : `$320.00`, amount : `$19,200.00` },
//     {product : "Phones 111", Group : "Phones" , dateOfDelivery : "2/18/2013" , Provider : "Nardis",Quantity : 10 , Price : `$370.00`, amount : `$3,200.00` },
//     {product : "Phones 234", Group : "Phones" , dateOfDelivery : "7/4/2015" , Provider : "Nardis",Quantity : 43 , Price : `$420.00`, amount : `$15,910.00` },
//     {product : "Monitor", Group : "Computers and Peripherals" , dateOfDelivery : "6/30/2014" , Provider : "Intersection",Quantity : 10 , Price : `$100.00`, amount : `$4,200.00` },
//     {product : "Computer desk", Group : "Furniture" , dateOfDelivery : "5/8/2013" , Provider : "Driveway",Quantity : 5 , Price : `$35.00`, amount : `$500.00` },
//     {product : "A shelf", Group : "Furniture" , dateOfDelivery : "12/10/2014" , Provider : "Driveway",Quantity : 12 , Price : `$4200.00`, amount : `$420.00` },
//     {product : "Phone 111", Group : "Phones" , dateOfDelivery : "8/5/2015" , Provider : "Magnet",Quantity : 4 , Price : `$30.00`, amount : `$3,780.00` },
// ];


// const tableFive = document.getElementById("htmlTableFive");

// for(let i=0; i < productOrders.length; i++){
//     const product = productOrders[i];
//     const row = document.createElement('tr');

//     for(const key in product){
//         const td = document.createElement("td");
//         td.innerText = product[key];
//         row.append(td);
//     }

//     tableFive.append(row);
// };


const dailyRoutines = [
    {id : 1 , todo : "daily coding pratice" , completed : true},
    {id : 2 , todo : "Namaz parhna" , completed : true},
    {id : 3 , todo : "exercise" , completed : false},
    {id : 4 , todo : "meet with friends" , completed : false},
    {id : 5 , todo : "use social media" , completed : true},
    {id : 6 , todo : "Learn Javascript" , completed : true}
];

const ul = document.getElementById("routineList");

for(let i=0; i <dailyRoutines.length; i++){
    const todo = dailyRoutines[i];
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    li.append(checkbox);
    li.append(todo.todo);
    ul.append(li);
    
};