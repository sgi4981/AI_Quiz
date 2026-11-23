const facts = [
  {
    text: 'The term "artificial intelligence" was first used in 1955 by computer scientist John McCarthy.',
	  details: `The term Artificial Intelligence (AI) was introduced by computer scientist John McCarthy in 1955. He helped organize the Dartmouth Summer Research Project on Artificial Intelligence in 1956, which is widely considered a key event in the birth of AI as a research field. The goal was to explore whether computers could be made to perform tasks that normally require human intelligence, such as solving problems, learning, and understanding language. Today, AI has grown from an early scientific idea into technology we use every day.`
    ,source: 'Source: John McCarthy and early AI history; the Dartmouth workshop in 1956 helped popularize the field.'
  },
  {
    text: 'Voice assistants like Siri and Alexa use AI to understand what you say and answer back.',
  details: `When you ask Siri or Alexa a question, AI helps the device recognize your words, understand what you mean, and respond. For example, you might ask for tomorrow's weather, set a timer, or play your favourite song. The assistant processes your request and uses the appropriate service to provide an answer or complete a task. This technology combines speech recognition and language understanding to make interacting with computers feel more like having a conversation.`
    ,source: 'Source: Microsoft, Amazon, and Apple explain that speech recognition and language understanding are AI features.'
  },
  {
    text: 'When YouTube or Netflix suggests what to watch next, that is AI learning what you like.',
details: `Have you ever noticed that YouTube or Netflix suggests another video or show you might enjoy? AI-powered recommendation systems look for patterns in your viewing activity, such as the types of videos you watch, the topics you enjoy, and what similar viewers like. Machine learning helps these systems predict what you may want to watch next. The recommendations can change as your interests change. This makes it easier to discover new content, although the suggestions are not always what you will like.`
    ,source: 'Source: Recommendation systems use machine learning to suggest content based on viewing patterns.'
  },
  {
    text: 'Your email spam filter uses AI to catch junk mail before you ever see it.',
details: `AI can help protect your inbox by identifying unwanted or suspicious emails before you open them. Spam filters learn patterns associated with junk mail, such as suspicious links, misleading subject lines, unusual sending behaviour, or language commonly found in scams. When an email matches these patterns, the system may move it to your spam folder or flag it for review. This helps reduce unwanted messages and can protect you from phishing attempts. However, some harmful emails may still get through, so it is important to be careful with unfamiliar links and attachments.`
    ,source: 'Source: Spam filtering commonly uses machine learning to detect patterns in suspicious messages.'
  },
  {
    text: 'Self-driving cars use AI to recognize stop signs, traffic lights, and people crossing the street.',
details: `Self-driving vehicles use AI alongside cameras, radar, and other sensors to understand what is happening around them. Computer vision helps identify objects such as traffic lights, road signs, other vehicles, cyclists, and pedestrians. The system then uses this information to help decide when to slow down, stop, or change direction. These decisions must be made quickly because road conditions can change in seconds. Although this technology is advancing, self-driving systems have limitations and must be designed and tested carefully to help keep people safe.`
    ,source: 'Source: Autonomous vehicle systems use computer vision, sensors, and decision-making models.'
  },
  {
    text: 'AI helps doctors spot signs of illness in X-rays and other medical scans.',
details: `Doctors can use AI tools to help examine medical images such as X-rays, mammograms, and other scans. These systems are trained on many examples and can learn to recognize patterns that may be associated with certain illnesses or injuries. For instance, an AI tool might flag an area of an X-ray that needs a closer look. This can help medical professionals review information more efficiently, but AI does not replace a doctor's expertise. Doctors consider the patient's symptoms, medical history, and other test results before making decisions.`
    ,source: 'Source: Medical imaging AI systems are used to support analysis of X-rays, mammograms, and scans.'
  },
  {
    text: 'Face unlock on a phone uses AI to recognize your face.',
details: `Many smartphones use facial recognition technology to help confirm your identity when you unlock your device. The system analyses features or patterns in your face and compares them with information recorded during setup. Depending on the phone, it may also use depth sensors or other techniques to make recognition more secure. This allows you to unlock your phone without typing a password every time. Facial recognition is convenient, but its accuracy and security depend on how the particular system is designed.`
    ,source: 'Source: Face recognition systems use machine learning to compare facial features with stored data.'
  },
  {
    text: 'AI learns from lots of examples, a bit like how you learn by practicing.',
details: `Machine learning is a type of AI that finds patterns in examples and uses those patterns to make predictions or decisions. Imagine showing a computer thousands of pictures of cats and dogs, with labels identifying each animal. During training, the system learns patterns that help it tell the two apart in new pictures. This is a little like learning through practice, although computers learn in a different way from people. The quality and variety of the examples matter because incomplete or biased training data can lead to mistakes.`
    ,source: 'Source: Machine learning models improve by learning patterns from large sets of examples.'
  },
  {
    text: 'AI can make mistakes and sometimes sounds sure even when it is wrong, so it is important to double-check important answers.',
details: `AI tools can produce answers that sound clear and convincing but contain incorrect information. Generative AI, for example, creates responses based on patterns learned during training; it does not guarantee that every statement is true. AI can also reflect biases present in its training data or misunderstand a question. That is why it is important to check important answers against reliable sources, especially for health, safety, school research, and financial decisions. Think of AI as a helpful assistant, not an unquestionable source of truth.`
    ,source: 'Source: AI systems are powerful, but they can still produce errors or biased outputs and should be checked.'
  },
  {
    text: 'AI is already part of many everyday tools, including phones, maps, games, and streaming services.',
details: `AI is not just something from science fiction or the future. It is already built into many tools we use every day. Maps can use AI to estimate travel times and predict traffic; games can use it to control computer opponents or adapt challenges; phones can use it to improve photographs and recognize speech; and streaming services can recommend content. Each application uses AI for a different purpose, helping technology respond to information and perform tasks. Understanding how these systems work helps us use them more effectively and make informed choices about technology.` 
    ,source: 'Source: AI is embedded in consumer products across speech, recommendation, navigation, and personalization.'
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

// Paste the deployed Google Apps Script web app URL here to enable sheet saving.
const GOOGLE_SHEETS_WEB_APP_URL = '';

const screenMap = {
  cover: document.getElementById('cover-screen'),
  facts: document.getElementById('facts-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen'),
  tools: document.getElementById('ai-tools-screen')
};

const startBtn = document.getElementById('start-btn');
const aiToolsBtn = document.getElementById('ai-tools-btn');
const introVideo = document.querySelector('.intro-video-screen');
const playIntroVideoBtn = document.getElementById('play-intro-video-btn');
const nextFactBtn = document.getElementById('next-fact-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const startOverBtn = document.getElementById('start-over-btn');
const startOverIcon = document.getElementById('start-over-icon');

const factProgress = document.getElementById('fact-progress');
const factText = document.getElementById('fact-text');
const factDetails = document.getElementById('fact-details');
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
let answersForRun = [];
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
  if (name !== 'cover') stopIntroVideo();
  Object.entries(screenMap).forEach(([key, screen]) => {
    screen.classList.toggle('active', key === name);
  });
  resetIdleTimer();
}

function stopIntroVideo() {
  if (!introVideo) return;
  introVideo.removeAttribute('src');
  playIntroVideoBtn.classList.remove('hidden');
}

function playIntroVideo() {
  introVideo.src = 'https://www.youtube.com/embed/oJC8VIDSx_Q?autoplay=1&controls=1&playsinline=1&rel=0&modestbranding=1';
  playIntroVideoBtn.classList.add('hidden');
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    startOver();
  }, 120000);
}

function startOver() {
  stopIntroVideo();
  factIndex = 0;
  questionIndex = 0;
  correctAnswers = 0;
  answersForRun = [];
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
  factDetails.textContent = fact.details;
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
  answersForRun.push({
    questionNumber: questionIndex + 1,
    question: currentQuestion.question,
    selectedAnswer: selectedOption,
    correctAnswer: currentQuestion.answer,
    isCorrect
  });

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
  saveQuizResult(total, percent);
}

function saveQuizResult(total, percent) {
  const saveStatus = document.getElementById('save-status');

  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    saveStatus.textContent = 'Results are not being saved yet. Set up the Google Sheets connection to enable saving.';
    return;
  }

  saveStatus.textContent = 'Sending your result to Google Sheets…';
  fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      score: correctAnswers,
      total,
      percent,
      answers: answersForRun
    })
  }).then(() => {
    saveStatus.textContent = 'Result sent. It may take a moment to appear in the Google Sheet.';
  }).catch(() => {
    saveStatus.textContent = 'Could not send the result. Check the connection and try again.';
  });
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
  correctAnswers = 0;
  answersForRun = [];
  factsList = [...facts];
  showScreen('facts');
  showFact(0);
});

playIntroVideoBtn.addEventListener('click', playIntroVideo);

aiToolsBtn.addEventListener('click', () => {
  showScreen('tools');
});

nextFactBtn.addEventListener('click', nextFact);
nextQuestionBtn.addEventListener('click', nextQuestion);

tryAgainBtn.addEventListener('click', () => {
  correctAnswers = 0;
  answersForRun = [];
  questionIndex = 0;
  quizList = shuffle(questions);
  showScreen('quiz');
  renderQuestion();
});

startOverBtn.addEventListener('click', () => {
  startOver();
});

startOverIcon.addEventListener('click', startOver);

document.addEventListener('pointerdown', resetIdleTimer);
document.addEventListener('keydown', resetIdleTimer);

factsList = [...facts];
quizList = shuffle(questions);
showScreen('cover');
showFact(0);
