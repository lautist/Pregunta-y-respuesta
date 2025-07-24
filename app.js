// DOM Elements
const questionH1 = document.querySelector(".pregunta"); 
const optionsContainer = document.querySelector(".opci");
const startButton = document.querySelector(".btn-start"); 
const nextButtonContainer = document.querySelector(".envR"); 
const feedbackDisplay = document.querySelector(".rpt-mostrar");
const finalScoreDisplay = document.querySelector(".puntaje-general");

// Quiz Data
const questions = [
    {
        pregunta: "¿Cuál es el país más grande del mundo en términos de superficie?", 
        opciones: ["Canadá", "China", "Estados Unidos", "Rusia"], 
        respuesta: "Rusia" 
    },
    {
        pregunta: "¿Qué ciudad europea es conocida como la 'ciudad eterna'?", 
        opciones: ["Barcelona", "Roma", "París", "Londres"], 
        respuesta: "Roma" 
    },
    {
        pregunta: "¿Quién pintó el cuadro 'La persistencia de la memoria'?", 
        opciones: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Leonardo da Vinci"], 
        respuesta: "Salvador Dalí" 
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?", 
        opciones: ["Everest", "K2", "Monte Fuji", "Mont Blanc"], 
        respuesta: "Everest" 
    },
    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", 
        opciones: ["1939", "1941", "1945", "1948"], 
        respuesta: "1939" 
    },
    {
        pregunta: "¿Quién escribió la novela 'El gran Gatsby'?", 
        opciones: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"], 
        respuesta: "F. Scott Fitzgerald" 
    },
    {
        pregunta: "¿Qué país africano es el más poblado?", 
        opciones: ["Etiopía", "Nigeria", "Sudáfrica", "Congo"], 
        respuesta: "Nigeria" 
    },
    {
        pregunta: "¿Cuál es el planeta más cercano al sol?", 
        opciones: ["Venus", "Mercurio", "Marte", "Júpiter"], 
        respuesta: "Mercurio" 
    },
    {
        pregunta: "¿Qué país es conocido como la 'Tierra del Sol Naciente'?", 
        opciones: ["Japón", "Corea del Sur", "China", "Vietnam"], 
        respuesta: "Japón" 
    },
    {
        pregunta: "¿En qué continente se encuentra la selva amazónica?", 
        opciones: ["Asia", "América", "África", "Europa"], 
        respuesta: "América", 
    },
    {
        pregunta: '¿Qué país es conocido por la celebración del "Carnaval"? ', 
        opciones: ["Brasil", "México", "Colombia", "Argentina"], 
        respuesta: "Brasil", 
    },
    {
        pregunta: "¿Qué país es conocido por el Taj Mahal?", 
        opciones: ["India", "China", "Japón", "Corea del Sur"], 
        respuesta: "India", 
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?", 
        opciones: ["Nilo", "Amazonas", "Misisipi", "Yangtze"], 
        respuesta: "Amazonas", 
    },
    {
        pregunta: "¿En qué continente se encuentra el Monte Kilimanjaro?", 
        opciones: ["Asia", "América", "África", "Europa"], 
        respuesta: "África", 
    },
    {
        pregunta: `¿Quién pintó la famosa obra "La noche estrellada"?`, 
        opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"], 
        respuesta: "Vincent van Gogh", 
    },
    {
        pregunta: "¿En qué año se llevó a cabo la Revolución Francesa?", 
        opciones: ["1789", "1799", "1809", "1819"], 
        respuesta: "1789", 
    },
    {
        pregunta: `¿Quién escribió la obra "El principito"?`, 
        opciones: ["Friedrich Nietzsche", "Jules Verne", "Antoine de Saint-Exupéry", "Gabriel García Márquez"], 
        respuesta: "Antoine de Saint-Exupéry", 
    },
    {
        pregunta: `¿Quién fue el primer ser humano en llegar al espacio exterior?`,
        opciones: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], 
        respuesta: "Yuri Gagarin", 
    },
    {
        pregunta: "¿Qué país tiene la forma de bota?", 
        opciones: ["España", "Italia", "Francia", "Alemania"], 
        respuesta: "Italia", 
    },
    {
        pregunta: "¿Quién pintó la obra 'La Gioconda'?", 
        opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Salvador Dalí"], 
        respuesta: "Leonardo da Vinci", 
    },
    {
        pregunta: "¿En qué país se encuentra la Torre Eiffel?", 
        opciones: ["Francia", "Italia", "España", "Alemania"], 
        respuesta: "Francia", 
    },
    {
        pregunta: "¿Cuál es la capital de Australia?", 
        opciones: ["Sydney", "Melbourne", "Brisbane", "Canberra"], 
        respuesta: "Canberra", 
    },
    {
        pregunta: "¿En qué continente se encuentra la Gran Muralla China?", 
        opciones: ["Asia", "América", "África", "Europa"], 
        respuesta: "Asia", 
    },
    {
        pregunta: "¿Quién escribió la obra 'Don Quijote de la Mancha'?", 
        opciones: ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche", "George Orwell"], 
        respuesta: "Miguel de Cervantes", 
    },
    {
        pregunta: "¿En qué año se fundó Facebook?", 
        opciones: ["2002", "2004", "2006", "2008"], 
        respuesta: "2004" 
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?", 
        opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"], 
        respuesta: "Pacífico", 
    },
    {
        pregunta: "¿Cuál es el país más poblado del mundo?", 
        opciones: ["China", "India", "Estados Unidos", "Rusia"], 
        respuesta: "China", 
    },
    {
        pregunta: "¿Qué país es el más grande del mundo en términos de superficie?", 
        opciones: ["Rusia", "China", "Estados Unidos", "Canadá"], 
        respuesta: "Rusia", 
    },
    {
        pregunta: "¿Qué ciudad es conocida como la 'Ciudad de los Rascacielos'?", 
        opciones: ["Tokio", "Shanghái", "Dubái", "Nueva York"], 
        respuesta: "Nueva York", 
    },
    {
        pregunta: "¿Cuál es el país más pequeño del mundo?", 
        opciones: ["Mónaco", "Nauru", "Vaticano", "San Marino"], 
        respuesta: "Vaticano", 
    },
    {
        pregunta: "¿Cuál es el nombre de la galaxia en la que se encuentra nuestro sistema solar?", 
        opciones: ["Vía Láctea", "Andrómeda", "Sombrero", "Canis Major"], 
        respuesta: "Vía Láctea", 
    },
    {
        pregunta: "¿En qué país se encuentra la Gran Barrera de Coral?", 
        opciones: ["Australia", "Filipinas", "Indonesia", "Japón"], 
        respuesta: "Australia", 
    },
    {
        pregunta: "¿Quién es el autor de la obra 'Cien años de soledad'?", 
        opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende", "Jorge LuiBorges"], 
        respuesta: "Gabriel García Márquez", 
    },
    {
        pregunta: "¿Qué país es conocido por la construcción de las Pirámides de Giza?",
        opciones: ["Egipto", "México", "China", "India"], 
        respuesta: "Egipto", 
    },
    {
        pregunta: "¿En qué país se encuentra la estatua del Cristo Redentor?", 
        opciones: ["Brasil", "Argentina", "Perú", "Colombia"], 
        respuesta: "Brasil", 
    },
];

let availableQuestions = [...questions]; // A copy of all questions for the current quiz session
let currentQuestion = {}; // The question currently being displayed
let score = 0; 
let questionCount = 0; // Tracks number of questions asked in current session 
const MAX_QUESTIONS = 10; // Total questions per quiz

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Hide elements until the quiz starts
    nextButtonContainer.style.display = "none"; 
    feedbackDisplay.style.display = "none"; 
    optionsContainer.style.display = "none"; // Initially hide options
    finalScoreDisplay.style.display = "none"; // Hide final score
    questionH1.textContent = "Haz clic en 'Comenzar' para iniciar el quiz.";
});

// --- Event Listeners ---
startButton.addEventListener("click", startQuiz); 
document.querySelector(".btn-sg").addEventListener("click", nextQuestion); 

// --- Quiz Logic ---

/**
 * Initializes the quiz when the start button is clicked.
 */
function startQuiz() {
    // Reset quiz state
    score = 0; 
    questionCount = 0; 
    availableQuestions = [...questions]; // Reset available questions for a new quiz
    questionH1.textContent = "Pregunta"; // Reset question display
    finalScoreDisplay.style.display = "none"; // Hide final score from previous game
    feedbackDisplay.style.display = "none"; // Hide feedback
    optionsContainer.style.display = "block"; // Show options container
    startButton.style.display = "none"; // Hide start button 

    loadNewQuestion();
}

/**
 * Loads and displays a new random question.
 */
function loadNewQuestion() {
    // Hide feedback and next button for the new question
    feedbackDisplay.style.display = "none"; 
    nextButtonContainer.style.display = "none"; 

    if (questionCount >= MAX_QUESTIONS || availableQuestions.length === 0) {
        endQuiz();
        return;
    }

    // Select a random question from the available ones
    const randomIndex = Math.floor(Math.random() * availableQuestions.length); 
    currentQuestion = availableQuestions[randomIndex]; 

    // Remove the selected question from availableQuestions to prevent repeats
    availableQuestions.splice(randomIndex, 1);

    questionCount++; // Increment question count for current session

    questionH1.textContent = currentQuestion.pregunta; 

    // Clear previous options
    while (optionsContainer.firstChild) { 
        optionsContainer.removeChild(optionsContainer.firstChild); 
    }

    // Create and append new option buttons
    currentQuestion.opciones.forEach((optionText, index) => { 
        const button = document.createElement("button");
        button.textContent = optionText; 
        button.classList.add(`opcion${index}`); 
        button.addEventListener("click", () => handleAnswerClick(button)); // Attach handler
        optionsContainer.appendChild(button); 
    });

    console.log(currentQuestion); // For debugging: log the current question and its answer 
}

/**
 * Handles the click event on an answer option.
 * @param {HTMLButtonElement} selectedOption - The button element that was clicked.
 */
function handleAnswerClick(selectedOption) {
    disableOptions(); // Disable all options after an answer is selected

    const isCorrect = selectedOption.textContent === currentQuestion.respuesta; 

    if (isCorrect) {
        score++; 
        feedbackDisplay.innerHTML = `Respuesta correcta. Vas por la pregunta <span style="color: #b5b5ff">${questionCount}/${MAX_QUESTIONS}.</span>`; 
        selectedOption.style.background = "#4CAF50"; // Green for correct
    } else {
        feedbackDisplay.innerHTML = `Respuesta incorrecta. La respuesta correcta es <span style="color: #e15569">${currentQuestion.respuesta}</span>. Vas por la pregunta <span style="color: #b5b5ff">${questionCount}/${MAX_QUESTIONS}.</span>`; 
        selectedOption.style.background = "#FF5733"; // Red for incorrect
        highlightCorrectAnswer(); // Show the correct answer
    }

    feedbackDisplay.style.display = "block"; 
    nextButtonContainer.style.display = "block"; // Show the "Siguiente Pregunta" button 
}

/**
 * Disables all option buttons to prevent multiple selections.
 */
function disableOptions() {
    optionsContainer.querySelectorAll("button").forEach(button => { 
        button.disabled = true; 
    });
}

/**
 * Highlights the correct answer in green after an incorrect selection.
 */
function highlightCorrectAnswer() {
    optionsContainer.querySelectorAll("button").forEach(button => {
        if (button.textContent === currentQuestion.respuesta) {
            button.style.background = "#4CAF50"; // Green for the correct answer
        }
    });
}

/**
 * Proceeds to the next question or ends the quiz.
 */
function nextQuestion() {
    if (questionCount < MAX_QUESTIONS) { 
        loadNewQuestion(); 
    } else {
        endQuiz(); 
    }
}

/**
 * Ends the quiz, displays the final score, and shows a "Play Again" button.
 */
function endQuiz() {
    optionsContainer.style.display = "none"; // Hide options 
    feedbackDisplay.style.display = "none"; // Hide feedback message 
    nextButtonContainer.style.display = "none"; // Hide next button 

    questionH1.textContent = `¡Quiz Finalizado!`; 
    finalScoreDisplay.innerHTML = `Tu puntaje final es: <span style="color: #b5b5ff">${score * 10}</span> puntos de ${MAX_QUESTIONS * 10}.`;
    finalScoreDisplay.style.display = "block"; // Show final score

    // Add a "Jugar de Nuevo" button
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Jugar de Nuevo";
    playAgainButton.classList.add("btn-start"); // Re-use start button styling
    playAgainButton.onclick = startQuiz; // Assign the start quiz function to it

    // Clear any previous start button if it was moved/re-added
    if (startButton.parentNode) {
        startButton.parentNode.removeChild(startButton);
    }
    document.body.appendChild(playAgainButton); // Append to body or a specific container
}