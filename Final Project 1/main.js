//Global variables
var questionEl = document.getElementById("question");
var contain = document.getElementById("quiz");
var currentQuestion = 0;
var correct = 0;
var score = Math.floor(Math.random() * 100 + 500);
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var messages = ["Tricky Quiz","Excellent Work","Try Hard Next Time"];
var video = ["images/congratulate.gif","images/genius.gif","images/good-luck.gif"];
var nextButton = document.getElementById("next-button");


//Add EventListener



//Display questions from question.js
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + "." + q.question + " " + q.audio;
    document.getElementById('images').innerHTML = q.image;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

//Display the next question when the user click on the button "Next-button"
function loadNextQuestion() {
    var selectOption = document.querySelector('input[type=radio] : checked');
    var answerFromPlayer = selectOption.value;
    
    if (!selectOption) {
        alert('Please select your answer or You will not get mark for this question');
        return ;
    }
    if (questions[currentQuestion].answer == answerFromPlayer) {
        correct++;
    }
    selectOption.checked = false;
    currentQuestion++;
    
    if (currentQuestion == questions.length - 1) {
        nextButton.textContent = "You finished the quiz. Let see how many correct questions you got";
        nextButton.style.width = "400px";
    }
    if (currentQuestion == questions.length) {
        contain.style.display = "none";
        document.getAnimations("result").style.display = " ";
        document.getAnimations("result").style.display = "You got " + correct + " answers.";
        document.getElementById("score").textContent = score;
        return;
    }
    if (correct <= 5) {
        document.getElementById("message").textContent = messages[1];
        document.getElementById("gif-source").textContent = video[3];
    }
    if (correct <= 7) {
        document.getElementById("message").textContent = messages[3];
        document.getElementById("gif-source").textContent = video[1];
    }
    if (correct == 10 ) {
        document.getElementById("message").textContent = messages[2];
        document.getElementById("gif-source").textContent = video[2];
    }
    loadQuestion(currentQuestion);

};

loadQuestion(currentQuestion);



