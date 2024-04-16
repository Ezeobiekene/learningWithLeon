// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

//===========================================Variables========================================================
//var, let, const - 

// const age = 30; - use this unless you know you are going to change the value of the variable
// let score= 10; - let is used because the score in games change
// age = 31;

// console.log(age);

//===========================================Data Types========================================================
//String, Numbers, Boolean, null, undefined

// const personName = 'John';
// const age = 30;
// // const rating = 4.5;
// // const isCool = true;
// // const x = null;
// // const y = undefined;
// // let z;

// // console.log(typeof x);

//===========================================Strings========================================================
// console.log('My name is ' + personName +' and I am '+ age);

// const hello = (`My name is ${personName} and I am ${age}`);
// console.log(hello);


// const s = "Ekene is a good girl who will always do her very best by God's grace";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());

// console.log(s.split(''));

//===========================================Arrays========================================================

//creating an array using the constructor
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// //the normal way
// const fruits = ['apples', 'oranges','pears'];
// console.log(fruits);

// console.log(fruits[0]);

// fruits[3] = 'grapes';//adding to the array by index

// //to add to the end if i dont know how many fruit array contains
// fruits.push('mangos');

// //to add to the beginning of the array
// fruits.unshift('strawberries');
// console.log(fruits);

// fruits.pop(); //takes of the last one

// console.log(Array.isArray('hello'));//to check if an something is an array

// console.log(fruits.indexOf('oranges'));//to check the index of a value

// console.log(fruits);


//===========================================Object literals========================================================

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.firstName, person.lastName);

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const { firstName, lastName, address: { city }} = person;

// console.log(firstName);

// person.email = 'john@email.com';
// console.log(person.email)

// const todos =[
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

// console.log(todos);
// console.log(todos[1].text);


// //===========================================JSON========================================================


// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//===========================================loops========================================================

// //for loop
// for(let i = 0; i < 10; i++){
//     console.log(`for loop Number : ${i}`);
// }

// //while
// let i = 0;
// while(i <10){
//     console.log(`for while Number : ${i}`);
//     i++;
// }

// for(let i = 0; i < todos.length; i++){
//     console.log(`for loop Number : ${i}`);
//     console.log(todos[i].text);
// }

// //for of
// for(let todo of todos){
//     console.log(todo.text);
// }

// //forEach
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// //map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// //filter
// const todosCompleted = todos.filter(function(todo){
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// })

// const todosCompleted = todos.filter(function(todo){
//     return todo.isCompleted == true;
// });

// console.log(todosCompleted);

//===========================================Conditionals========================================================

// const  x = 10;

// // '==' doesn't match data type while '===' matches data type
// if(x === 10){
//     console.log('x is 10');
// } else if (x > 10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }

// // || - or, && - and3
// if (x > 5|| y> 10) {
//     console.log('x is more than 5 or y is more than 10')
// }

//===========================================ternary operator========================================================
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

//===========================================switches========================================================

// const x = 11;

// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// console.log(color);

// ===========================================function========================================================

// function addNums (num1 = 1, num2 = 3){
//     return num1 + num2;
// }
// console.log(addNums(5,5));

// //arrow function
// const addNum = (num1 = 1, num2 = 3) => {
//     console.log(num1 + num2);
// }
// addNum(5,1);

// //or
// const addNum1 = (num1 = 1, num2 = 3) => console.log(num1 + num2);
// addNum1(5,2);

// //or
// const addNum2 = (num1 = 1, num2 = 3) => num1 + num2;
// console.log(addNum2(5,3));

// //arrow function in array using for each loop

// todos.forEach((todo) => console.log(todo.id));



// ===========================================OOP========================================================

//constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

    // //function to get year of birth
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }

    // //function to get fullname
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
// }

// //better way to make the functions
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

//Class
// class Person{
//      constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//      }

//      getBirthYear(){
//         return this.dob.getFullYear();
//      }

//      getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//      }
// }


// //Instantiate object
// const person1 = new Person('John', 'Doe', '4-13-2003');

// console.log(person1.getFullName());

// ===========================================DOM)(Document Object Model)========================================================

//single element selector
// console.log(document.getElementById('my-form'));

// //query selector
// console.log(document.querySelector('h1'));

// //Multiple element selector
// // querySelector and query selector all are the once to use
// console.log(document.querySelectorAll('#my-form'));

// console.log(document.getElementsByClassName('item'));

// console.log(document.getElementsByTagName('li'));

// // //looping through the items using query selector
// const items = document.querySelectorAll('.item');

// items.forEach(item => console.log(item));


// ===========================================DOM)(Document Object Model), dom manipulation========================================================
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';

// ul.children[1].innerText = 'Brad';

// //adding HTML through JavaScript
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');

// //manipulating CSS
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';

//     // document.querySelector('body').classList.add('bg-dark');
    
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList= document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
//     e.preventDefault();
//     // console.log(nameInput.value);

//     if(nameInput.value == '' || emailInput.value == ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         setTimeout(() => msg.remove(), 3000);
//     }else{
//        const li = document.createElement('li');
//        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//        userList.appendChild(li);

//     //    Clear the fields
//        nameInput.value = '';
//        emailInput.value = '';
//     }
// }



// document.getElementById('blue').onClick = partyBlue;
// document.querySelector('body').style.background = 'blue';



// ===========================================forEach method========================================================

// ForEach with a regular function
// const numbers = [1, 2, 3, 4, 5]

// numbers.forEach(consoleItem)

// function consoleItem(item, index, arr){
//     console.log(`a[${index}] = ${item}`)
// }

// // ForEach with an arrow function
// const numbs= [1, 2, 3, 4, 5]

// numbs.forEach((item, index, arr) => console.log(`a[${index}] = ${item}`))


// ===========================================map method========================================================

// const numbers = [1, 2, 3, 4, 5]

// const doubleArray = numbers.map()

// function double(value, index, arr){
//     return value * 2
// }


// ===========================================filter method========================================================

//  const numbers = [1, 2, 3, 4, 5, 6]
 
//  const even = numbers.filter((value) => {
//     return value % 2 == 0
//  })
//  console.log(even)


// ===========================================reduce method========================================================
const numbers = [1, 2, 3, 4, 5, 6]

const total = numbers.reduce(sum, 0)

function sum(accumulator, value, index, arr){
    return accumulator + value
}