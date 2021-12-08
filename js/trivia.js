//set variables to get House Crest
let gryffindorHouse = document.getElementById("gryffindor");
let slytherinHouse = document.getElementById('slytherin');
let hufflepuffHouse = document.getElementById('hufflepuff');
let ravenclawHouse = document.getElementById('ravenclaw');

//Set variables for House colors
let gryffindorPrimary = '#7F0909';
let gryffindorSecondary = '#FFC500';

let slytherinPrimary = '#0D6217';
let slytherinSecondary = '#AAA';

let hufflepuffPrimary = '#EEE117';
let hufflepuffSecondary = '#000';

let ravenclawPrimary = '#000A90';
let ravenclawSecondary = '#946B2D';

//set counter for which question user is on
let questionCount = 0;
let score = 0;

//Create a array to hold the trivia questions
const triviaQuestions = [{
    question: 'At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell "Serpensortia"?',
    answerA: 'Frog',
    answerB: 'Snake',
    answerC: 'Dragon',
    answerD: 'Bear',
    correctAnswer: 'B',
    answered: false
  },
  {
    question: 'Gilderoy Lockhart tried to use "Brackium Emendo" to fix Harry’s broken bones. What did it actually do to him?',
    answerA: 'Turned his leg wooden',
    answerB: 'Removed his bones entirely',
    answerC: 'Forced him to speak Parseltongue',
    answerD: 'Gave him an exquisite singing voice',
    correctAnswer: 'B',
    answered: false
  },
  {
    question: '"Wit beyond measure is man\’s greatest treasure" is the motto of which house?',
    answerA: 'Gryffindor',
    answerB: 'Hufflepuff',
    answerC: 'Ravenclaw',
    answerD: 'Slytherin',
    correctAnswer: 'C',
    answered: false
  },
  {
    question: 'What was the name of the Black family’s house elf?',
    answerA: 'Dobby',
    answerB: 'Winky',
    answerC: 'Kreacher',
    answerD: 'Hoky',
    correctAnswer: 'C',
    answered: false
  },
  {
    question: 'What is a thestral?',
    answerA: 'A half-giant',
    answerB: 'An invisible winged horse',
    answerC: 'A shrunken head',
    answerD: 'A pixie',
    correctAnswer: 'B',
    answered: false
  },
  {
    question: 'When unearthed, a mandrake will do what?',
    answerA: 'Dance',
    answerB: 'Burp',
    answerC: 'Scream',
    answerD: 'Laugh',
    correctAnswer: 'C',
    answered: false
  },
  {
    question: 'What position does Harry play on his Quidditch team?',
    answerA: 'Chaser',
    answerB: 'Keeper',
    answerC: 'Bludger',
    answerD: 'Seeker',
    correctAnswer: 'D',
    answered: false,
  },
  {
    question: 'Who poses as Mad-Eye Moody, Harry\’s 4th year Defense Against the Dark Arts professor?',
    answerA: 'Voldemort',
    answerB: 'Peter Pettigrew',
    answerC: 'Barty Crouch Jr',
    answerD: 'Sirius Black',
    correctAnswer: 'C',
    answered: false
  },
  {
    question: 'Albus Dumbledore destroyed which Horcrux?',
    answerA: 'Slytherin’s locket',
    answerB: 'Nagini',
    answerC: 'Hufflepuff\'s cup',
    answerD: 'Marvolo Gaunt\’s ring',
    correctAnswer: 'D',
    answered: false
  },
  {
    question: 'Finish the inscription on Dobby’s tombstone: "Here lies Dobby…"',
    answerA: 'A true friend',
    answerB: 'The best servant',
    answerC: 'A free Elf',
    answerD: 'Master of socks',
    correctAnswer: 'C',
    answered: false
  },
];

//function to display the question and answers
function loadQuestion(triviaQuestion) {
  //get html elements the will be changed
  let question = document.getElementById('question');
  let firstAnswer = document.getElementById('answerA');
  let secondAnswer = document.getElementById('answerB');
  let thirdAnswer = document.getElementById('answerC');
  let fourthAnswer = document.getElementById('answerD');

  question.innerHTML = triviaQuestion.question;
  firstAnswer.innerHTML = 'A. ' + triviaQuestion.answerA;
  secondAnswer.innerHTML = 'B. ' + triviaQuestion.answerB;
  thirdAnswer.innerHTML = 'C. ' + triviaQuestion.answerC;
  fourthAnswer.innerHTML = 'D. ' + triviaQuestion.answerD;
}


//function to create House Banners
function createBanners(backgroundColor, animal) {
  //get aside elements that represent the banners
  let banner1 = document.getElementById('banner1');
  let banner2 = document.getElementById('banner2');

  //set the background color of the two banners
  banner1.style.backgroundColor = backgroundColor;
  banner2.style.backgroundColor = backgroundColor;

  //Check to set if banner already has images if not create them
  if (document.getElementById('bannerImage') === null) {

    //Create banner image to append to banner elements
    let bannerImage = document.createElement("img");
    let bannerImage2 = document.createElement("img");

    //set id for images
    bannerImage.id = 'bannerImage';
    bannerImage2.id = 'bannerImage2';

    //set banner image src to animal Silhouette
    bannerImage.src = "img/" + animal + "-Silhouette.svg";
    bannerImage2.src = "img/" + animal + "-Silhouette.svg";

    //append banner image to the banners
    banner1.appendChild(bannerImage);
    banner2.appendChild(bannerImage2);
  } else { //change the banner image source
    bannerImage = document.getElementById('bannerImage');
    bannerImage2 = document.getElementById('bannerImage2');

    bannerImage.src = "img/" + animal + "-Silhouette.svg";
    bannerImage2.src = "img/" + animal + "-Silhouette.svg";

  }
}

//function to display score
function changeScore(newScore) {
  document.getElementById('score').innerHTML = 'SCORE: ' + newScore + '/ ' + triviaQuestions.length;
}

//function to check if answer selected is the correct answer
function checkCorrect(answer) {
  //if answer is correct change background to green and display new score
  if (triviaQuestions[questionCount].correctAnswer === answer) {
    document.getElementById('answer' + answer).style.backgroundColor = 'green';
    if(!triviaQuestions[questionCount].answered){
      score++;
      changeScore(score);
    }
    triviaQuestions[questionCount].answered = true;
  } else {
    //if incorrect change background to red and change correct answers background green 
    document.getElementById('answer' + answer).style.backgroundColor = 'red';
    document.getElementById('answer' + triviaQuestions[questionCount].correctAnswer).style.backgroundColor = 'green';
  }
  triviaQuestions[questionCount].answered = true;
}

//function to reset answer buttons background colors
function resetColors(){
  let answers = document.getElementsByClassName('answers');
  for( let i = 0; i < answers.length; i++){
    answers[i].style.backgroundColor = '#ccc';
  }
}

function resetAnswers(){
  for( let i =0; i < triviaQuestions.length; i++){
    triviaQuestions[i].answered = false;
  }
}

//get the buttons for the site
let startGame = document.getElementById("gameStart");
let quitGame = document.getElementById("quitGame");
let nextQuestion = document.getElementById('nextQuestion');
let answerA = document.getElementById('answerA');
let answerB = document.getElementById('answerB');
let answerC = document.getElementById('answerC');
let answerD = document.getElementById('answerD');

//set the onclick events to change banner colors to House colors
gryffindorHouse.addEventListener('click',
  function () {
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = gryffindorSecondary;
    document.getElementById('footer').style.backgroundColor = gryffindorSecondary;
  });

gryffindorHouse.addEventListener('click',
  function () {
    createBanners(gryffindorPrimary, "Lion")
  }
);

slytherinHouse.addEventListener('click',
  function () {
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = slytherinSecondary;
    document.getElementById('footer').style.backgroundColor = slytherinSecondary;
  });

slytherinHouse.addEventListener('click',
  function () {
    createBanners(slytherinPrimary, "Snake")
  }
);

hufflepuffHouse.addEventListener('click',
  function () {
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = hufflepuffSecondary;
    document.getElementById('footer').style.backgroundColor = hufflepuffSecondary;
  });

hufflepuffHouse.addEventListener('click',
  function () {
    createBanners(hufflepuffPrimary, "Badger")
  }
);

ravenclawHouse.addEventListener('click',
  function () {
    //set background color of header and footer
    document.getElementById('header').style.backgroundColor = ravenclawSecondary;
    document.getElementById('footer').style.backgroundColor = ravenclawSecondary;
  });

ravenclawHouse.addEventListener('click',
  function () {
    createBanners(ravenclawPrimary, "Raven")
  }
);

startGame.addEventListener('click',
  function () {
    document.getElementById('welcome').classList.add('hide');
    document.getElementById('triviaGame').classList.remove('hide');
  });

startGame.addEventListener('click',
  function () {
    loadQuestion(triviaQuestions[questionCount]);
  });

quitGame.addEventListener('click',
  function () {
    document.getElementById('welcome').classList.remove('hide');
    document.getElementById('triviaGame').classList.add('hide');
    score = 0;
    questionCount = 0;
    changeScore(score);
    resetAnswers();
    resetColors();
  });

nextQuestion.addEventListener('click',
  function () {
    questionCount++;
    if (questionCount > triviaQuestions.length) {
      questionCount = 0;
    }
    loadQuestion(triviaQuestions[questionCount]);
    resetColors();
  });

answerA.addEventListener('click',
  function () {
    if(!triviaQuestions[questionCount].answered){
      checkCorrect('A');
    }
  }
);

answerB.addEventListener('click',
function () {
  if(!triviaQuestions[questionCount].answered){
    checkCorrect('B');
  }
}
);

answerC.addEventListener('click',
function () {
  if(!triviaQuestions[questionCount].answered){
    checkCorrect('C');
  }
}
);

answerD.addEventListener('click',
function () {
  if(!triviaQuestions[questionCount].answered){
    checkCorrect('D');
  }
}
);