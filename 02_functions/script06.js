

function myFunction(){
    console.log("Hello World !");

    function returnedFunc(){
        console.log("Tbis is a return suncti0n !");
    }
    return returnedFunc
}

var ans = myFunction()
ans()
// console.log(ans);