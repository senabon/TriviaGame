let question = document.querySelector("#question");
let en = document.querySelector("#option1");
let to = document.querySelector("#option2");
let tre = document.querySelector("#option3");
let fire = document.querySelector("#option4");

let firstClicked = document.querySelector(".en"); 
let secondClicked = document.querySelector(".to");
let thirdClicked = document.querySelector(".tre");
let fourthClicked = document.querySelector(".fire");

let next = document.querySelector("#nextQuestButton");

let currentScore = document.querySelector("#score");

let count = 0;



const sporsmaler=[
    "What does Brewster sell?",
    "Which of these cannot be grown on your island?",
    "Where does Blathers work?",
    "How many animal villagers are there?",
    "What is Animal Crossing called in Japanese?",
    "How many Animal Crossing games have been produced?",
    "What is Tom Nook?",
    "In the first Animal Crossing, where do you start off?",
    "Who greets you in the first game?",
    "Which of these characters is not a Cranky villager?"
]

//button one array
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

//button two array
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

//button three array
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

//button four array
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

//result arrays 
const optionEnResults=[ true, false, false, true, false, true, false, false, true, false]
const optionToResults=[ false, false, true, false, false, false, false, false, false, false]
const optionTreResults=[ false, true, false, false, false, false, false, true, false, false]
const optionFireResults=[ false, false, false ,false, true, false, true, false, false, true]
    

//increases the score with each correct answer
function rightAnswer(){
    count+=2;
    currentScore.innerHTML=`Score:${count}`;

};

let index = 0;

nextQuestion();
buttonEn();
buttonTo();
buttonTre();
buttonFire();
choiceOne();
choiceTwo();
choiceThree();
choiceFour();

//loops throught the questions with each 'next' button click
function nextQuestion(){
    next.addEventListener('click',() =>{
        let sporsmal = sporsmaler[index];
        index = (index+1)% sporsmaler.length;
        console.log(sporsmal);
        question.innerText = sporsmaler[index];

        })
    };

//loops through the array of answers for the first button wth each 'next' button click
let i =0;
function buttonEn(){
    next.addEventListener('click',() =>{
        let sporsmalEn = optionEn[i]
        i = (i+1)% optionEn.length;
        console.log(sporsmalEn);
        firstClicked.innerText = optionEn[i];
    })
 }

 //gets text from button, makes it a variable, takes that variable and creates another variable  checks to see if it is true and creates an alert
let s=0;
en.addEventListener('click',(event)=>{
    let text = event.target.innerText;
    console.log(text);
    let index = optionEn.indexOf(text);
    console.log(index);
    let isCorrect = optionEnResults[index]
    console.log(isCorrect)
    if(isCorrect===true){
        alert("Correct!");
        rightAnswer();
    }else{
        alert("Sorry,try again!")
}});





//loops through results for first button 
function choiceOne(){
    next.addEventListener('click',() =>{
        let one = optionEnResults[s]
        s = (s+1)% optionEnResults.length;
        console.log(one);
    })
 }

//loops through the array of answers for the second button wth each 'next' button click
let j =0;
function buttonTo(){
    next.addEventListener('click',() =>{
        let sporsmalTo = optionTo[j]
        j = (j+1)% optionTo.length;
        console.log(sporsmalTo);
        secondClicked.innerText = optionTo[j];
    })
}

to.addEventListener('click',(event)=>{
    let text = event.target.innerText;
    console.log(text);
    let index = optionTo.indexOf(text);
    console.log(index);
    let isCorrect = optionToResults[index]
    console.log(isCorrect)
    if(isCorrect===true){
        alert("Correct!");
        rightAnswer();
    }else{
        alert("Sorry,try again!")
}});

let e = 0
function choiceTwo(){
    next.addEventListener('click',() =>{
        let two = optionToResults[e]
        e = (e+1)% optionToResults.length;
        console.log(two);

    })
}

//loops through the array of answers for the third button wth each 'next' button click
let k =0;
function buttonTre(){
    next.addEventListener('click',() =>{
        let sporsmalTre = optionTre[k]
        k = (k+1)% optionTre.length;
        console.log(sporsmalTre);
        thirdClicked.innerText = optionTre[k];
    })
}

tre.addEventListener('click',(event)=>{
    let text = event.target.innerText;
    console.log(text);
    let index = optionTre.indexOf(text);
    console.log(index);
    let isCorrect = optionTreResults[index]
    console.log(isCorrect)
    if(isCorrect===true){
        alert("Correct!");
        rightAnswer();
    }else{
        alert("Sorry,try again!")
}});

let n = 0
function choiceThree(){
    next.addEventListener('click',() =>{
        let three = optionTreResults[n]
        n = (n+1)% optionTreResults.length;
        console.log(three);

    })
}

//loops through the array of answers for the fourth button wth each 'next' button click
let m = 0;
function buttonFire(){
    next.addEventListener('click',() =>{
        let sporsmalFire = optionFire[m]
        m = (m+1)% optionFire.length;
        console.log(sporsmalFire);
        fourthClicked.innerText = optionFire[m];
    })
};

fire.addEventListener('click',(event)=>{
    let text = event.target.innerText;
    console.log(text);
    let index = optionFire.indexOf(text);
    console.log(index);
    let isCorrect = optionFireResults[index]
    console.log(isCorrect)
    if(isCorrect===true){
        alert("Correct!");
        rightAnswer();
    }else{
        alert("Sorry,try again!")
}});

let a = 0
function choiceFour(){
    next.addEventListener('click',() =>{
        let four = optionFireResults[a]
        a = (a+1)% optionFireResults.length;
        console.log(four);

    })
}