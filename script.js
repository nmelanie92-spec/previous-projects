let score = 0;

let currentProblemIndex = 0;
let totalProblems = 5;

// Función para botón de volver (guardada si no existe)
const backBtn = document.getElementById("back-button");
if (backBtn) {
  backBtn.addEventListener("click", function() {
    // If a notes panel is open, close it; otherwise fallback to history
    const notes = document.getElementById('notes-panel');
    if (notes && notes.style.display === 'block') {
      notes.style.display = 'none';
    } else {
      window.history.back();
    }
  });
}

// Open notes panel when user clicks the notes button
const openNotesBtn = document.getElementById('open-notes');
if (openNotesBtn) {
  openNotesBtn.addEventListener('click', function() {
    const notes = document.getElementById('notes-panel');
    if (notes) {
      notes.style.display = 'block';
      createNotesCanvas();
    }
  });
}

// Erase (Borrar) button: clear the notes canvas
const eraseBtn = document.getElementById('erase-button');
if (eraseBtn) {
  eraseBtn.addEventListener('click', function() {
    const canvas = document.getElementById('notes-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
}

// Create a drawing canvas inside the notes panel (id: notes-canvas-container)
function createNotesCanvas() {
  const container = document.getElementById('notes-canvas-container');
  if (!container) return;
  if (container._hasCanvas) return;
  container._hasCanvas = true;

  let canvas = document.createElement('canvas');
  canvas.id = 'notes-canvas';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  container.appendChild(canvas);

  const context = canvas.getContext('2d');
  context.lineWidth = 10;
  context.lineCap = 'round';

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width));
    canvas.height = Math.max(1, Math.floor(rect.height));
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let isMouseDown = false;
  let previous = { x: 0, y: 0 };

  function getPosFromEvent(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY);
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  canvas.addEventListener('mousemove', event => {
    if (isMouseDown) {
      let { x, y } = getPosFromEvent(event);
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(x, y);
      context.stroke();

      previous = { x, y };
    }
  });

  canvas.addEventListener('mousedown', event => {
    previous = getPosFromEvent(event);
    isMouseDown = true;
  });

  canvas.addEventListener('mouseup', event => {
    isMouseDown = false;
  });

  canvas.addEventListener('mouseleave', () => { isMouseDown = false; });

  // Touch support
  canvas.addEventListener('touchstart', event => {
    event.preventDefault();
    previous = getPosFromEvent(event);
    isMouseDown = true;
  }, { passive: false });

  canvas.addEventListener('touchmove', event => {
    event.preventDefault();
    if (isMouseDown) {
      let { x, y } = getPosFromEvent(event);
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(x, y);
      context.stroke();
      previous = { x, y };
    }
  }, { passive: false });

  canvas.addEventListener('touchend', event => { isMouseDown = false; }, { passive: true });
}

// Funciones para música
var music = document.getElementById("myAudio");

function pauseMusic() {
  if (music) music.pause();
}

if (typeof music.loop == 'boolean'){
  music.loop = true;
}
else{
  music.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
  }, false);
}

function playMusic() {
  if (music) music.play();
}

// Funciones para botón de música
const musicButton = document.getElementById('music-button');
if (musicButton) {
  let isMusicOn = true;

  musicButton.addEventListener('click', function() {
      if (isMusicOn) {
        musicButton.style.backgroundImage = "url('img/no-music.png')";
        isMusicOn = false;
        pauseMusic();
      } else {
        musicButton.style.backgroundImage = "url('img/music.png')";
        isMusicOn = true;
        playMusic();
      }
  });
}

// Funciones para dropdown de idiomas
function toggleLangDrop() {
  document.getElementById("langDrop").classList.toggle("show");
}

// Cierra el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.lang-button')) {
    var dropdowns = document.getElementsByClassName("lang-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Funciones para tutorial
let currentStep = 1;
const totalSteps = 5;

// Función para avanzar al siguiente paso
function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`tutorial-step-${currentStep}`).style.display = 'none';
    currentStep++;
    document.getElementById(`tutorial-step-${currentStep}`).style.display = 'block';

  } else if (currentStep === totalSteps) {
    window.location.href = 'nivels.php';
  }
}

// Función para mostrar pasos específicos
function showStep(stepNum) {
  document.getElementById(`tutorial-step-${currentStep}`).style.display = 'none';
  document.getElementById(`tutorial-step-${stepNum}`).style.display = 'block';
  currentStep = stepNum;
}

// Funciones para niveles
let currentLevel = 1;
const totalLevel = 6;

// Función para avanzar al siguiente nivel
function nextLevel() {
  if (currentLevel < totalLevel) {
    const prev = document.getElementById(`level-${currentLevel}`);
    if (prev) prev.style.display = 'none';
    currentLevel++;
    const next = document.getElementById(`level-${currentLevel}`);
    if (next) next.style.display = 'block';
  } else {
    console.log('Redirecting to nivels.php from level', currentLevel);
    currentLevel++;
    window.location.href = 'nivels.php';
  }

}

// Función para mostrar niveles específicos
function showLevel(levelNum) {
  document.getElementById(`level-${currentLevel}`).style.display = 'none';
  document.getElementById(`level-${levelNum}`).style.display = 'block';
  currentLevel = levelNum;
}

// Función para generar números aleatorios
function rando(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: find an element for the current level, fallback to a visible matching selector
function isVisible(el) {
  if (!el) return false;
  const style = window.getComputedStyle(el);
  return style && style.display !== 'none' && el.offsetParent !== null;
}

function getLevelElement(selector) {
  const levelDiv = document.getElementById(`level-${currentLevel}`);
  if (levelDiv) {
    const el = levelDiv.querySelector(selector);
    if (el) return el;
  }
  const candidates = Array.from(document.querySelectorAll(selector));
  return candidates.find(e => {
    const lvl = e.closest('[id^="level-"]');
    if (lvl && lvl.id === `level-${currentLevel}`) return true;
    return isVisible(e);
  }) || null;
}

// Función para generar números aleatorios en los niveles
function generateFractions() {
  const bottom1 = getLevelElement('.bottom_1');
  const bottom2 = getLevelElement('.bottom_2');

  if (!bottom1 || !bottom2) return;

  let a = rando(1, 15);
  let b = rando(1, 15);

  bottom1.textContent = a;
  bottom2.textContent = b;

  console.log('Level:', currentLevel);
  console.log('bottom1:', bottom1);
  console.log('bottom2:', bottom2);
}

// Función para generar números aleatorios en los niveles avanzados
function generateAvanFractions() {
  const bottom1 = getLevelElement('.bottom_1');
  const bottom2 = getLevelElement('.bottom_2');

  const top1 = getLevelElement('.top_1');
  const top2 = getLevelElement('.top_2');

  if (!bottom1 || !bottom2 || !top1 || !top2) return;
  // I want the numerators to be random, but never bigger than the denominators

  const a = rando(1, 15); // bottom_1 (denominator)
  const b = rando(1, 15); // bottom_2 (denominator)

  // numerators should be <= their denominators
  const c = rando(1, a); // top_1 (numerator)
  const d = rando(1, b); // top_2 (numerator)

  bottom1.textContent = a;
  bottom2.textContent = b;

  top1.textContent = c;
  top2.textContent = d;

  console.log('Level:', currentLevel);
  console.log('top1:', top1);
  console.log('top2:', top2);
  console.log('bottom1:', bottom1);
  console.log('bottom2:', bottom2);
}

function generateImpropFractions() {
  const bottom1 = getLevelElement('.bottom_1');
  const bottom2 = getLevelElement('.bottom_2');

  const top1 = getLevelElement('.top_1');
  const top2 = getLevelElement('.top_2');

  if (!bottom1 || !bottom2 || !top1 || !top2) return;

  const denA = rando(1, 14);
  const denB = rando(1, 14);

  const numA = rando(denA + 1, 15);
  const numB = rando(denB + 1, 15);

  bottom1.textContent = denA;
  bottom2.textContent = denB;

  top1.textContent = numA;
  top2.textContent = numB;

  console.log('Level:', currentLevel);
  console.log('top1:', top1);
  console.log('top2:', top2);
  console.log('bottom1:', bottom1);
  console.log('bottom2:', bottom2);
}

function generateMixedFractions() {
  const whole1 = getLevelElement('.whole_1');
  const whole2 = getLevelElement('.whole_2');
  const top1 = getLevelElement('.top_1');
  const top2 = getLevelElement('.top_2');
  const bottom1 = getLevelElement('.bottom_1');
  const bottom2 = getLevelElement('.bottom_2');

  if (!bottom1 || !bottom2 || !top1 || !top2 || !whole1 || !whole2) return;

  const denA = rando(1, 14);
  const denB = rando(1, 14);

  const numA = rando(1, denA - 1);
  const numB = rando(1, denB - 1);

  const wholeA = rando(1, 5);
  const wholeB = rando(1, 5);

  bottom1.textContent = denA;
  bottom2.textContent = denB;

  top1.textContent = numA;
  top2.textContent = numB;

  whole1.textContent = wholeA;
  whole2.textContent = wholeB;

  console.log('Level:', currentLevel);
  console.log('whole1:', whole1);
  console.log('top1:', top1);
  console.log('bottom1:', bottom1);
  console.log('whole2:', whole2);
  console.log('top2:', top2);
  console.log('bottom2:', bottom2);
}

// Funciones para selección de luna
let lastClickedSymbol = null;
let lastClickedMoon = null;

const moonElements = document.querySelectorAll('.moon.shadow-layer.moon-button');
const currentLevelDiv = document.getElementById(`level-${currentLevel}`);
const levelMoons = currentLevelDiv ? currentLevelDiv.querySelectorAll('.moon.moon-button') : [];

document.addEventListener('click', function (e) {
  const moon = e.target.closest('.moon-button');
  if (!moon) return;

  const levelDiv = document.getElementById(`level-${currentLevel}`);
  if (!levelDiv) return;
  const moons = levelDiv.querySelectorAll('.moon-button');

  moons.forEach(m => {
    m.classList.remove('moon-red');
    m.classList.add('moon-gray');
  });

  moon.classList.remove('moon-gray');
  moon.classList.add('moon-red');

  lastClickedMoon = moon;
  lastClickedSymbol = moon.querySelector('.symbol')?.textContent;

  const symbolContainer = levelDiv.querySelector('.selected-symbol');
  if (symbolContainer) {
    symbolContainer.innerHTML = '';
    const replica = moon.cloneNode(true);
    replica.classList.remove('moon-button');
    symbolContainer.appendChild(replica);
  }
});

// Función para resolver la comparación de fracciones
let correct = 0;
function solvefrac() {
  const levelDiv = document.getElementById(`level-${currentLevel}`);
  if (!levelDiv) return false;

  const b = Number(levelDiv.querySelector('.bottom_1')?.textContent);
  const d = Number(levelDiv.querySelector('.bottom_2')?.textContent);

  console.log(`Solving level ${currentLevel}: 1/${b} ? 1/${d}`);
  console.log('Clicked symbol:', lastClickedSymbol);

  let correctSymbol;
  if (b > d) correctSymbol = '<';
  else if (b < d) correctSymbol = '>';
  else correctSymbol = '=';

  const isCorrect = lastClickedSymbol === correctSymbol;

  if (isCorrect) score++;

  console.log('Correct symbol:', correctSymbol);
  console.log('Score now:', score);

  return isCorrect;
}

// Función para resolver la comparación de fracciones en niveles avanzados
function avansolve() {
  const levelDiv = document.getElementById(`level-${currentLevel}`);
  if (!levelDiv) return false;

  const a = Number(levelDiv.querySelector('.top_1')?.textContent);
  const c = Number(levelDiv.querySelector('.top_2')?.textContent);

  console.log('Clicked symbol:', lastClickedSymbol);

  let correctSymbol;
  // I want to compare a and c, but they are numerators of fractions, so I need to consider the denominators as well.
  const b = Number(levelDiv.querySelector('.bottom_1')?.textContent);
  const d = Number(levelDiv.querySelector('.bottom_2')?.textContent);

  const a_times_d = a * d; // first fraction numerator times second denominator
  const c_times_b = c * b; // second fraction numerator times first denominator

  if (a_times_d > c_times_b) correctSymbol = '>';
  else if (a_times_d < c_times_b) correctSymbol = '<';
  else correctSymbol = '=';

  const isCorrect = lastClickedSymbol === correctSymbol;

  if (isCorrect) score++;

  console.log('Correct symbol:', correctSymbol);
  console.log('Score now:', score);

  return isCorrect;
}

function fracimpropsolve() {
  const levelDiv = document.getElementById(`level-${currentLevel}`);
  if (!levelDiv) return false;
  
  const a = Number(levelDiv.querySelector('.bottom_1')?.textContent);
  const c = Number(levelDiv.querySelector('.bottom_2')?.textContent);
  console.log('Clicked symbol:', lastClickedSymbol);
  
  let correctSymbol;
  const b = Number(levelDiv.querySelector('.top_1')?.textContent);
  const d = Number(levelDiv.querySelector('.top_2')?.textContent);
  // console log the fractions being compared
  console.log(`Comparing ${b}/${a} and ${d}/${c}`);

  const a_times_d = a * d;
  const c_times_b = c * b;

  // console log a_times_d and c_times_b
  console.log(`a_times_d: ${a_times_d}, c_times_b: ${c_times_b}`);

  if (c_times_b > a_times_d ) correctSymbol = '>';
  else if (c_times_b < a_times_d) correctSymbol = '<';
  else correctSymbol = '=';
  
  const isCorrect = lastClickedSymbol === correctSymbol;
  
  if (isCorrect) score++;
  
  console.log('Correct symbol:', correctSymbol);
  console.log('Score now:', score);
  
  return isCorrect;
} 

function fracmixsolve() {
  const levelDiv = document.getElementById(`level-${currentLevel}`);
  if (!levelDiv) return false;
  
  const whole1 = Number(levelDiv.querySelector('.whole_1')?.textContent);
  const whole2 = Number(levelDiv.querySelector('.whole_2')?.textContent);
  const top1 = Number(levelDiv.querySelector('.top_1')?.textContent);
  const top2 = Number(levelDiv.querySelector('.top_2')?.textContent);
  const bottom1 = Number(levelDiv.querySelector('.bottom_1')?.textContent);
  const bottom2 = Number(levelDiv.querySelector('.bottom_2')?.textContent);

  console.log('Clicked symbol:', lastClickedSymbol);
  
  let correctSymbol;

  // Convert mixed numbers to improper fractions for comparison
  const frac1_num = whole1 * bottom1 + top1; // numerator of first fraction
  const frac1_den = bottom1; // denominator of first fraction

  const frac2_num = whole2 * bottom2 + top2; // numerator of second fraction
  const frac2_den = bottom2; // denominator of second fraction

  const frac1_value = frac1_num / frac1_den;
  const frac2_value = frac2_num / frac2_den;

  console.log('Level:', currentLevel);
  console.log('whole1:', whole1);
  console.log('top1:', top1);
  console.log('bottom1:', bottom1);
  console.log('whole2:', whole2);
  console.log('top2:', top2);
  console.log('bottom2:', bottom2);

  if (frac1_value > frac2_value) correctSymbol = '>';
  else if (frac1_value < frac2_value) correctSymbol = '<';
  else correctSymbol = '=';
  
  const isCorrect = lastClickedSymbol === correctSymbol;
  
  if (isCorrect) score++;
  
  console.log('Correct symbol:', correctSymbol);
  console.log('Score now:', score);
  
  return isCorrect;
}

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname || '';
  const hasAvan = !!document.querySelector('.avan-button') || path.endsWith('avanzado.php');
  const hasImp = !!document.querySelector('.imp-button') || path.endsWith('frac_imp.php');
  const hasMix = !!document.querySelector('.mix-button') || path.endsWith('num_mix.php');

  if (hasAvan) {
    generateAvanFractions();
  } else if (hasImp) {
    generateImpropFractions();
  } else if (hasMix) {
    generateMixedFractions();
  } else {
    generateFractions();
  }
});

function updateScoreUI() {
  document.getElementById('score-display').textContent = score;
  document.getElementById('final-score').textContent = score;
}

// Función para botón de ingresar
const interButton = document.querySelector('.inter-button');
const scoreBoard = document.querySelector('.score-board');

if (interButton) {
  interButton.addEventListener('click', function () {
  const circles = scoreBoard.children;
  const circle = circles[currentProblemIndex];

  // Only solve if a symbol was clicked
  if (lastClickedSymbol && circle) {
    const isCorrect = solvefrac();
    circle.classList.add(isCorrect ? 'circle-right' : 'circle-wrong');
    updateScoreUI();
  }

  currentProblemIndex++;
  lastClickedSymbol = null;
  lastClickedMoon = null;

  // Always call nextLevel()
  nextLevel();

  // Only generate fractions if we are still in a normal level
  if (currentLevel <= totalLevel) {
    generateFractions();
  }

  console.log('Current Level:', currentLevel, 'Score:', score);
  });
}

// Función para botón de ingresar en avanzado
const avanButton = document.querySelector('.avan-button');

if (avanButton) {
  avanButton.addEventListener('click', function () {
  const circles = scoreBoard.children;
  const circle = circles[currentProblemIndex];

  // Only solve if a symbol was clicked
  if (lastClickedSymbol && circle) {
    const isCorrect = avansolve();
    circle.classList.add(isCorrect ? 'circle-right' : 'circle-wrong');
    updateScoreUI();
  }

  currentProblemIndex++;
  lastClickedSymbol = null;
  lastClickedMoon = null;

  // Always call nextLevel()
  nextLevel();

  // Only generate fractions if we are still in a normal level
  if (currentLevel <= totalLevel) {
    generateAvanFractions();
  }

  console.log('Current Level:', currentLevel, 'Score:', score);
  });
}

// Funcion para boton de ingresar en frac_imp
const impButton = document.querySelector('.imp-button');

if (impButton) {
  impButton.addEventListener('click', function () {
  const circles = scoreBoard.children;
  const circle = circles[currentProblemIndex];

  // Only solve if a symbol was clicked
  if (lastClickedSymbol && circle) {
    const isCorrect = fracimpropsolve();
    circle.classList.add(isCorrect ? 'circle-right' : 'circle-wrong');
    updateScoreUI();
  }

  currentProblemIndex++;
  lastClickedSymbol = null;
  lastClickedMoon = null;

  // Always call nextLevel()
  nextLevel();

  // Only generate fractions if we are still in a normal level
  if (currentLevel <= totalLevel) {
    generateImpropFractions();
  }

  console.log('Current Level:', currentLevel, 'Score:', score);
  });
}

// Funcion para boton de ingresar en num_mix
const mixButton = document.querySelector('.mix-button');
if (mixButton) {
  mixButton.addEventListener('click', function () {
  const circles = scoreBoard.children;
  const circle = circles[currentProblemIndex];
  const solvingLevel = currentLevel;  // 👈 freeze level

  if (lastClickedSymbol && circle) {
    const isCorrect = fracmixsolve(solvingLevel);
    circle.classList.add(isCorrect ? 'circle-right' : 'circle-wrong');
    updateScoreUI();
  }

  currentProblemIndex++;
  lastClickedSymbol = null;
  lastClickedMoon = null;

  nextLevel();

  if (currentLevel <= totalLevel) {
    generateMixedFractions();
  }
});
}

