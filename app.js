let questions =
    [
        "Who portrayed the nightmare demon named Freddy Krueger?",
        "What is the name of the chainsaw weilding cannibal from Texas?",
        "Who directed Night Of The Living Dead?"
    ]

const start = document.querySelector("#start")

const markWrong = document.getElementById("score-wrong")
const markCorrect = document.getElementById("score-correct")

const keeperLabel = document.getElementById("keeper-label")
const gif = document.getElementById("keeper")

let question = document.querySelector("#questions")
let ansButtons = document.querySelector("#answer-buttons")
let ansOne = document.querySelector("#ans1")
let ansTwo = document.querySelector("#ans2")
let ansThree = document.querySelector("#ans3")


let answers = [
    ["Gunnar Hansen", "Robert Englund", "Jason VoorHees"],
    ["Leatherface", "Jigsaw", "Pinhead"],
    ["John Carpenter", "George Romero", "Wes Craven"]
]




question.innerText = questions[0]

const questFunction = () => {
    
        if(questions[0] === question.innerText) {
            ansOne.innerText = answers[0][0]
            ansTwo.innerText = answers[0][1]
            ansThree.innerText = answers[0][2]
        } if(questions[1] === question.innerText){
            ansOne.innerText = answers[1][0]
            ansTwo.innerText = answers[1][1]
            ansThree.innerText = answers[1][2]
        } if(questions[2] === question.innerText){
            ansOne.innerText = answers[2][0]
            ansTwo.innerText = answers[2][1]
            ansThree.innerText = answers[2][2]     
    }
}

questFunction()



ansOne.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        markWrong.innerText += " / "
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        markCorrect.innerText += " * "
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        markWrong.innerText += " / "    
    }
    questFunction()
})

ansTwo.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        markCorrect.innerText += " * "
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        markWrong.innerText += " / "
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        markCorrect.innerText += " * "
    }
    questFunction()
})

ansThree.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        markWrong.innerText += " / "
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        markWrong.innerText += " / "
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        markWrong.innerText += " / "
    }
    questFunction()
})

start.addEventListener("click", () => {
    start.className = ("hidden")
    keeperLabel.className = ("visible")
    gif.className = ("visible")
    question.className = ("visible")
    ansButtons.className = ("visible")
    questFunction()
})

/* 

const restart = confirm
    ("You win! Would you like to play another round?")
        if (restart === true) {
            glutton()
    } 


const gameOver = confirm
    ("You have been slayed! Play again?")
        if (restart === true) {
            glutton()
    } 

*/