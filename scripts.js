// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Quiz Functionality
const quizData = [
    {
        question: "Apa hukum Newton pertama?",
        options: ["Hukum Inersia", "Hukum Aksi dan Reaksi", "Hukum Gravitasi", "Hukum Termodinamika"],
        answer: "Hukum Inersia"
    },
    {
        question: "Apa satuan dari gaya?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        answer: "Newton"
    },
    {
        question: "Apa persamaan energi kinetik?",
        options: [
            "1/2 mv^2",
            "mv",
            "mgh",
            "F = ma"
        ],
        answer: "1/2 mv^2"
    }
];

let currentQuestion = 0;
let score = 0;

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextBtn = document.getElementById('next-btn');

function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    quizQuestion.innerHTML = <p>${currentQuiz.question}</p>;
    quizOptions.innerHTML = '';

    currentQuiz.options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.addEventListener('click', () => selectOption(option));
        quizOptions.appendChild(btn);
    });
}

function selectOption(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
        score++;
        alert("Jawaban benar!");
    } else {
        alert(Jawaban salah! Jawaban yang benar adalah: ${correct});
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    quizQuestion.innerHTML = <p>Anda menjawab ${score} dari ${quizData.length} soal dengan benar.</p>;
    quizOptions.innerHTML = '';
    nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length) {
        loadQuiz();
    }
});

window.onload = loadQuiz;

// Contact Form Submission (Simple Alert)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Terima kasih telah menghubungi kami! Kami akan segera merespons pesan Anda.");
    contactForm.reset();
});