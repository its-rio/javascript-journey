// function acceptinf function as parameter

function greet(hellofn){
    hellofn()
}
greet(sayHello)

function sayHello(){
    console.log("Hello User");
}