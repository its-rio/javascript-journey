const questions = [
    {
        'que': "Which is correct markup language?",
        'a': "HTML",
        'b': "PHP",
        'c': "CSS",
        'd': "JS",
        'correct': "a"
    },
    {
        'que': "Which year HTML launch?",
        'a': "1996",
        'b': "1988",
        'c': "1960",
        'd': "1978",
        'correct': "c"
    },
    {
        'que': "Which is fullform of CSS?",
        'a': "hypertext markup language",
        'b': "jason object notation",
        'c': "andu pandu gandu",
        'd': "cascading stylesheet",
        'correct': "d"
    }
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options")
const loadQuestions = () =>{
    if(total === index){
        // console.log(index, total);
        return endQuiz();
    }
    reset();
    const data = questions[index];
    // console.log(data);
    quesBox.innerText = `${index+1 }) ${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}


// const submitQuize = () =>{
//     const data = questions[index];
//     const ans = getAnswer();
//     // console.log(ans, data.corect);
    
//     if(ans === data.corect){
//         right++;
//         // console.log(right, wrong);
//     }else{
//         wrong++;
//     }
//     index++;
//     loadQuestions();
//     return;
// }
document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = questions[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        loadQuestions()
    }
)

const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        function(input){
            if(input.checked){
                answer =  input.value;
            }
        } 
    )
    return answer;
}
// reset the inputs to empty
function reset(){
    optionInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

// to end the quize
function endQuiz(){
    document.getElementsByClassName("box")[0].innerHTML = 
    `<h3>Thank You for playing the Quize!! Your Score is </h3>
    <h2>${right} / ${total} are correct</h2>`
}

// initial call
loadQuestions()