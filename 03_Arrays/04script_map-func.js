// Map method 
    // - iterate on Array
    // - perform operation on item
    // - Return the array which is returned after certain operation

var arr = [2,6,8,15,12,31,24]

var ans = arr.map(function (item, index){
    return(item * 2);                      // - Return the array which is returned after certain operation
})

console.log(ans);