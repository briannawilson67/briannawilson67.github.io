const questions = [

    {
        question: "What is Be?",
        choices: [
            "Hydrogen",
            "Beryllium",
            "Potassium",
            "Boron"
        ],
        correct: 1
    },

    {
        question: "What is K?",
        choices: [
            "Calcium",
            "Potassium",
            "Carbon",
            "Magnesium"
        ],
        correct: 1
    },

    {
        question: "What is He?",
        choices: [
            "Hydrogen",
            "Helium",
            "Magnesium",
            "Sodium"
        ],
        correct: 1
    },

    {
        question: "What is Li?",
        choices: [
            "Lead",
            "Lithium",
            "Nitrogen",
            "Neon"
        ],
        correct: 1
    },

    {
        question: "What is Na?",
        choices: [
            "Sodium",
            "Nitrogen",
            "Neon",
            "Nickel"
        ],
        correct: 0
    },

    {
        question: "What is C?",
        choices: [
            "Calcium",
            "Carbon",
            "Chlorine",
            "Copper"
        ],
        correct: 1
    },

    {
        question: "What is O?",
        choices: [
            "Osmium",
            "Oxygen",
            "Gold",
            "Fluorine"
        ],
        correct: 1
    },

    {
        question: "What is Au?",
        choices: [
            "Silver",
            "Gold",
            "Argon",
            "Aluminium"
        ],
        correct: 1
    }

];


let currentQuestion = 0;
let score = 0;
let studentName = "";
let answered = false;


// START QUIZ
function startQuiz() {

    studentName = document.getElementById("nameInput").value;

    if (studentName.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    currentQuestion = 0;
    score = 0;

    document.getElementById("startPage").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");

    showQuestion();
}


// SHOW QUESTION
function showQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    document.getElementById("question").textContent =
        current.question;

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("score").textContent =
        `Score: ${score}`;


    // Put the four choices onto the page
    for (let i = 0; i < 4; i++) {

        const button = document.getElementById(`answer${i}`);

        button.textContent = current.choices[i];

        button.classList.remove("correct");
        button.classList.remove("wrong");

        button.disabled = false;
    }


    // Disable NEXT until they answer
    document.getElementById("nextButton").disabled = true;
}


// CHECK ANSWER
function checkAnswer(selectedAnswer) {

    // Don't allow another answer
    if (answered) {
        return;
    }

    answered = true;

    const current = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answer");


    if (selectedAnswer === current.correct) {

        buttons[selectedAnswer].classList.add("correct");

        score++;

        document.getElementById("score").textContent =
            `Score: ${score}`;

    } else {

        buttons[selectedAnswer].classList.add("wrong");

        // Show the correct answer
        buttons[current.correct].classList.add("correct");
    }


    // Disable all answer buttons
    buttons.forEach(button => {
        button.disabled = true;
    });


    // Enable NEXT
    document.getElementById("nextButton").disabled = false;
}


// NEXT QUESTION
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
}


// SHOW RESULTS
function showResults() {

    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("resultsPage").classList.remove("hidden");

    document.getElementById("studentResult").textContent =
        `Well done, ${studentName}!`;

    document.getElementById("finalScore").textContent =
        `You scored ${score} out of ${questions.length}.`;
}


// RESTART
function restartQuiz() {

    document.getElementById("resultsPage").classList.add("hidden");
    document.getElementById("startPage").classList.remove("hidden");

    document.getElementById("nameInput").value = "";
}
