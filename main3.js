// //understanding prototype
// var person = {
//     fisrtname: 'Default',
//     lastname: 'Default',
//     getFullName: function(){
//         return `${this.fisrtname} ${this.lastname}`
//     }
// }

// var john = {
//     fisrtname: 'John',
//     lastname: 'Doe'
// }

// //dont do this EVER! for demo purposes only!!
// john.__proto__ = person
// console.log(john.getFullName());
// console.log(john.fisrtname);

// var jane = {
//     fisrtname: 'Jane'
// }
// jane.__proto__ = person;
// console.log(jane.getFullName());


// //Everything is an object or a primitive
// var a = {};
// var b = function() { };
// var c = [];

// //Reflection and extend
// //understanding reflection
// var person = {
//     fisrtname: 'Default',
//     lastname: 'Default',
//     getFullName: function(){
//         return `${this.fisrtname} ${this.lastname}`
//     }
// }

// var john = {
//     fisrtname: 'John',
//     lastname: 'Doe'
// }

// //dont do this EVER! for demo purposes only!!
// john.__proto__ = person

// for(var prop in john){
//     if(john.hasOwnProperty(prop)){
//         console.log(prop + ': ' + john[prop]);
//     }
// }

// //using underscore
// var jane = {
//     address: '111 main st',
//     getFormalFullName: function(){
//         return this.lastname + ", " + this.fisrtname;
//     }
// }

// var jim = {
//     getFirstName: function(){
//         return fisrtname;
//     }
// }
// _.extend(john, jane, jim);
// console.log(john);


// //Building Objects (function constructors and the keyword 'new') new folder
// function Person(fn, ln) {
//     console.log(this);
//     this.firstname = fn;
//     this.lastname = ln;
//     console.log('this is invoked');
// }

// Person.prototype.getFullName = function(){
//     return this.firstname + " " + this.lastname;
// }

// var john = new Person('john', 'doe');
// console.log(john);

// var jane = new Person('jane', 'doe');
// console.log(jane);

//Built in function constrctors
String.prototype.isLengthGraterThan = function(limit){
    return this.length > limit
}
console.log("john".isLengthGraterThan(3));