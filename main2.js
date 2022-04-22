// //Understanding Closures
// function greet(whattosay){

//     return (name) => {
//         console.log(`${whattosay} ${name}`);
//     }
// }
// var sayHi = greet('Hi');
// sayHi("Tony")

//Understanding Closures part 2
function buildFunction(){
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunction();

fs[0]();
fs[1]();
fs[2]();