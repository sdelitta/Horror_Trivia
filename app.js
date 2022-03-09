let questions =
    [
        "Who portrayed the nightmare demon named Freddy Krueger?",
        "What is the name of the chainsaw weilding cannibal from Texas?",
        "Who directed Night Of The Living Dead?"
    ]

const markWrong = document.getElementById("score-wrong")
const markCorrect = document.getElementById("score-correct")

let question = document.querySelector("#questions")

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
            ansOne.innerText = "Gunnar Hansen"
            ansTwo.innerText = "Robert Englund"
            ansThree.innerText = "Jason Voorhees"
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
        markWrong.innerText += "/"
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        markCorrect.innerText += "*"
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        markWrong.innerText += "/"    
    }
    questFunction()
})

ansTwo.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        markCorrect.innerText += "*"
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        markWrong.innerText += "/"
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        markCorrect.innerText += "*"
    }
    questFunction()
})

ansThree.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        markWrong.innerText += "/"
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        markWrong.innerText += "/"
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        markWrong.innerText += "/"
    }
    questFunction()
})







// const question1 = () => {
//     question.innerText = questions[0]
//     ansOne.innerText = "Gunnar Hansen"
//     ansTwo.innerText = "Robert Englund"
//     ansThree.innerText = "Jason Voorhees"
// }

// question1()



// ansOne.addEventListener("click", () => {
//     if(question = question[0]){
        
//     }
// })
// ansTwo.addEventListener("click", () => {

// })
// ansThree.addEventListener("click", () => {

// })