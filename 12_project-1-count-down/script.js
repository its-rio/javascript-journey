const endDate = "9 May 2024 10:47 AM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;

    if (diff < 0)
return;    // console.log(diff);
    inputs[0].value = Math.floor(diff / 3600 / 24);   //days calculate
    inputs[1].value = Math.floor(diff / 3600) % 24;   // convert into hours
    inputs[2].value = Math.floor(diff / 60) % 60;    //convert into minutes
    inputs[3].value = Math.floor(diff) % 60;    //convert into seconds
}
// initial call
clock()


setInterval(function(){
    clock()
}, 1000)
