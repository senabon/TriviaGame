let question = document.querySelector("#question");
let en = document.querySelector("#option1");
let to = document.querySelector("#option2");
let tre = document.querySelector("#option3");
let fire = document.querySelector("#option4");

let firstClicked = document.querySelector(".en"); ///need for all buttons 
let secondClicked = document.querySelector(".to");
let thirdClicked = document.querySelector(".tre");
let fourthClicked = document.querySelector(".fire");


let next = document.querySelector("#nextQuestButton");
let answersAll = document.querySelector("#optionsAll");

let countdown = document.querySelector("#timer");
let currentScore = document.querySelector("#score");

let count = 0;
let currentQuestion = 0;



const sporsmaler=[
    "What does Brewster sell?",
    "Which of these cannot be grown on your island?",
    "Where does Blathers work?",
    "How many animal villagers are there?",
    "What is Animal Crossing called in Japanese?",
    "How many Animal Crossing games have been made?",
    "What is Tom Nook?",
    "In the first Animal Crossing, where do you start off?",
    "Who greets you in the first game?",
    "Which of these characters is not a Cranky villager?"
]


const optionEn=[
    "Coffee",
    "Apples",
    "Nook's Cranny",
    "397",
    "Dobotsu na Mori",
    "5",
    "A thief",
    "A bus",
    "Rover", 
    "Admiral", 
]

const optionTo=[
    "Tea",
    "Bells",
    "The Museum",
    "256",
    "Dobutsu Mori No",
    "4",
    "Dog",
    "In the village",
    "Kapp'n",
    "Curt"
]

const optionTre=[
    "Espresso Shots",
    "Turnips",
    "At the dock",
    "150",
    "Mori no Dobutsu",
    "6",
    "Bear",
    "On a train",
    "Isabelle",
    "Gaston"
]

const optionFire=[
    "Smoothies",
    "Pears",
    "None of these",
    "99",
    "Dobutsu no Mori",
    "3",
    "Tanuki",
    "In a taxi",
    "Tom Nook",
    "Bob"
]

const optionEnResults=[ true, false, false, true, false, true, false, false, true, false]
const optionToResults=[ false, false, true, false, false, false, false, false, false, false]
const optionTreResults=[ false, true, false, false, false, false, false, true, false, false]
const optionFireResults=[ false, false, false ,false, true, false, true, false, false, true]
    
// anyClicked.addEventListener("click",() =>{
//         for (let i=0; i <= questions.length-1; i++){
//             console.log(questions[i]);
//             questionBox.innerHTML = questions[i];
//             };
        
       
//    questionCont.appendChild(questionBox);
//     rightAnswer();  
// }) ;
// anyClicked.addEventListener("click",questionClick);

// function questionClick(){
//     for (let i=0; i <= questions.length-1; i++){
//         console.log(questions[i]);
//         questionBox.innerHTML = questions[i];
//     };
// }



function rightAnswer(){
    count+=2;
    currentScore.innerHTML=`Score:${count}`;

};

// function correctAnswer(){
//     if(question===true){
//         color==="green"
//     }else{
//         stay same color
//     }
// }


let index = 0;


nextQuestion();
buttonEn();
buttonTo();
buttonTre();
buttonFire();

function nextQuestion(){
    next.addEventListener('click',() =>{
        let sporsmal = sporsmaler[index];
        index = (index+1)% sporsmaler.length;
        console.log(sporsmal);
        question.innerText = sporsmaler[index];
        })
    };
let i =0;
function buttonEn(){
    next.addEventListener('click',() =>{
        let sporsmalEn = optionEn[i]
        i = (i+1)% optionEn.length;
        console.log(sporsmalEn);
        firstClicked.innerText = optionEn[i];
    })
 }

// if(optionEn.results ===true){
//     anyClicked.style.backgroundColor="blue";
// }else{
//     anyClicked.style.backgroundColor="red";
// }
let j =0;
function buttonTo(){
    next.addEventListener('click',() =>{
        let sporsmalTo = optionTo[j]
        j = (j+1)% optionTo.length;
        console.log(sporsmalTo);
        secondClicked.innerText = optionTo[j];
    })
}

let k =0;
function buttonTre(){
    next.addEventListener('click',() =>{
        let sporsmalTre = optionTre[k]
        k = (k+1)% optionTre.length;
        console.log(sporsmalTre);
        thirdClicked.innerText = optionTre[k];
    })
}

let m = 0;
function buttonFire(){
    next.addEventListener('click',() =>{
        let sporsmalFire = optionFire[m]
        m = (m+1)% optionFire.length;
        console.log(sporsmalFire);
        fourthClicked.innerText = optionFire[m];
    })
};