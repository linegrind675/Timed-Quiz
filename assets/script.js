var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionsContainterEl = document.getElementById('questionsCon');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

var score = 0;

var shuffledQuestions, currentQuestions;

var questions = [{
    question: "1. Commonly used data types do not include...",
    choices: [
        { text: 'strings', correct: false },
        { text: 'booleans', correct: false },
        { text: 'alerts', correct: true },
        { text: 'numbers', correct: false }
    ]

}, {

    question: "2. The condition  in an if / else statement is enclosed with an ______.",
    choices: [
        { text: 'quotes', correct: false },
        { text: 'curly brackets', correct: false },
        { text: 'parentheses', correct: true },
        { text: 'square brackets', correct: false }

    ]

}, {

    question: "3. What structure of code continues to perform the same actions multiple times in a row?",
    choices: [
        { text: 'variable', correct: false },
        { text: 'loop', correct: true },
        { text: 'object', correct: false },
        { text: 'conditional', correct: false }
    ]

}, {

    question: "4. Which software company developed JavaScript?",
    choices: [
        { text: 'Mozilla', correct: false },
        { text: 'Netscape', correct: true },
        { text: 'Sun Microsystems', correct: false },
        { text: 'Oracle', correct: false }
    ]

}, {

    question: "5. What do '[]' represent.",
    choices: [
        { text: 'object', correct: false },
        { text: 'variable', correct: false },
        { text: 'function', correct: false },
        { text: 'array', correct: true }
    ]

}, {

    question: "6. Inside which HTML element do we put JavaScript?",
    choices: [
        { text: '<script>', correct: true },
        { text: '<head>', correct: false },
        { text: '<meta>', correct: false },
        { text: '<style>', correct: false }
    ]

}, {

    question: "7. What is the original name of JavaScript?",
    choices: [
        { text: 'LiveScript', correct: false },
        { text: 'Escript', correct: false },
        { text: 'Mocha', correct: true },
        { text: 'JavaScript', correct: false }
    ]

}, {

    question: "8. JavaScript is designed for the following purpose.",
    choices: [
        { text: 'to style HTML pages', correct: false },
        { text: 'to execute Queries related to databases on a server', correct: false },
        { text: 'to add interactivity to HTML pages', correct: false },
        { text: 'All of the above', correct: true }
    ]

}, {

    question: "9. Which symbol is used for comments in JavaScript?",
    choices: [
        { text: '\\', correct: false },
        { text: '//', correct: true },
        { text: '\*\*', correct: false },
        { text: '\/', correct: false }
    ],

}, {

    question: "10. What are the types of pop up boxes available in JavaScript?",
    choices: [
        { text: 'alert', correct: false },
        { text: 'prompt', correct: false },
        { text: 'confirm', correct: false },
        { text: 'all of the above', correct: true }
    ],


}]

startButton.addEventListener('click', startGame);

function timerStart(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over')
        }
    }, 1000);
}

