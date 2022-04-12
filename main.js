// long running function
function waitThreeSecounds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function')
}

function clickHandler(){
    console.log('click Event')
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSecounds();
console.log('finished execution')