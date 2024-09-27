// const objectA = {
//     a: 10,
//     b: true
// };

// const copyOfA = objectA;

// copyOfA.c = 'abc';

// console.log(copyOfA); 

// const myCity = {
//     city: 'New York'
// }

// myCity.popular = true;

// console.log(myCity);

// myCity.country = 'USA';

// console.log(myCity);

// delete myCity.popular;

// console.log(myCity); 

// const myCity = {
//     city: 'Budapest'
// }

// myCity['popular'] = true;

// const countryPropertyName = 'country';

// myCity[countryPropertyName] = 'Egypt';

// const myCity = {
//     city: 'Budapest',
//     info: {
//         isPopular: true,
//         country: 'Europe'
//     }
// }

// console.log(myCity.info.isPopular);

// delete myCity.info['isPopular'];

// console.log(myCity);

// const name = 'Shokhrukh';
// const postsQty = 23;

// const userProfile = {
//     name: name,
//     postsQty: postsQty,
//     hasSignedAgreement: false,
// }

// console.log(userProfile);

// const userProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false,
// }

// console.log(userProfile);

// const myCity = {
//     city: 'Washington',
//     cityGreetings: function() {
//         console.log('Greetings!!')
//     }
// }

// myCity.cityGreetings(); 

// const person = {
//     name: 'Bob',
//     age: 22
// }

// const person2 = {...person};
// person2.name = 'Alice'

// console.log(person.name);
// console.log(person2.name);

// const person = {
//     name: 'Bob',
//     age: 22
// }

// const person2 = JSON.parse(JSON.stringify(person));

// person2.name = 'Elvin'

// console.log(person.name);
// console.log(person2.name);

// let a = 5;
// let b = 3;

// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// }
// sum(3, 7);

// a = 8;
// b = 12;

// sum(a, b);

// function myFn(a, b) {
//     let c
//     a = a + 1 
//     c = a + b
//     return c
// }

// myFn(3, 5); 

// function myFn() {};
// myFn();

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     person.age += 1
//     return person
// }

// increasePersonAge(personOne);
// console.log(personOne.age);

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne);
// console.log(personOne.age);
// console.log(updatedPersonOne.age);

// function anotherFunction() {
//     //действия
// }

// function fnWithCallback(fnWithCallback) {
//     fnWithCallback()
// }

// fnWithCallback(anotherFunction); 

// function printMyName() {
//     console.log('Bogdan')
// }
// console.log('Start')
  
// setTimeout(printMyName, 2000)

// const a  = 5; 

// function myFn() {
//     function innerFn(){
//         console.log(a)
//     }
//     // innerFn()
// }
// innerFn()
// myFn();

// let b; 
// let a;

// function myFn() {
//     let b
//     a = true
//     b = 10
//     console.log(a)
// }

// myFn()    

// console.log(a);
// console.log(b);

// let c = {};
 
// const button = {
//     width: 200,
//     text: 'buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }
// console.table(redButton);

// const hello = 'Hello';
// const world = 'World';

// const greetings = `${hello} ${world}`;
// console.log(greetings);

// const name = 'Shokhrukh';
// const city = 'Gwangju';

// const aboutMe = `Меня зовут ${name} и я живу в городе ${city}`
// console.log(aboutMe);

// анонимная функция внутри сетТаймаут():

// setTimeout(function() {
//     console.log('Отложенное сообщение')
// }, 1000);

// setTimeout(() => {
//     console.log('Отложенное сообщение')
// }, 1000);

// const testFn =  function(value, multiplier = 1) {
//    const sum = value * multiplier
//     console.log(sum);
// }

// testFn(20, 2);

// const secondFn = ((value, multiplier = 1) => {
//     const sum = value * multiplier
//     return sum
// })
// console.log(secondFn(4, 6))

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const firstPost = {
//     id: 1,
//     author: 'Shokhrukh',
// }

// const testView = newPost(firstPost);
// console.log(testView);

// const fnWithError = () => {
//     throw new Error('Some error' )
// }

// try {
//     fnWithError()
// }catch(error) {
//     console.error(error)
//     console.log(error.message)
// }
// console.log('...Continue')

// class Comment {
//     constructor(text) {
//         this.text = text,
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }

//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// } 

https://jsonplaceholder.typicode.com/todos


// const getData = (url) => 
//     new Promise((resolve, reject) =>
//     fetch(url)
//     .then(response => response.json())
//     .then(json => resolve(json))
//     .catch(error => reject.error(error))
// ) 

// getData('https://jsonplaceholder.typicode.com/todos')
// .then(data => console.log(data))
// .catch(error => console.log(error.message))

// const asyncFn = async() => {
//     return '10'
// }
// asyncFn()
// .then(value => console.log(value))

// const asyncFn = async() => {
//     throw new Error('There was an error')
// }
// asyncFn()
// .then(value => console.log(value))
// .catch(error => console.error(error.message))

// const timerPromise = () => 
//     new Promise((resolve, reject) => 
//     setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer ended', endTime - startTime)
// }
// asyncFn()

// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// const data = await getData(url)

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url)
    console.log(data)
}catch(error) {
    console.error(error)
    console.log(error.message)
}