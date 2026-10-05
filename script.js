/* =========================================
   CyberShield JavaScript
========================================= */


/* ================= YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= QUIZ ================= */

const questions =
    document.querySelectorAll(".question");

const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");

const quizResult =
    document.getElementById("quizResult");

const resetQuiz =
    document.getElementById("resetQuiz");


let score = 0;
let answered = 0;


/* ================= PROGRESS ================= */

function updateProgress() {

    progressText.textContent =
        `${answered} of ${questions.length} answered`;

    const percentage =
        (answered / questions.length) * 100;

    progressBar.style.width =
        `${percentage}%`;
}


/* ================= RESULT ================= */

function showResult() {

    if (answered !== questions.length) {
        return;
    }

    let message = "";

    if (score === 5) {

        message =
            "Excellent! You have a strong understanding of basic cybersecurity safety habits.";

    } else if (score >= 3) {

        message =
            "Good work! A little more awareness can make your online habits safer.";

    } else {

        message =
            "Keep learning! Review the Safety Tips section and try the quiz again.";

    }

    quizResult.innerHTML =
        `Your score: <strong>${score}/${questions.length}</strong><br>${message}`;
}


/* ================= QUESTIONS ================= */

questions.forEach((question) => {

    const buttons =
        question.querySelectorAll("button");

    const correctAnswer =
        question.dataset.answer;


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            /* Don't allow answering the same question twice */

            if (question.dataset.answered === "true") {
                return;
            }


            question.dataset.answered = "true";

            answered++;


            const selected =
                button.dataset.value;


            /* Disable all buttons */

            buttons.forEach((item) => {

                item.disabled = true;


                /* Highlight correct answer */

                if (
                    item.dataset.value ===
                    correctAnswer
                ) {

                    item.classList.add("correct");

                }

            });


            /* Check selected answer */

            if (selected === correctAnswer) {

                score++;

            } else {

                button.classList.add("wrong");

            }


            updateProgress();

            showResult();

        });

    });

});


/* ================= RESET QUIZ ================= */

resetQuiz.addEventListener("click", () => {

    score = 0;

    answered = 0;


    questions.forEach((question) => {

        question.dataset.answered =
            "false";


        const buttons =
            question.querySelectorAll("button");


        buttons.forEach((button) => {

            button.disabled = false;

            button.classList.remove(
                "correct",
                "wrong"
            );

        });

    });


    quizResult.textContent =
        "Your result will appear here after all five answers.";


    updateProgress();

});


/* ================= INITIAL STATE ================= */

updateProgress();
