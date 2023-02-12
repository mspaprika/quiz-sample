const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

const start = document.getElementById("start");
const next = document.getElementById("next");
const questArea = document.getElementById("question");

let score = 0;
let count = 0;

const questions = [
    {   // 1
        question: 'What is the position of our planet, in our galaxy, in relation to the Sun?',
        answers: {
            a: 'First', 
            b: 'Third', 
            c: 'Seventh', 
            d: 'Fifth', 
            correct: 'b'
        },
    },
    {   // 2
        question: 'In what capital of the world you can find The Acropolis?',
        answers: {
            a: 'Athens, Greece', 
            b: 'Berlin, Germany', 
            c: 'Helsinki, Finland', 
            d: 'Washington D.C, United States', 
            correct: 'a'
        },
    },
    {   // 3
        question: 'In what country you can see the ancient runis of Machu Picchu - The lost city of The Inca Empire?',
        answers: {
            a: 'Japan', 
            b: 'Mexico', 
            c: 'Peru', 
            d: 'Singapore', 
            correct: 'c'
        },
    },
]


const displayInfo = (count) => {
    if (count === questions.length) {
        // THE END !!!!!!
        alert(`Finish! Your score is: ${score}`)
        return
    }
    currentQuestion = questions[count].question;
    currentAnswers = questions[count].answers;
    questArea.innerHTML = currentQuestion;
    btn1.innerHTML = currentAnswers['a'];
    btn2.innerHTML = currentAnswers['b'];
    btn3.innerHTML = currentAnswers['c'];
    btn4.innerHTML = currentAnswers['d'];
    return count
}

start.addEventListener("click", () => {
    count = 0;
    displayInfo(count);
})

next.addEventListener("click", () => {   
    count++
    displayInfo(count);
})

function checkScore(value) {
    if (!value) { return score }
    if (currentAnswers['correct'] === value) {
        score++
        alert(`Correct! ${score}`);
    }
    else {
        alert(`Incorrect! ${score}`);
        console.log('Incorrect!', score)
    }    
    return score
}


