// Reduce method 
    // - iterate on Array
    // - perform operation on item to reduce the value
    // - Return the array which is returned after certain operation

var arr = [2,6,8,15,12,31,24]

var reduced = arr.reduce(function (sum, item){
    return(sum = sum * item)                // - Return the array which is returned after certain operation
}, 0)                                 // initial value of sum given here

console.log(reduced);          // - Return the array which is returned after certain operation