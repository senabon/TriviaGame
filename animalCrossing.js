let question = document.querySelector("#question");
let en = document.querySelector("#option1");
let to = document.querySelector("#option2");
let tre = document.querySelector("#option3");
let fire = document.querySelector("#option4");
let anyClicked = document.querySelector(".answers"); ///need for all buttons 
let next = document.querySelector("#nextQuestButton")
let answersAll = document.querySelector("#optionsAll")

let countdown = document.querySelector("#timer");
let currentScore = document.querySelector("#score");

let count = 0;
let currentQuestion = 0;



const sporsmaler=[
    {question:"What does Brewster sell?"},
    {question:"Which of these cannot be grown on your island?"},
    {question:"Where does Blathers work?"},
    {question:"How many animal villagers are there?"},
    {question:"What is Animal Crossing called in Japanese?"},
    {question:"How many Animal Crossing games have been made?"},
    {question:"what is Tom Nook?"},
    {question:"In the first Animal Crossing, where do you start off?"},
    {question:"Who greets you in the first game?"},
    {question:"Which of these characters is not a Cranky villager?"}
]


const optionEn=[
    {answer: "Coffee", result: true},
    {answer:"Apples", result: false},
    {answer:"Nook's Cranny", result: false},
    {answer:"397", result: true},
    {answer:"Dobotsu na Mori", result: false},
    {answer:"5", result: true},
    {answer:"A thief", result: false},
    {answer:"A bus", result: false},
    {answer:"Rover", result: true},
    {answer:"Admiral", result: false}
]

const optionTo=[
    {answer:"Tea",result: false},
    {answer:"Bells",result: false},
    {answer:"The Museum",result: true},
    {answer:"256",result:false},
    {answer:"Dobutsu Mori No",result: false},
    {answer:"4",result:false},
    {answer:"Dog",result:false},
    {answer:"In the village",result:false},
    {answer:"Kapp'n",result:false},
    {answer:"Curt",result:false}
]

const optionTre=[
    {answer:"Espresso Shots",result: false},
    {answer:"Turnips", result: true},
    {answer:"At the dock",result: false},
    {answer:"150",result: false},
    {answer:"Mori no Dobutsu",result: false},
    {answer:"6",result: false},
    {answer:"Bear",result: false},
    {answer:"On a train", result: true},
    {answer:"Isabelle",result: false},
    {answer:"Gaston",result: false},
]

const optionFire=[
    {answer:"Smoothies",result: false},
    {answer:"Pears",result: false},
    {answer:"None of these",result: false},
    {answer:"99",result: false},
    {answer:"Dobutsu no Mori", result: true},
    {answer:"3",result: false},
    {answer:"Tanuki", result: true},
    {answer:"In a taxi",result: false},
    {answer:"Tom Nook",result: false},
    {answer:"Bob", result: true}
]

    
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

function nextQuestion(){
    next.addEventListener('click',() =>{
        let sporsmal = sporsmaler[index];
        index = (index+1)% sporsmaler.length;
        console.log(sporsmal);
        question.innerHMTL = sporsmal;
    })
    };

function buttonEn(){


}

function buttonTo(){

}

function buttonTre(){

}

function buttonFire(){

};