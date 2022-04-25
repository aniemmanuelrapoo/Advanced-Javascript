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

//Reflection and extend
//understanding reflection
var person = {
    fisrtname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return `${this.fisrtname} ${this.lastname}`
    }
}

var john = {
    fisrtname: 'John',
    lastname: 'Doe'
}

//dont do this EVER! for demo purposes only!!
john.__proto__ = person

for(var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

//using underscore
var jane = {
    address: '111 main st',
    getFormalFullName: function(){
        return this.lastname + ", " + this.fisrtname;
    }
}

var jim = {
    getFirstName: function(){
        return fisrtname;
    }
}
_.extend(john, jane, jim);
console.log(john);