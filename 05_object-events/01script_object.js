// Object

var student = {
    name: "rio",
    age: 22,
    degree: "MCA"
}

// copy-by-value

var a = 10
var b = a
b = a + 10
console.log(a);
console.log(b);

// copy-by-reference
var home = {
    name: "mandir",
    age: 40
}

var home2 = home;

home2.age = 60;

console.log(home);
console.log(home2);


// Accessing values of objects

// 1. Dot notation      => console.log(home.age)
// 2. square notation   => console.log(home[age])


