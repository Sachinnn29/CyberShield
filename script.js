// ==========================================
// CYBERSHIELD JAVASCRIPT
// ==========================================


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Navbar effect on scroll
window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 7, 13, 0.96)';
    } else {
        navbar.style.background = 'rgba(5, 7, 13, 0.82)';
    }

});


// Current year
document.getElementById('year').textContent = new Date().getFullYear();


// ==========================================
// CYBER SAFETY QUIZ
// ==========================================

let quizScore = 0;
let answeredQuestions = 0;

function checkAnswer(button, correct) {

    const question = button.parentElement;

    // Prevent answering the same question twice
    if (question.dataset.answered === "true") {
        return;
    }

    question.dataset.answered = "true";

    answeredQuestions++;

    if (correct) {

        quizScore++;

        button.style.background = "#00e5ff";
        button.style.color = "#000";

    } else {

        button.style.background = "#ff4d6d";
        button.style.color = "#fff";

    }


    // Disable all buttons for this question
    const buttons = question.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = "default";
    });


    // Show final score
    if (answeredQuestions === 5) {

        let message = "";

        if (quizScore === 5) {
            message = "Excellent! You are highly cyber-aware 🛡️";
        } else if (quizScore >= 3) {
            message = "Good job! Keep improving your cyber safety habits 🔐";
        } else {
            message = "Keep learning! Improve your cybersecurity awareness ⚠️";
        }

        document.getElementById("quizResult").innerHTML =
            `Your Cyber Safety Score: <strong>${quizScore}/5</strong><br>${message}`;

    }

}


// Console message
console.log("🛡️ CyberShield loaded successfully!");
console.log("Stay safe online!");