const questions = [
    "What is the symbol for Helium?",
    "What is the symbol for Potassium?",
    "What is the symbol for Copper?",
    "What is the symbol for Oxygen?",
    "What is the symbol for Gold?",
    "What is the symbol for Silver?",
    "What is the symbol for Sodium?",
    "What is the symbol for Carbon?",
    "What is the symbol for Lithium?",
    "What is the symbol for Hydrogen"  
];

let answers = [
    ["H", "He", "Li", "Be"],
    ["P", "K", "Po", "Pt"],
    ["Co", "Cu", "C", "Ca"],
    ["O", "Ox", "Og", "On"],
    ["Gd", "Ag", "Au", "Go"],
    ["Ag", "Si", "Sn", "S"],
    ["Na", "N", "Ne", "Ni"],
    ["C", "Ca", "Cl", "Cr"],
    ["Li", "L", "Lu", "La"],
    ["H", "He", "Hy", "Ho"]
];

let correctAnswers = ["He", "K", "Cu", "O", "Au", "Ag", "Na","C", "Li","H"];

let questionNumber = 0;
let score = 0;
let answered = false;

// This starts the quiz
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();
}

// This shows the question and answers
function showQuestion() {
    answered = false;

    document.getElementById("number").innerHTML =
        "Question " + (questionNumber + 1) + " of " + questions.length;

    document.getElementById("question").innerHTML =
        questions[questionNumber];

    document.getElementById("feedback").innerHTML = "";

    document.getElementById("nextButton").disabled = true;

    let options = document.getElementById("options");
    options.innerHTML = "";

    // This makes the answer buttons
    for (let i = 0; i < 4; i++) {
        let button = document.createElement("button");

        button.innerHTML = answers[questionNumber][i];

        button.onclick = function() {
            checkAnswer(button.innerHTML);
        };

        options.appendChild(button);
    }
}

// This checks if the answer is right
function checkAnswer(answer) {
    if (answered == true) {
        return;
    }

    answered = true;

    if (answer == correctAnswers[questionNumber]) {
        score = score + 1;
        document.getElementById("feedback").innerHTML = "Correct!";
    } else {
        document.getElementById("feedback").innerHTML =
            "Wrong! The answer was " + correctAnswers[questionNumber];
    }

    document.getElementById("nextButton").disabled = false;

    let buttons = document.getElementById("options").children;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// This moves to the next question
function nextQuestion() {
    questionNumber = questionNumber + 1;

    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("score").innerHTML =
            "You got " + score + " out of " + questions.length;
    }
}

// This lets the user play again
function restartQuiz() {
    questionNumber = 0;
    score = 0;

    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();
}



    


