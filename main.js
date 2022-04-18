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
var a;

//goes to the internet and look for a value
// a = 0

// if(a || a === 0) {
//     console.log('something is there');
// }

// Default Values
const greet = (name) => {
    console.log(`Hello ${name}`);
}

greet("rapoo")