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


const sporsmaler =[
    "Who was the Avatar before Aang?",
    "What is the Beifong family crest?",
    "What is Momo?",
    "Which group of people does the solar eclipse effect?",
    "Which of these characters is not part of the Order of the White Lotus?",
    "Where are Katara and Sokka from?",
    "Who guards the Wan Shi Tong's library?",
    "Who was the final Agnai Kai between?", 
    "How tall was Avatar Kyoshi?",
    "What is the name of Uncle Iroh's tea shop?"
]


const optionEn=[
    "Sozin",
    "A Flying Boar",
    "A flying lemur",
    "Waterbenders",
    "Iroh",
    "The Northern Water Tribe",
    "Cats",
    "Zuko and Azula",
    "6ft 11 inches",
    "The Jasmine Leaf"
]

const optionTo=[
    "Roku",
    "A Flying Bison",
    "A flying meerkat",
    "Earthbenders",
    "Bumi",
    "The Eastern Water Tribe",
    "Wolves",
    "Katara and Azula",
    "6ft",
    "The Jasmine Dragon"
]

const optionTre=[
    "Kyoshi",
    "A Pig",
    "A flying squirrel",
    "Firebenders",
    "Jeong Jeong",
    "The Southern Water Tribe",
    "Shiba Inus",
    "Ozai and Aang",
    "8ft",
    "The Green Dragon"
]

const optionFire=[
    "Kuruk",
    "A Lion Turtle",
    "A flying monkey",
    "Airbenders",
    "Long Feng",
    "The Western Water Tribe",
    "Foxes",
    "Zuko and Ozai",
    "7ft",
    "The Two Dragons"
]

//result arrays 
const optionEnResults=[ false, true, true, false, false, false, false, true, false, false]
const optionToResults=[ true, false, false, false, false, false, false, false, false, true]
const optionTreResults=[ false, false, false, true, false, true, false, true, false, false]
const optionFireResults=[ false, false, false ,false, true, false, true, false, true, false]
    

//increases the score with each correct answer
function rightAnswer(){
    count+=5;
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