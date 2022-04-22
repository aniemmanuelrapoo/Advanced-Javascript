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

// //objects, functions and this
// function a () {
//     console.log(this);
//     this.newVariable = "hello"
// }
// var b = function() {
//     console.log(this);
// }

// a();

// console.log(newVariable);
// b();

// var c = {
//     name: 'The C Object',
//     log: function() {
//         var self = this;

//         self.name = 'Updated C Object'
//         console.log(self);

//         var setname = function(newname){
//             self.name = newname
//         }
//         setname("updated again!!! the c obj")

//         console.log(self)
//     }
// }

// c.log()

// //arrays
// var arr = [
//     1,
//     false,
//     {
//         name: 'Rapoo',
//         address: "10 main str"
//     },
//     function(name) {
//         var greetings = "hello"
//         console.log(`${greetings} ${name}`);
//     },
//     "hello"
// ]

// console.log(arr);
// arr[3](arr[2].name)

// //Arguments and Spread
// function greet(firstname, lastname, language = "en"){
//     if(arguments.length === 0){
//         console.log('Missing parameter');
//         console.log('**********');
//         return;
//     }

//     lastname = lastname || "pablo"
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments);
//     console.log(`arg 0: ${arguments[0]}`);
//     console.log("----------");
// }

// greet();
// greet("frank");
// greet("matt", 'frank');
// greet('john', 'rapo', 'english'); 

// //function Overloading
// function greet(firstname, lastname, language){
//     language = language || 'en';

//     if(language === 'en'){
//         console.log(`Hello ${firstname} ${lastname}`);
//     }
//     if(language === 'es'){
//         console.log(`Hola ${firstname} ${lastname}`);
//     }
// }
// function greetEnglish(firstname, lastname){
//     greet(firstname, lastname, 'en')
// }
// function greetSpanish(firstname, lastname){
//     greet(firstname, lastname, 'es')
// }
// greetEnglish('john', 'doe')
// greetSpanish('john', 'doe')

// // Automatc semicolon insertion
// function getPerson(){
//     return {
//         firstname: 'Tony'
//     }
// }

// console.log(getPerson());

//always comment your code(use of whitespace)
var 
    //first name of the person
    firstname,

    //lastname of the person
    lastname,

    //the language
    //can be 'en' or 'es'
    language;

var person = {
    //the first name
    firstname: 'john',

    //the last name
    //(always required)
    lastname: 'doe'
}
console.log(person);