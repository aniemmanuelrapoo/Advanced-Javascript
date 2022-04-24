// //Understanding Closures
// function greet(whattosay){

//     return (name) => {
//         console.log(`${whattosay} ${name}`);
//     }
// }
// var sayHi = greet('Hi');
// sayHi("Tony")

// //Understanding Closures part 2 example1
// function buildFunction(){
//     var arr = [];
//     for (var i = 0; i < 3; i++){
//         arr.push(
//             function(){
//                 console.log(i);
//             }
//         )
//     }
//     return arr;
// }

// var fs = buildFunction();

// fs[0]();
// fs[1]();
// fs[2]();

// //Understanding Closures part 2 example2
// function buildFunction2(){
//     var arr = [];
//     //es6 fmt
//     // for (var i = 0; i < 3; i++){
//     //     let j = i;
//     //     arr.push(
//     //         function(){
//     //             console.log(j);
//     //         }
//     //     )
//     // }

//     //es5 fmt
//     for (var i = 0; i < 3; i++){
//         arr.push(
//             (function(j){
//                 return function(){
//                     console.log(j);
//                 }
//             }(i))
//         )
//     }
//     return arr;
// }

// var fs2 = buildFunction2();

// fs2[0]();
// fs2[1]();
// fs2[2]();

// // function factories (closures)
// function makeGreeting(language){
//     return function(firstname, lastname){
//         if(language === 'en'){
//             console.log(`Hello ${firstname} ${lastname}`);
//         }
//         if(language === 'es'){
//             console.log(`Hola ${firstname} ${lastname}`);
//         }
//     }
// }

// var greetEnglish = makeGreeting('en')
// var greetSpanish = makeGreeting('es')

// greetEnglish('john', 'doe')
// greetSpanish('rapo', 'man')

// //try this closure
// const ageNum = (age) => {
//     return (fn, ln) => {
//         console.log(`${fn} ${ln} is ${age}`);
//     }
// }

// let markAge = ageNum(20)
// let lightAge = ageNum(30)

// markAge('mark', 'john')
// lightAge('light', 'bro')

// //closeures and callbacks
// function sayHiLater(){
//     var greeting = "Hi";

//     setTimeout(() => {
//         console.log(greeting);
//     }, 3000);
// }

// sayHiLater();

// //jQuery uses function expression and first-class function
// //$("button").click(function(){

// // });

// // callback function
// function tellMeWhenDone(callback){
//     var a = 1000; // some work
//     var b = 2000; // some work

//     callback(); //the 'callback', it runs the function i give it!
// }
// tellMeWhenDone(function(){
//     console.log('I am done');
// })
// tellMeWhenDone(() => {
//     console.log('I am done the secound time');
// })

// //call apply and bind
// //understanding bind
// var person = {
//     firstname: 'john',
//     lastname: 'doe',
//     getFullname: function() {
//         let fullname = `${this.firstname} ${this.lastname}`
//         return fullname;
//     }
// }

// var logName = function(lang1, lang2){
//     console.log(`Logged ${this.getFullname()}`);
//     console.log(`Argument ${lang1} ${lang2}`);
//     console.log('.................');
// }
// var logPersonName = logName.bind(person);
// logPersonName('en', 'es');

// //call
// logName.call(person, 'en', 'es');

// //apply
// logName.apply(person, ['en', 'es']);

// // you can also use call, apply and bind to do this
// (function(lang1, lang2){
//     console.log(`Logged ${this.getFullname()}`);
//     console.log(`Argument ${lang1} ${lang2}`);
//     console.log('.................');
// }).apply(person, ['es', 'en']);

// //function borrowing
// var person2 = {
//     firstname: 'jane',
//     lastname: 'Doe'
// }

// console.log(person.getFullname.apply(person2));

// //function currying (has to do with bind)
// function mutiply(a, b){
//     return a*b;
// }
// var mutiplyByTwo = mutiply.bind(this, 2); //sets first parameter to be 2 by default
// console.log(mutiplyByTwo(4));

// var mutiplyByThree = mutiply.bind(this, 3);
// console.log(mutiplyByThree(4));

// //you can pamanetly set values
// var mutiplyBy = mutiply.bind(this, 3, 2); //over writes the first and secound parameter.
// console.log(mutiplyBy(4)); // this is a third parameter which is not used yet


//functional programming
function mapForEach(arr, fn){
    var newArr = [];
    for (var i=0; i < arr1.length; i++){
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item * 2
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item > 2
});
console.log(arr3);

var checkPastLimit = function(limiter, item){
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimit2 = function(len){
    return function(len, item){
        return item > len;
    }.bind(this, len)
}
var arr5 = mapForEach(arr1, checkPastLimit2(1));
console.log(arr5);