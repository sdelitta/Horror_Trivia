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

const evilLaugh = new Audio("http://www.littlekitchen.com/sounds/iwon.wav");
const chainsaw = new Audio("http://soundfxcenter.com/video-games/doom/8d82b5_Doom_Chainsaw_Sound_Effect.mp3")
const startSound = new Audio("http://soundbible.com/grab.php?id=1814&type=wav")
const freddy = new Audio("https://drive.google.com/uc?export=download&id=13OZkWG1LfbZ47SlqKYRl5TST6EKFtjy3")
const zombie = new Audio("https://www.videvo.net/sound-effect/zombie-low-distressed-moan/452210/")

let answers = [
    ["Gunnar Hansen", "Robert Englund", "Jason VoorHees"],
    ["Leatherface", "Jigsaw", "Pinhead"],
    ["John Carpenter", "George Romero", "Wes Craven"]
]




let gameStart = question.innerText = questions[0]

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
        evilLaugh.play()
        const restart = confirm
    ("Surely you're kidding! Play again?")
        if (restart === true) {
            question.innerText = questions[0]
        } 
    } else if (question.innerText === questions[1]) {
        chainsaw.play()
        question.innerText = questions[2]
    } else if (question.innerText === questions[2]){
        evilLaugh.play()
        const restart = confirm
    ("Finally a wrong answer! I'll enjoy feasting on your innards. Play again?")
        if (restart === true) {
            question.innerText = questions[0]
        }   
    }
    questFunction()
})

ansTwo.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        freddy.play()
        question.innerText = questions[1]
    } else if (question.innerText === questions[1]) {
        chainsaw.play()
        const restart = confirm
    ("You are incorrect and therefor banished to spend the rest of eternity in complete darkness while enduring unimaginable pain and suffering! You disgust me. Play again?")
        if (restart === true) {
            question.innerText = questions[0]
    } 
    } else if (question.innerText === questions[2]){
               zombie.play()
        
        
            //YOU WIN function


    }
    questFunction()
})

ansThree.addEventListener("click", () => {
    if(question.innerText === questions[0]){
        evilLaugh.play()
        const restart = confirm
    ("Have you had your coffee? Surely you'll want to try again")
        if (restart === true) {
            question.innerText = questions[0]
    } 
    } else if (question.innerText === questions[1]) {
        chainsaw.play()
        const restart = confirm
        ("Finally a wrong answer! I'll enjoy feasting on your innards. Play again?")
            if (restart === true) {
            question.innerText = questions[0]
        } 
    } else if (question.innerText === questions[2]){
        evilLaugh.play()
        const restart = confirm
    ("Finally a wrong answer! I'll enjoy feasting on your innards. Play again?")
        if (restart === true) {
            question.innerText = questions[0]
        } 
    }
    questFunction()
})

start.addEventListener("click", () => {
    startSound.play()
    start.className = ("hidden")
    keeperLabel.className = ("visible")
    gif.className = ("visible")
    question.className = ("visible")
    ansButtons.className = ("visible")
    questFunction()
})


