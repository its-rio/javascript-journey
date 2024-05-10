const getColor = () =>{
    // hex code
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNum.toString(16);
    // console.log(randomNum, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    // copy hex code to clipboard
    // navigator.clipboard.writeText(randomCode);
    
}
// initial call
getColor()

// function call
document.getElementById("btn").addEventListener("click", getColor);