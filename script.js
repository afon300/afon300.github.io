document.addEventListener('DOMContentLoaded', () => {
    let allQuestionsData = [];
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

    const pageType = document.title.includes("Économie") ? 'eco' : (document.title.includes("Web") ? 'web' : 'other');

    async function fetchQuestions() {
        try {
            let filesToFetch = [];
            if (pageType === 'eco') {
                filesToFetch = ['json/eco.json', 'json/eco2.json'];
            } else if (pageType === 'web') {
                filesToFetch = ['json/web.json'];
            } else {
                console.error("Page type non reconnue pour le chargement des questions.");
                startLightTestButton.textContent = "Erreur de configuration";
                startFullTestButton.textContent = "Erreur de configuration";
                startLightTestButton.disabled = true;
                startFullTestButton.disabled = true;
                questionTitle.textContent = "Erreur de configuration de la page.";
                return;
            }

            const responses = await Promise.all(filesToFetch.map(file =>
                fetch(file).catch(e => {
                    console.error(`Erreur de chargement du fichier ${file}:`, e);
                    return { ok: false, status: 'NetworkError', json: () => Promise.resolve([]) }; 
                })
            ));

            let loadedQuestions = [];
            for (let i = 0; i < responses.length; i++) {
                const response = responses[i];
                const fileName = filesToFetch[i];
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        loadedQuestions = loadedQuestions.concat(data);
                    } else {
                        console.error(`Le fichier ${fileName} n'est pas un tableau JSON valide.`);
                    }
                } else {
                    console.error(`Erreur HTTP status: ${response.status} pour ${fileName}`);
                }
            }
            allQuestionsData = loadedQuestions;

            if (allQuestionsData.length > 0) {
                if (allQuestionsData.length >= QUESTIONS_PER_LIGHT_QUIZ) {
                    startLightTestButton.disabled = false;
                    startLightTestButton.textContent = `Test Léger (${QUESTIONS_PER_LIGHT_QUIZ} Questions)`;
                } else {
                    startLightTestButton.textContent = `Test Léger (Source insuffisante - ${allQuestionsData.length}/${QUESTIONS_PER_LIGHT_QUIZ} questions)`;
                    startLightTestButton.disabled = true;
                }

                if (allQuestionsData.length >= QUESTIONS_PER_FULL_QUIZ) {
                    startFullTestButton.disabled = false;
                    startFullTestButton.textContent = `Test Complet (${QUESTIONS_PER_FULL_QUIZ} Questions)`;
                } else {
                    startFullTestButton.textContent = `Test Complet (Source insuffisante - ${allQuestionsData.length}/${QUESTIONS_PER_FULL_QUIZ} questions)`;
                    startFullTestButton.disabled = true;
                }
            } else {
                startLightTestButton.textContent = "Aucune question disponible";
                startLightTestButton.disabled = true;
                startFullTestButton.textContent = "Aucune question disponible";
                startFullTestButton.disabled = true;
                console.error("Aucune question chargée. Vérifiez les fichiers JSON et la console.");
                questionTitle.textContent = "Erreur de chargement des questions. Veuillez vérifier les fichiers JSON et la console.";
            }

        } catch (error) {
            console.error("Impossible de charger ou traiter les questions:", error);
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

    function initializeQuiz(quizTitleMode) {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        startArea.classList.add('hidden');
        resultsArea.classList.add('hidden');
        questionSection.classList.remove('hidden');
        nextButton.classList.add('hidden');
        feedbackArea.classList.add('hidden');
        questionCard.className = 'question-card';
        
        const baseTitle = mainTitle.dataset.originalTitle || (pageType === 'eco' ? "QCM de Révision d'Économie" : (pageType === 'web' ? "QCM de Révision de Développement Web" : "QCM de Révision"));
        mainTitle.textContent = `${baseTitle} - ${quizTitleMode}`;
        displayQuestion();
        updateProgress();
    }

    function startLightTest() {
        if (!allQuestionsData || allQuestionsData.length === 0) {
            alert("Les questions n'ont pas pu être chargées ou sont vides.");
            return;
        }
        if (allQuestionsData.length < QUESTIONS_PER_LIGHT_QUIZ) {
             alert(`Pas assez de questions pour démarrer le test léger (besoin de ${QUESTIONS_PER_LIGHT_QUIZ}, disponibles: ${allQuestionsData.length}).`);
             return;
        }
        let shuffledQuestions = shuffleArray([...allQuestionsData]);
        questionsForCurrentQuiz = shuffledQuestions.slice(0, QUESTIONS_PER_LIGHT_QUIZ);
        initializeQuiz("Test Léger");
    }

    function startFullTest() {
        if (!allQuestionsData || allQuestionsData.length === 0) {
            alert("Aucune question disponible pour le test complet.");
            return;
        }
        if (allQuestionsData.length < QUESTIONS_PER_FULL_QUIZ) {
             alert(`Pas assez de questions pour démarrer le test complet (besoin de ${QUESTIONS_PER_FULL_QUIZ}, disponibles: ${allQuestionsData.length}). Un test avec ${allQuestionsData.length} questions va démarrer.`);
             questionsForCurrentQuiz = shuffleArray([...allQuestionsData]); 
        } else {
            let allShuffledQuestions = shuffleArray([...allQuestionsData]);
            questionsForCurrentQuiz = allShuffledQuestions.slice(0, QUESTIONS_PER_FULL_QUIZ);
        }
        initializeQuiz("Test Complet");
    }

    function displayQuestion() {
        if (currentQuestionIndex < questionsForCurrentQuiz.length) {
            const currentQuestion = questionsForCurrentQuiz[currentQuestionIndex];
            questionTitle.textContent = currentQuestion.question; // MODIFIÉ: innerHTML -> textContent
            questionSource.textContent = `(Source: ${currentQuestion.sourceFile})`;
            optionsArea.innerHTML = '';

            const optionsToDisplay = shuffleArray([...currentQuestion.options]);

            optionsToDisplay.forEach(optionText => {
                const button = document.createElement('button');
                button.textContent = optionText; // MODIFIÉ: innerHTML -> textContent
                button.classList.add('option-button');
                button.addEventListener('click', () => selectAnswer(button, optionText, currentQuestion.correctAnswer));
                optionsArea.appendChild(button);
            });
            questionCard.className = 'question-card'; 
            feedbackArea.classList.add('hidden');
            nextButton.classList.add('hidden');
            if (typeof MathJax !== 'undefined') {
                MathJax.typesetPromise([questionTitle, optionsArea]).catch(function (err) {
                    console.error('MathJax typesetting error:', err);
                });
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
            if (btn.textContent === correctAnswer) { // MODIFIÉ: innerHTML -> textContent
                btn.classList.add('reveal-correct');
            }
        });

        button.classList.add('selected'); 

        const isCorrect = selectedOption === correctAnswer;
        if (isCorrect) {
            score++;
            questionCard.className = 'question-card correct-answer-bg'; 
            feedbackText.textContent = "🎉 Bonne réponse !"; // textContent est OK ici
            feedbackText.className = 'correct-feedback'; 
        } else {
            questionCard.className = 'question-card incorrect-answer-bg'; 
            feedbackText.textContent = `😔 Mauvaise réponse. La bonne réponse était : ${correctAnswer}`; // MODIFIÉ: innerHTML -> textContent
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
        correctAnswersSummary.innerHTML = ''; // Garder innerHTML ici pour la structure des items
        userAnswers.forEach((answer, index) => {
            const item = document.createElement('div');
            item.classList.add('summary-item');
            
            // Pour le résumé, nous utilisons innerHTML pour la structure,
            // mais nous devons nous assurer que les *données variables* (answer.question, etc.)
            // sont traitées comme du texte si elles peuvent contenir du HTML.
            // Une solution simple est de les échapper si nécessaire avant de les insérer,
            // ou si elles sont censées être du texte simple, cela devrait bien se passer.
            // Pour l'instant, on garde la structure existante, en supposant que les
            // données elles-mêmes ne causent pas de problème majeur dans le résumé.
            // Si answer.question, etc., doivent afficher du HTML littéralement,
            // il faudrait les échapper avant de les mettre dans ce template string.
            item.innerHTML = `
                <p><strong>Question ${index + 1}:</strong> </p>
                <p>Votre réponse : <span class="${answer.isCorrect ? 'correct-text' : 'incorrect-text'}"></span></p>
                ${!answer.isCorrect ? `<p>Réponse correcte : <span class="correct-text"></span></p>` : ''}
            `;

            // Injecter le contenu textuel de manière sécurisée
            item.querySelector('p:nth-child(1)').appendChild(document.createTextNode(answer.question + ' '));
            const smallSource = document.createElement('small');
            smallSource.textContent = `(${answer.source})`;
            item.querySelector('p:nth-child(1)').appendChild(smallSource);
            
            item.querySelector('p:nth-child(2) span').textContent = answer.selected;
            if (!answer.isCorrect) {
                item.querySelector('p:nth-child(3) span').textContent = answer.correct;
            }
            
            correctAnswersSummary.appendChild(item);
        });

        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([correctAnswersSummary]).catch(function (err) {
                    console.error('MathJax typesetting error in summary:', err);
            });
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
        const isQuestionSectionVisible = !questionSection.classList.contains('hidden');

        if (isQuestionSectionVisible && isNextButtonVisible && (event.code === 'Space' || event.key === 'Enter')) {
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
        
        let originalTitle = mainTitle.dataset.originalTitle;
        if (!originalTitle) {
            if (pageType === 'eco') {
                 originalTitle = "QCM de Révision d'Économie";
            } else if (pageType === 'web'){
                 originalTitle = "QCM de Révision de Développement Web";
            } else {
                 originalTitle = "QCM de Révision";
            }
        }
        mainTitle.textContent = originalTitle;

        progressBar.style.width = '0%';
        progressText.textContent = '';

        fetchQuestions();
    });

    const originalPageTitle = mainTitle.textContent;
    mainTitle.dataset.originalTitle = originalPageTitle;
});