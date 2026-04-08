let questions = [
    {
        "question": "Wann kam Yvi zur Welt ?",
        "answer_1": "12.05.1996",
        "answer_2": "10.07.1996",
        "answer_3": "14.06.1998",
        "answer_4": "10.07.1996",
        "right_answer": 2
    },
    {
        "question": "Zur welcher Uhrzeit wurde Yvi geboren ?",
        "answer_1": "06:01 Uhr",
        "answer_2": "05:53 Uhr",
        "answer_3": "05:51 Uhr",
        "answer_4": "05:49 Uhr",
        "right_answer": 3
    },
    {
        "question": "Wann hat Fabs die LAP ERFOLGREICH abgeschlossen ?",
        "answer_1": "September 2018",
        "answer_2": "garnicht",
        "answer_3": " September 2020",
        "answer_4": " September 2019",
        "right_answer": 4
    },
    {
        "question": "Aus welchem Material ist Yvis Rücken",
        "answer_1": "Aluminium",
        "answer_2": "Titan oder Kobalt-Chrom-Legierungen",
        "answer_3": "Eisen",
        "answer_4": "Holz",
        "right_answer": 2
    },


];

let rightQuestions = 0;
let currentQuestion = 0;
let audio = new Audio('audio/audio.mp3');
let audioFALSCH = new Audio('audio/falsch.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    } else { //show next question

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;


        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioFALSCH.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}



