// forEach() is a Function/Method 
    // - iterate on Array
    // - perform operation on item
    // - Does not Return the array which is returned after certain operation

var arr = [23,56,85,45,12,36,74]

arr.forEach(function double(item, index){
    console.log("The item in the array: " + item);
    console.log(("The index of item in array: " + index));
    console.log(item * 2);
})

console.log(arr);                //Original array doesn't change cause array is not referential like object 

