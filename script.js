const quizData = [
    { 
        question: "What is Be?", 
        options: ["Hydrogen", "Berlliuim", "Potassium", "Boron"], 
        correct: 1 
    },
    { 
        question: "What is K?", 
        options: ["Calcuim", "Potassium", "Carbon", "Magnesium"], 
        correct: 1 
    },
    { 
        question: "What is He?", 
        options: ["Hydrogen", "Helium", "Magnesium", "Sodium"], 
        correct: 1 
    },
    { 
        question: "What is Li?", 
        options: ["Lead", "Lithium", "Nitrogen", "Neon"], 
        correct: 1 
    }
];

{ 
        question: "What is Na?", 
        options: ["Potassium", "Lithium", "Nitrogen", "Sodium"], 
        correct: 1 
    }
];

{ 
        question: "What is Cu?", 
        options: ["Copper", "Magneisum", "Lead", "Neon"], 
        correct: 1 
    }
];
 { 
        question: "What is Mg?", 
        options: ["Magenisum", "Sodium", "Zinc", "Potassium"], 
        correct: 1 
    }
let currentIndex = 0;
let score = 0;
let userName = "";
let selectedAnswer = null;

function startQuiz() {
    userName = document.getElementById("username").value.trim();
    
    if (userName === "") {
        alert("Please enter your name first!");
        return;
    }

    document.getElementById("welcome-screen").classList.remove("active");
    document.getElementById("quiz-screen").classList.add("active");
    
    loadQuestion();
}

function loadQuestion() {
    selectedAnswer = null;
    clearSelections();

    const currentData = quizData[currentIndex];
    
    document.getElementById("question-text").innerText = currentData.question;
    document.getElementById("opt0").innerText = currentData.options[0];
    document.getElementById("opt1").innerText = currentData.options[1];
    document.getElementById("opt2").innerText = currentData.options[2];
    document.getElementById("opt3").innerText = currentData.options[3];

    document.getElementById("progress-text").innerText = `Question ${currentIndex + 1} of ${quizData.length}`;
    document.getElementById("score-text").innerText = score;
}

function selectOption(optionIndex) {
    clearSelections();
    selectedAnswer = optionIndex;
    document.getElementById(`opt${optionIndex}`).classList.add("selected");
}

function clearSelections() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt${i}`).classList.remove("selected");
    }
}

function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Please select an answer first!");
        return;
    }

    if (selectedAnswer === quizData[currentIndex].correct) {
        score++;
    }

    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        // Instead of a popup window, reveal your custom RESULTS screen layout
        document.getElementById("quiz-screen").classList.remove("active");
        document.getElementById("results-screen").classList.add("active");
        document.getElementById("final-score-text").innerText = `Awesome job ${userName}! You scored ${score} out of ${quizData.length}.`;
    }
}

function resetQuiz() {
    currentIndex = 0;
    score = 0;
    document.getElementById("username").value = "";
    document.getElementById("results-screen").classList.remove("active");
    document.getElementById("welcome-screen").classList.add("active");
}
