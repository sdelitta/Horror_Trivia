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
    [answer1, answer2, answer3],
    [answer4, answer5, answer6],
    [answer7, answer8, answer9]
]


question.innerText = questions[0]
const questFunction = () => {
    for (let i=0; i<questions.length; i++){
        // if(questions[0]) {
        //     question.innerText = questions[0]
        //     ansOne.innerText = "Gunnar Hansen"
        //     ansTwo.innerText = "Robert Englund"
        //     ansThree.innerText = "Jason Voorhees"

        // }
        // if(markCorrect.innerText === "*") {
        //     question.innerText = questions[1]
        // }
        question = questions[i]
        for (let n = 0; n<answers.length; n++){
            ansOne = answers[i][n]
        }
    }
}

////////////////////////////////////////////////////////
// question.innerText = questions[0]
// ansOne.innerText = "Gunnar Hansen"
// ansTwo.innerText = "Robert Englund"
// ansThree.innerText = "Jason Voorhees"
    
// const questFunction = () => {
//         if (markCorrect.innerText === "*") {
//             question.innerText = questions[1]
//             ansOne.innerText = "Leatherface"
//             ansTwo.innerText = "Jigsaw"
//             ansThree.innerText = "Pinhead"
//             // questFunction()
//     } else 
//         if (markWrong.innerText === "/"){
//             ansOne.innerText = "Leatherface"
//             ansTwo.innerText = "Jigsaw"
//             ansThree.innerText = "Pinhead"
//             question.innerText = questions[1]
//             // questFunction()
//     }
//         if (markCorrect.innerText === "**") {
//             question.innerText = questions[2]
//             ansOne.innerText = "John Carpenter"
//             ansTwo.innerText = "George Romero"
//             ansThree.innerText = "Wes Craven"
//             // questFunction()
//     }
//         if (markWrong.innerText === "//"){
//             ansOne.innerText = "John Carpenter"
//             ansTwo.innerText = "George Romero"
//             ansThree.innerText = "Wes Craven"
//             question.innerText = questions[2]
//             // questFunction()
//     }
// }


questFunction()



ansOne.addEventListener("click", () => {
    if(question === questions[0]){
        markWrong.innerText = "/"
    } else if (question === questions[1]) {
        markCorrect.innerText = "* *"
    } else if (question === questions[2]){
        markWrong.innerText = "/ / /"
    }
    questFunction()
})

ansTwo.addEventListener("click", () => {
    if(question = questions[0]){
        markCorrect.innerText = "*"
    } else if (question = questions[1]) {
        markWrong.innerText = "/ /"
    } else if (question = questions[2]){
        markCorrect.innerText = "* * *"
    }
    questFunction()
})

ansThree.addEventListener("click", () => {
    if(question = questions[0]){
        markWrong.innerText = "/"
    } else if (question = questions[1]) {
        markWrong.innerText = "/ /"
    } else if (question = questions[2]){
        markWrong.innerText = "/ / /"
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