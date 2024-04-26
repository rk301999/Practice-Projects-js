const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }  
];

const question = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const next = document.querySelector("#next-btn");


//  console.log(question.dataset);
// console.log(answerButtons.dataset);
// console.log(next.dataset);

let currentIndex = 0;
let currentScore = 0;

const startGame=()=>{
    currentIndex = 0;
    currentScore = 0;
    next.innerHTML = "Next";
    showQuestions();
}

startGame();

function resetState(){
    next.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    question.innerHTML = questionNo + ". " +currentQuestion.question; 
    // let correctAns = "";

    currentQuestion.answers.forEach(element => {
        const btn = document.createElement("button");
        console.log(btn.dataset);
        btn.innerHTML = element.text;
        btn.classList.add("btn");
        if(element.correct){
            // console.log(btn.dataset);
            btn.dataset.correct = element.correct;
        }
        answerButtons.appendChild(btn);  
        
        btn.addEventListener("click",(e)=>{
            const selectedBtn = e.target;
            if(selectedBtn.dataset.correct ){
                selectedBtn.classList.add("correct");
                console.log(currentScore);
                currentScore++;
            }
            else
                selectedBtn.classList.add("incorrect");
            Array.from(answerButtons.children).forEach((event)=>{
                if(event.dataset.correct){
                    event.classList.add("correct");
                }
                event.disabled = true;
            })
            next.style.display = "block";
        })
    });
    next.addEventListener("click",()=>{
        if(currentIndex < questions.length){
            handleNextButton();
        }else{
            startGame();
        }
    })
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex < questions.length)
        showQuestions();
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    question.innerHTML = `Your Score is ${currentScore} / ${questions.length}`;
    next.innerHTML = "play again";
    next.style.display = "block";
}
