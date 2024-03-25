// Function Expression

var funcExpression = function newFunc(name, age, greetingFunction){
    greetingFunction()
}

function myFunction(){
    console.log("Hello World !");
}

funcExpression("Rio", 22, myFunction)

// Function declaration

// function newFunc(name, age, greetingFunction){
//     greetingFunction()
// }

// function myFunction(){
//     console.log("Hello World !");
// }

// newFunc("Rio", 22, myFunction)