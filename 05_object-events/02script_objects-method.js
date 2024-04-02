var student = {
    name: "rio",
    age: 22,
    degree: "MCA"
}

// For-in loop

for(var key in student){
    console.log(key);
    console.log(student[key]);
}

// other methods => check the key present or not

console.log(student.hasOwnProperty("name"));

// other functions => 
// Object.keys()
// Object.values()
// Object.entries()

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// forEach loop

var keys = Object.keys(student)           // Keys

keys.forEach(function (key){
    console.log(student[key]);
})

// for loop

for(var i=0; i<keys.length; i++){
    console.log(keys[i]);
    console.log(student[keys[i]]);
}


var values = Object.values(student)
console.log(values);

var entries = Object.entries(student)
for(var entry of entries){       //here we use for of because entries are array form
    console.log(entry);
    // console.log(entry[0]);
}