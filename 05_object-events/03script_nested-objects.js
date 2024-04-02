const student = {
    name: "rio",
    age: 20,
    marks: {
        maths: 20,
        hindi: 30,
        science: 40
    }
}

console.log(student.marks);
console.log(student.marks["maths"]);

// Array of objects
const student2 = {
    name: "rio",
    age: 20,
    marks: [
        {maths: 20},
        {science: 30}
    ]
}
console.log(student2);
console.log(student2.marks);