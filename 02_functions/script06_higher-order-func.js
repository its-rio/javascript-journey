//  Higher Order function which taking other function as parameter

function newFunc(name, age, greetingFunction){
    greetingFunction()
}

function myFunction(){
    console.log("Hello World !");
}

newFunc("Rio", 22, myFunction)

//  Higher Order function which which returning  anouther function from inside

function myFunction(){
    console.log("Hello World !");

    function returnedFunc(){
        console.log("Tbis is a return suncti0n !");
    }
    return returnedFunc
}

var ans = myFunction()
ans()
// console.log(ans);