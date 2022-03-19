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
    "Which of these is not one of the cities Howl's portal opens to?",
    "What is Haku?",
    "What year was Princess Mononoke released?",
    "What war is Grave of the Fireflies centered around?",
    "Which character is in Studio Ghibli's logo?",
    "What is the name of the cat in Kiki's Delivery Service?",
    "What is Chihiro's name in the spirit world?",
    "Who is Marnie to Anna in When Marnie Was There?",
    "What illness does Naoko have in The Wind Rises?",
    "Which is not one of Howl's aliases in Howl's Moving Castle?"
]

const optionEn=[
    "Ingary",
    "A ghost",
    "1997",//
    "World War II",//
    "Kiki",
    "Jojo",
    "Chi",
    "Her mother",
    "Scarlet Fever",
    "Sorcerer Jenkins"

]

const optionTo=[
    "Osaka",//
    "A river spirit",//
    "1990",
    "World War I",
    "No Face",
    "Cat",
    "Sin",
    "Her grandmother",//
    "Cancer",
    "Wizard Pendragon"
]

const optionTre=[
    "Kingsbury",
    "A bathhouse spirit",
    "1995",
    "The Russo-Japanese War",
    "Calcifer",
    "Jiji", //
    "Hiro",
    "Her sister",
    "Tuberculosis",//
    "Wizard Suliman"//
]

const optionFire=[
    "Porthaven",
    "Yubaba's son",
    "1989",
    "The Imjin War",
    "Totoro",//
    "Milo",
    "Sen",
    "They are not related",
    "Sepsis",
    "Wizard Howl"
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
choiceOne();


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

let s=0;
en.addEventListener('click',()=>{
    //choiceOne();
    if(choiceOne===true){
        alert("Correct!");
    }else{
        alert("Sorry,try agan!")
}});


//loops through results for 
function choiceOne(){
    next.addEventListener('click',() =>{
        let one = optionEnResults[s]
        s = (s+1)% optionEnResults.length;
        console.log(one);
        // if(one===true){
        //     alert("Correct!")
        // }else{
        //     alert("Sorry,try agan!")
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