document.addEventListener('DOMContentLoaded', () => {
    let questionsData = [];
    let questionsData2 = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let questionsForCurrentQuiz = [];

    const startArea = document.getElementById('start-area');
    const questionSection = document.getElementById('question-section');
    const questionCard = document.getElementById('question-card');
    const resultsArea = document.getElementById('results-area');

    const startLightTestButton = document.getElementById('start-light-test-button');
    const startFullTestButton = document.getElementById('start-full-test-button');

    const questionTitle = document.getElementById('question-title');
    const questionSource = document.getElementById('question-source');
    const optionsArea = document.getElementById('options-area');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackText = document.getElementById('feedback-text');
    const nextButton = document.getElementById('next-button');
    const scoreDisplay = document.getElementById('score');
    const totalQuestionsInQuizDisplay = document.getElementById('total-questions-in-quiz');
    const percentageDisplay = document.getElementById('percentage');
    const restartButton = document.getElementById('restart-button');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const correctAnswersSummary = document.getElementById('correct-answers-summary');
    const mainTitle = document.querySelector('header h1');

    const QUESTIONS_PER_LIGHT_QUIZ = 20;
    const QUESTIONS_PER_FULL_QUIZ = 50;

    async function fetchQuestions() {
        try {
            const [response1, response2] = await Promise.all([
                fetch('data.json').catch(e => { console.error("Erreur de chargement data.json:", e); return { ok: false, json: () => Promise.resolve([]) }; }),
                fetch('data2.json').catch(e => { console.error("Erreur de chargement data2.json:", e); return { ok: false, json: () => Promise.resolve([]) }; })
            ]);

            if (response1.ok) {
                questionsData = await response1.json();
            } else {
                console.error(`HTTP error! status: ${response1.status} for data.json`);
                questionsData = [];
            }

            if (response2.ok) {
                questionsData2 = await response2.json();
            } else {
                console.warn(`Could not load data2.json. Status: ${response2.status}. Full test might be affected.`);
                questionsData2 = [];
            }

            if (questionsData.length > 0) {
                startLightTestButton.disabled = false;
                startLightTestButton.textContent = `Test Léger (${QUESTIONS_PER_LIGHT_QUIZ} Questions - Source 1)`;
            } else {
                startLightTestButton.textContent = "Aucune question (Source 1)";
                startLightTestButton.disabled = true;
                console.error("data.json est vide ou mal formaté ou n'a pu être chargé.");
            }

            if (questionsData.length > 0 || questionsData2.length > 0) {
                 if ((questionsData.length + questionsData2.length) > 0) {
                    startFullTestButton.disabled = false;
                    startFullTestButton.textContent = `Test Complet (${QUESTIONS_PER_FULL_QUIZ} Questions - Toutes Sources)`;
                 } else {
                    startFullTestButton.textContent = "Aucune question disponible";
                    startFullTestButton.disabled = true;
                 }
            } else {
                startFullTestButton.textContent = "Aucune question disponible";
                startFullTestButton.disabled = true;
            }
             if(questionsData2.length === 0 && questionsData.length > 0) {
                 startFullTestButton.textContent = `Test Complet (${QUESTIONS_PER_FULL_QUIZ} Questions - Source 2 manquante)`;
             }


        } catch (error) {
            console.error("Impossible de charger toutes les questions:", error);
            startLightTestButton.textContent = "Erreur de chargement";
            startFullTestButton.textContent = "Erreur de chargement";
            startLightTestButton.disabled = true;
            startFullTestButton.disabled = true;
            questionTitle.textContent = "Erreur de chargement des questions. Veuillez vérifier les fichiers JSON et la console.";
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function initializeQuiz(quizTitle) {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        startArea.classList.add('hidden');
        resultsArea.classList.add('hidden');
        questionSection.classList.remove('hidden');
        nextButton.classList.add('hidden');
        feedbackArea.classList.add('hidden');
        questionCard.className = 'question-card';
        mainTitle.textContent = `QCM d'Économie - ${quizTitle}`;
        displayQuestion();
        updateProgress();
    }

    function startLightTest() {
        if (!questionsData || questionsData.length === 0) {
            alert("Les questions de la source 1 (data.json) n'ont pas pu être chargées ou sont vides.");
            return;
        }
        let shuffledSource1 = shuffleArray([...questionsData]);
        const numQuestions = Math.min(QUESTIONS_PER_LIGHT_QUIZ, shuffledSource1.length);
        if (numQuestions === 0) {
             alert("Pas assez de questions dans data.json pour démarrer le test léger.");
             return;
        }
        questionsForCurrentQuiz = shuffledSource1.slice(0, numQuestions);
        initializeQuiz("Test Léger");
    }

    function startFullTest() {
        let combinedQuestions = [];
        if (questionsData && questionsData.length > 0) combinedQuestions = combinedQuestions.concat(questionsData);
        if (questionsData2 && questionsData2.length > 0) combinedQuestions = combinedQuestions.concat(questionsData2);

        if (combinedQuestions.length === 0) {
            alert("Aucune question disponible pour le test complet (vérifiez data.json et data2.json).");
            return;
        }

        let allShuffledQuestions = shuffleArray([...combinedQuestions]);
        const numQuestions = Math.min(QUESTIONS_PER_FULL_QUIZ, allShuffledQuestions.length);
         if (numQuestions === 0) {
             alert("Pas assez de questions combinées pour démarrer le test complet.");
             return;
        }
        questionsForCurrentQuiz = allShuffledQuestions.slice(0, numQuestions);
        initializeQuiz("Test Complet");
    }


    function displayQuestion() {
        if (currentQuestionIndex < questionsForCurrentQuiz.length) {
            const currentQuestion = questionsForCurrentQuiz[currentQuestionIndex];
            questionTitle.innerHTML = currentQuestion.question;
            questionSource.textContent = `(Source: ${currentQuestion.sourceFile})`;
            optionsArea.innerHTML = '';

            const optionsToDisplay = shuffleArray([...currentQuestion.options]);

            optionsToDisplay.forEach(optionText => {
                const button = document.createElement('button');
                button.innerHTML = optionText;
                button.classList.add('option-button');
                button.addEventListener('click', () => selectAnswer(button, optionText, currentQuestion.correctAnswer));
                optionsArea.appendChild(button);
            });
            questionCard.className = 'question-card';
            feedbackArea.classList.add('hidden');
            nextButton.classList.add('hidden');
            if (typeof MathJax !== 'undefined') {
                MathJax.typesetPromise([questionTitle, optionsArea]);
            }
        } else {
            showResults();
        }
        updateProgress();
    }

    function selectAnswer(button, selectedOption, correctAnswer) {
        const optionButtons = optionsArea.querySelectorAll('.option-button');
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.innerHTML === correctAnswer) {
                btn.classList.add('reveal-correct');
            }
        });

        button.classList.add('selected');

        const isCorrect = selectedOption === correctAnswer;
        if (isCorrect) {
            score++;
            questionCard.className = 'question-card correct-answer-bg';
            feedbackText.textContent = "🎉 Bonne réponse !";
            feedbackText.className = 'correct-feedback';
        } else {
            questionCard.className = 'question-card incorrect-answer-bg';
            feedbackText.innerHTML = `😔 Mauvaise réponse. La bonne réponse était : ${correctAnswer}`; // innerHTML pour correctAnswer
            feedbackText.className = 'incorrect-feedback';
            button.classList.add('incorrect');
        }

        feedbackArea.classList.remove('hidden');
        nextButton.classList.remove('hidden');

        userAnswers.push({
            question: questionsForCurrentQuiz[currentQuestionIndex].question,
            selected: selectedOption,
            correct: correctAnswer,
            isCorrect: isCorrect,
            source: questionsForCurrentQuiz[currentQuestionIndex].sourceFile
        });

        if (currentQuestionIndex === questionsForCurrentQuiz.length - 1) {
            nextButton.textContent = "Voir les Résultats";
        } else {
            nextButton.textContent = "Question Suivante";
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionsForCurrentQuiz.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionSection.classList.add('hidden');
        resultsArea.classList.remove('hidden');
        scoreDisplay.textContent = score;
        totalQuestionsInQuizDisplay.textContent = questionsForCurrentQuiz.length;
        const percent = questionsForCurrentQuiz.length > 0 ? ((score / questionsForCurrentQuiz.length) * 100).toFixed(1) : 0;
        percentageDisplay.textContent = `Pourcentage de réussite : ${percent}%`;
        displayCorrectAnswersSummary();
        progressBar.style.width = '100%';
        progressText.textContent = "QCM Terminé !";
    }

    function displayCorrectAnswersSummary() {
        correctAnswersSummary.innerHTML = '';
        userAnswers.forEach((answer, index) => {
            const item = document.createElement('div');
            item.classList.add('summary-item');
            item.innerHTML = `
                <p><strong>Question ${index + 1}:</strong> ${answer.question} <small>(${answer.source})</small></p>
                <p>Votre réponse : <span class="${answer.isCorrect ? 'correct-text' : 'incorrect-text'}">${answer.selected}</span></p>
                ${!answer.isCorrect ? `<p>Réponse correcte : <span class="correct-text">${answer.correct}</span></p>` : ''}
            `;
            correctAnswersSummary.appendChild(item);
        });

        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([correctAnswersSummary]);
        }
    }

    function updateProgress() {
        const progress = questionsForCurrentQuiz.length > 0 ? ((currentQuestionIndex) / questionsForCurrentQuiz.length) * 100 : 0;
        progressBar.style.width = progress + '%';
        if (currentQuestionIndex < questionsForCurrentQuiz.length) {
            progressText.textContent = `Question ${currentQuestionIndex + 1} sur ${questionsForCurrentQuiz.length}`;
        }
    }

    document.addEventListener('keydown', function(event) {
        const isNextButtonVisible = !nextButton.classList.contains('hidden');
        if (isNextButtonVisible && (event.code === 'Space' || event.key === 'Enter')) {
            event.preventDefault();
            nextButton.click();
        }
    });

    fetchQuestions();

    startLightTestButton.addEventListener('click', startLightTest);
    startFullTestButton.addEventListener('click', startFullTest);
    
    nextButton.addEventListener('click', nextQuestion);
    
    restartButton.addEventListener('click', () => {
        resultsArea.classList.add('hidden');
        startArea.classList.remove('hidden');
        questionSection.classList.add('hidden');
        mainTitle.textContent = "QCM de Révision d'Économie";
        progressBar.style.width = '0%';
        progressText.textContent = '';

        if (questionsData.length > 0) {
            startLightTestButton.disabled = false;
        }
        if (questionsData.length > 0 || questionsData2.length > 0) {
             if ((questionsData.length + questionsData2.length) > 0) {
                startFullTestButton.disabled = false;
             }
        }
    });
});