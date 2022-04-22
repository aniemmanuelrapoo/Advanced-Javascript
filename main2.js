//Understanding Closures
function greet(whattosay){

    return (name) => {
        console.log(`${whattosay} ${name}`);
    }
}
var sayHi = greet('Hi');
sayHi("Tony")