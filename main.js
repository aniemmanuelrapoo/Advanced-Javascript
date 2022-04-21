// // long running function
// function waitThreeSecounds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms){}
//     console.log('finished function')
// }

// function clickHandler(){
//     console.log('click Event')
// }

// //listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSecounds();
// console.log('finished execution')

// console.log( new Date())

// var a = 3 + 4 * 5;
// console.log(a);

// var a = 2, b = 3, c = 4

// a = b = c

// console.log(a)
// console.log(b)
// console.log(c)

// var a = (3 + 4) * 5;
// console.log(a);

// var a = 1 + 2;
// console.log(a);


// comparisoin
// console.log(1 < 2 < 3)


// var a = 0
// var b = false

// if(a === b){
//     console.log('The are equal')
// }else{
//     console.log('Nope, not equal')
// }

//conceptual aside
//Boolean
// var a;

//goes to the internet and look for a value
// a = 0

// if(a || a === 0) {
//     console.log('something is there');
// }

// Default Values
// const greet = (name) => {
//     name = name || '<Your name here>'
//     console.log(`Hello ${name}`);
// }

// greet("rapoo")
// greet()

// Frame Works
// console.log(libraryName);

//object and the dot
//not the good way to create objects

// var person = new Object();

// person["firstname"] = "Tony";
// person["lastname"] = "Rapoo"

// var firstNameProperty = "firstname"

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "10 main str..."
// person.address.city = "New York"

// console.log(person.address.street);
// console.log(person["address"]["city"]);

//object literials
//best way to write objects

// var Rapoo = {
//     firstname: "rapoo",
//     lastname: "Tony",
//     address: {
//         street: "10 main st..",
//         city: "New York"
//     }
// }

// function greet(person){
//     console.log(`Hi ${person.firstname}`);
// }

// greet(Rapoo)

// // creating objects on the fly
// greet({
//     firstname: "Mary",
//     lastname: "Doe"
// })

// Rapoo.address2 = {
//     home: "Heaven"
// }
// console.log(Rapoo);

//Back to frameWorks faking namespace

// var greet = 'Hello';
// var greet = 'Hola'
// console.log(greet);

// var english = {
//     greetings: {
//         basic: 'Helo'
//     }
// }

// var spanish = {};

// spanish.greet = "Hola"

// console.log(english);

// JSON and obj literials

// converting obj to JSON
// var objectLiterials = {
//     firstname: 'Mary',
//     isAProgrammer: true
// }
// console.log(JSON.stringify(objectLiterials));

// //converting JSON to object
// var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgrammer": true}');

// console.log(jsonValue);

//functions are objects
// function greet() {
//     console.log('hi');
// }

// greet.language = 'english'
// console.log(greet.language);

// //function statement
// const greet = () => {
//     console.log('h1');
// }
// greet()
// //function expresion
// var annonymousGreet = function() {
//     console.log('hi');
// }
// annonymousGreet()

// //function expression 2
// function log(a){
//     a()
// }
// log(function() {
//     console.log("hi");
// })

// //by value, by reference
// //by value (primitives)
// var a = 3;
// var b;

// b = a;
// a =  2;

// console.log(a);
// console.log(b);

// //by reference (all objects (including functions))
// var c = { greetings: 'hi' };
// var d;

// d = c;
// c.greetings = 'hello'; // mutate

// console.log(c);
// console.log(d)

// //by reference (even as parameters)
// function changeGreetings(obj) {
//     obj.greetings = 'Hola'; // mutate
// }

// changeGreetings(d);
// console.log(c)
// console.log(d)

// //equals operator sets up new memory space (new address)
// c = { greetings: 'howdy' }
// console.log(c)
// console.log(d)

//objects, functions and this
function a () {
    console.log(this);
    this.newVariable = "hello"
}
var b = function() {
    console.log(this);
}

a();

console.log(newVariable);
b();