// //Understanding Closures
// function greet(whattosay){

//     return (name) => {
//         console.log(`${whattosay} ${name}`);
//     }
// }
// var sayHi = greet('Hi');
// sayHi("Tony")

//Understanding Closures part 2 example1
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

//Understanding Closures part 2 example2
function buildFunction2(){
    var arr = [];
    //es6 fmt
    // for (var i = 0; i < 3; i++){
    //     let j = i;
    //     arr.push(
    //         function(){
    //             console.log(j);
    //         }
    //     )
    // }

    //es5 fmt
    for (var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunction2();

fs2[0]();
fs2[1]();
fs2[2]();