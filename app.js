let questions =
    {
        question1: "Who portrayed the nightmare demon named Freddy Krueger?",
        question2: "What is the name of the chainsaw weilding cannibal from Texas?",
        question3: "Who directed Night Of The Living Dead?"
    }

let quest1 = questions.question1
let quest2 = questions.question2
let quest3 = questions.question3

const markWrong = document.getElementById("score-wrong")
const markCorrect = document.getElementById("score-correct")

let question = document.querySelector("#questions")

let ansOne = document.querySelector("#ans1")
let ansTwo = document.querySelector("#ans2")
let ansThree = document.querySelector("#ans3")


question.innerText = quest1

const questFunction = () => {
    question.innerText = quest1
        if (markCorrect.innerText === "*") {
            question.innerText = quest2
    }
        if (markWrong.innerText === "/"){
            question.innerText = quest2
    }
}

questFunction()





ansOne.addEventListener("click", () => {
    if(question = questions.question1){
        ansOne = markWrong.innerText = "/"
    } else if (question = questions.question2) {
        ansOne = markCorrect.innerText = "* *"
    } else if (question = questions.question3){
        ansOne = markWrong.innerText = "/ / /"
    }
})

ansTwo.addEventListener("click", () => {
    if(question = questions.question1){
        ansOne = markCorrect.innerText = "*"
    } else if (question = questions.question2) {
        ansOne = markWrong.innerText = "/ /"
    } else if (question = questions.question3){
        ansOne = markCorrect.innerText = "* * *"
    }
})

ansThree.addEventListener("click", () => {
    if(question = questions.question1){
        ansOne = markWrong.innerText = "/"
    } else if (question = questions.question2) {
        ansOne = markWrong.innerText = "/ /"
    } else if (question = questions.question3){
        ansOne = markWrong.innerText = "/ / /"
    }
})