// Filter method 
    // - iterate on Array
    // - perform operation on item to filter the item
    // - Return the array which is returned after certain operation

var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

var result = words.filter(function(item){
    return( item.length > 6)
});

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//  Even number find
arr = new Array(1, 2, 3, 6, 5, 4); 
var new_arr = arr.filter(function (x){ 
    return x % 2==0; 
}); 
  
console.log(new_arr) 