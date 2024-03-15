function sayHello(){
    console.log("Hello User");
}

function greet(hellofn){
    hellofn()
}
greet(sayHello)