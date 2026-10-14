const facts = [
  {
    text: 'The term "artificial intelligence" was first used in 1955 by computer scientist John McCarthy.',
    source: 'Source: John McCarthy and early AI history; the Dartmouth workshop in 1956 helped popularize the field.'
  },
  {
    text: 'Voice assistants like Siri and Alexa use AI to understand what you say and answer back.',
    source: 'Source: Microsoft, Amazon, and Apple explain that speech recognition and language understanding are AI features.'
  },
  {
    text: 'When YouTube or Netflix suggests what to watch next, that is AI learning what you like.',
    source: 'Source: Recommendation systems use machine learning to suggest content based on viewing patterns.'
  },
  {
    text: 'Your email spam filter uses AI to catch junk mail before you ever see it.',
    source: 'Source: Spam filtering commonly uses machine learning to detect patterns in suspicious messages.'
  },
  {
    text: 'Self-driving cars use AI to recognize stop signs, traffic lights, and people crossing the street.',
    source: 'Source: Autonomous vehicle systems use computer vision, sensors, and decision-making models.'
  },
  {
    text: 'AI helps doctors spot signs of illness in X-rays and other medical scans.',
    source: 'Source: Medical imaging AI systems are used to support analysis of X-rays, mammograms, and scans.'
  },
  {
    text: 'Face unlock on a phone uses AI to recognize your face.',
    source: 'Source: Face recognition systems use machine learning to compare facial features with stored data.'
  },
  {
    text: 'AI learns from lots of examples, a bit like how you learn by practicing.',
    source: 'Source: Machine learning models improve by learning patterns from large sets of examples.'
  },
  {
    text: 'AI can make mistakes and sometimes sounds sure even when it is wrong, so it is important to double-check important answers.',
    source: 'Source: AI systems are powerful, but they can still produce errors or biased outputs and should be checked.'
  },
  {
    text: 'AI is already part of many everyday tools, including phones, maps, games, and streaming services.',
    source: 'Source: AI is embedded in consumer products across speech, recommendation, navigation, and personalization.'
  }
];

const questions = [
  {
    type: 'truefalse',
    question: 'AI is only found in robots.',
    options: ['True', 'False'],
    answer: 'False',
    explanation: 'AI is in phones, apps, games, maps, and more.'
  },
  {
    type: 'multiple',
    question: 'Which of these uses AI?',
    options: ['A light switch', 'A voice assistant like Alexa', 'A pencil'],
    answer: 'A voice assistant like Alexa',
    explanation: 'Voice assistants use AI to understand speech.'
  },
  {
    type: 'truefalse',
    question: 'Video apps use AI to suggest what you might like to watch next.',
    options: ['True', 'False'],
    answer: 'True',
    explanation: 'They learn from what you have watched before.'
  },
  {
    type: 'multiple',
    question: 'How does AI usually learn?',
    options: ['From lots of examples', 'By sleeping', 'It already knows everything'],
    answer: 'From lots of examples',
    explanation: 'AI finds patterns in large amounts of examples (data).'
  },
  {
    type: 'truefalse',
    question: 'AI is always right.',
    options: ['True', 'False'],
    answer: 'False',
    explanation: 'AI can make mistakes, so it is smart to double-check.'
  },
  {
    type: 'multiple',
    question: 'What helps a self-driving car “see” the road?',
    options: ['Magic', 'AI with cameras and sensors', 'A steering wheel'],
    answer: 'AI with cameras and sensors',
    explanation: 'AI uses camera and sensor data to recognize things around the car.'
  },
  {
    type: 'truefalse',
    question: 'AI can help doctors find signs of illness in X-rays.',
    options: ['True', 'False'],
    answer: 'True',
    explanation: 'AI can spot patterns in medical images to help doctors.'
  },
  {
    type: 'multiple',
    question: 'Which of these is a good way to use AI safely?',
    options: ['Share your passwords with it', 'Check important answers with a trusted source', 'Believe everything it says'],
    answer: 'Check important answers with a trusted source',
    explanation: 'Always double-check and keep personal information private.'
  },
  {
    type: 'truefalse',
    question: 'Your email spam filter uses AI.',
    options: ['True', 'False'],
    answer: 'True',
    explanation: 'It learns what junk mail looks like and filters it out.'
  },
  {
    type: 'multiple',
    question: 'In what year was the term "artificial intelligence" first used?',
    options: ['1955', '1995', '2015'],
    answer: '1955',
    explanation: 'John McCarthy used it in 1955.'
  }
];

const screenMap = {
  cover: document.getElementById('cover-screen'),
  facts: document.getElementById('facts-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen')
};

const startBtn = document.getElementById('start-btn');
const nextFactBtn = document.getElementById('next-fact-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const startOverBtn = document.getElementById('start-over-btn');

const factProgress = document.getElementById('fact-progress');
const factText = document.getElementById('fact-text');
const factSource = document.getElementById('fact-source');

const quizProgress = document.getElementById('quiz-progress');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const feedback = document.getElementById('feedback');

const resultMessage = document.getElementById('result-message');
const scoreText = document.getElementById('score-text');
const confettiLayer = document.getElementById('confetti-layer');

let factIndex = 0;
let questionIndex = 0;
let correctAnswers = 0;
let currentQuestion = null;
let currentAnswer = null;
let factsList = [];
let quizList = [];
let idleTimer = null;

function shuffle(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function showScreen(name) {
  Object.entries(screenMap).forEach(([key, screen]) => {
    screen.classList.toggle('active', key === name);
  });
  resetIdleTimer();
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    startOver();
  }, 120000);
}

function startOver() {
  factIndex = 0;
  questionIndex = 0;
  correctAnswers = 0;
  currentAnswer = null;
  factsList = [...facts];
  quizList = shuffle(questions);
  showScreen('cover');
  showFact(0);
}

function showFact(index) {
  const fact = factsList[index];
  factProgress.textContent = `Fact ${index + 1} of ${factsList.length}`;
  factText.textContent = fact.text;
  factSource.textContent = fact.source;
}

function nextFact() {
  if (factIndex < factsList.length - 1) {
    factIndex += 1;
    showFact(factIndex);
  } else {
    showScreen('quiz');
    renderQuestion();
  }
}

function renderQuestion() {
  questionIndex = 0;
  currentQuestion = quizList[questionIndex];
  currentAnswer = null;
  answerOptions.innerHTML = '';
  feedback.classList.add('hidden');
  feedback.classList.remove('correct', 'wrong');
  nextQuestionBtn.classList.add('hidden');
  quizProgress.textContent = `Question ${questionIndex + 1} of ${quizList.length}`;
  questionText.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = option;
    button.setAttribute('role', 'listitem');
    button.addEventListener('click', () => handleAnswer(button, option));
    answerOptions.appendChild(button);
  });
}

function handleAnswer(button, selectedOption) {
  if (currentAnswer !== null) return;

  currentAnswer = selectedOption;
  const buttons = answerOptions.querySelectorAll('.option-btn');

  buttons.forEach((optionButton) => {
    const optionText = optionButton.textContent;
    optionButton.disabled = true;

    if (optionText === currentQuestion.answer) {
      optionButton.classList.add('correct');
    }

    if (optionText === selectedOption && selectedOption !== currentQuestion.answer) {
      optionButton.classList.add('wrong');
    }
  });

  const isCorrect = selectedOption === currentQuestion.answer;
  if (isCorrect) correctAnswers += 1;

  feedback.textContent = `${isCorrect ? 'Correct!' : 'Nice try!'} ${currentQuestion.explanation}`;
  feedback.classList.remove('hidden');
  feedback.classList.add(isCorrect ? 'correct' : 'wrong');
  nextQuestionBtn.classList.remove('hidden');
}

function nextQuestion() {
  questionIndex += 1;

  if (questionIndex < quizList.length) {
    currentQuestion = quizList[questionIndex];
    currentAnswer = null;
    answerOptions.innerHTML = '';
    feedback.classList.add('hidden');
    feedback.classList.remove('correct', 'wrong');
    nextQuestionBtn.classList.add('hidden');
    quizProgress.textContent = `Question ${questionIndex + 1} of ${quizList.length}`;
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-btn';
      button.textContent = option;
      button.setAttribute('role', 'listitem');
      button.addEventListener('click', () => handleAnswer(button, option));
      answerOptions.appendChild(button);
    });
  } else {
    showResults();
  }
}

function showResults() {
  const total = quizList.length;
  const percent = Math.round((correctAnswers / total) * 100);
  scoreText.textContent = `${correctAnswers} / ${total} — ${percent}%`;

  if (percent >= 80) {
    resultMessage.textContent = 'Amazing job! You really know your AI basics!';
    createConfetti();
  } else if (percent < 50) {
    resultMessage.textContent = 'You are learning! Try again and keep exploring AI.';
  } else {
    resultMessage.textContent = 'Nice try! You are getting the hang of AI.';
  }

  showScreen('results');
}

function createConfetti() {
  confettiLayer.innerHTML = '';
  const colors = ['#ff6b6b', '#ffd93d', '#6be7ff', '#7ef89b', '#ff9f1c', '#9c7bff'];

  for (let i = 0; i < 120; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.background = colors[i % colors.length];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty('--dx', `${(Math.random() - 0.5) * 220}px`);
    piece.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    confettiLayer.appendChild(piece);
  }
}

startBtn.addEventListener('click', () => {
  factIndex = 0;
  factsList = [...facts];
  showScreen('facts');
  showFact(0);
});

nextFactBtn.addEventListener('click', nextFact);
nextQuestionBtn.addEventListener('click', nextQuestion);

tryAgainBtn.addEventListener('click', () => {
  correctAnswers = 0;
  questionIndex = 0;
  quizList = shuffle(questions);
  showScreen('quiz');
  renderQuestion();
});

startOverBtn.addEventListener('click', () => {
  startOver();
});

document.addEventListener('pointerdown', resetIdleTimer);
document.addEventListener('keydown', resetIdleTimer);

factsList = [...facts];
quizList = shuffle(questions);
showScreen('cover');
showFact(0);
