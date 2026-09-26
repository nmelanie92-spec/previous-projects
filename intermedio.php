<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    <title>Intermedio</title>
</head>
<body data-level-type="normal">
    <div class="container">
        <div class = 'top-buttons'>
            <div class = 'child inline-block-child'>
                <header>
                    <h1>Intermedio</h1>
                </header>
            </div>
            <div class = 'child inline-block-child'>
                <h2>Score: <span id="score-display">0</span></h2>
            </div>
            <div class = 'child inline-block-child'>
                <div class="score-board">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
            <div class = 'child inline-block-child'>
                <audio id="myAudio">
                    <source src="game_music.mp3" type="audio/mpeg">
                </audio>
                <button id="music-button" class="music-button" type="button"><span>Musica</span></button>
            </div>
            <div class = 'child inline-block-child'>
                <button id="open-notes" class="ap-button" type="button" aria-label="Apuntes"><span>Apuntes</span></button>
            </div>
            <div class = 'child inline-block-child'>
                <a href="nivels.php" class="log-out-button"><span>Salir</span></a>
            </div>
        </div>
        <section class = 'content'>
            <div id="level-1" class="levels">
                <h2>Problema Una</h2>
                <div class="frac-container-problem">
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_1"></span>
                    </div>
                    <div class="selected-symbol"></div>
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_2"></span>
                    </div>
                </div>
                <div class="asteroid-container">
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&lt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">=</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&gt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                </div>
            </div>
            <div id="level-2" class="levels" style="display:none;">
                <h2>Problema Dos</h2>
                <div class="frac-container-problem">
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_1"></span>
                    </div>
                    <div class="selected-symbol"></div>
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_2"></span>
                    </div>
                </div>
                <div class="asteroid-container">
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&lt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">=</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&gt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                </div>
            </div>
            <div id="level-3" class="levels" style="display:none;">
                <h2>Problema Tres</h2>
                <div class="frac-container-problem">
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_1"></span>
                    </div>
                    <div class="selected-symbol"></div>
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_2"></span>
                    </div>
                </div>
                <div class="asteroid-container">
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&lt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">=</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&gt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                </div>
            </div>
            <div id="level-4" class="levels" style="display:none;">
                <h2>Problema Cuatro</h2>
                <div class="frac-container-problem">
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_1"></span>
                    </div>
                    <div class="selected-symbol"></div>
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_2"></span>
                    </div>
                </div>
                <div class="asteroid-container">
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&lt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">=</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&gt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                </div>
            </div>
            <div id="level-5" class="levels" style="display:none;">
                <h2>Problema Cinco</h2>
                <div class="frac-container-problem">
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_1"></span>
                    </div>
                    <div class="selected-symbol"></div>
                    <div class="frac">
                        <span>1</span>
                        <span class="symbol">/</span>
                        <span class="bottom"></span>
                        <span class="bottom_2"></span>
                    </div>
                </div>
                <div class="asteroid-container">
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&lt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">=</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                <div class="moon shadow-layer moon-gray moon-button">
                    <div class="white-body">
                    <span class="symbol">&gt;</span>
                    </div>
                    <div class="crater c1"></div>
                    <div class="crater c2"></div>
                </div>
                </div>
            </div>
            <div id="level-6" class="levels" style="display:none;">
                <h2>¡Terminaste!</h2>
                <h2>Tu puntuación final es:</h2>
                <h2>Puntaje: <span id="final-score">0</span></h2>
            </div>
            <button class="inter-button">Ingresar</button>
        </section>
    </div>
        <!-- Apuntes panel (hidden overlay) -->
        <div id="notes-panel" class="notes-panel" style="display:none;">
            <div class="container">
                <header class="apuntes-header">
                    <div class = 'child inline-block-child'>
                        <h1>Apuntes</h1>
                    </div>
                    <div class = 'child inline-block-child'>
                        <button id="erase-button" class="back-button">Borrar</button>
                    </div>
                    <div class = 'child inline-block-child'>
                        <div class="volver-container"> 
                            <button id="back-button" class="back-button">Volver</button>
                        </div>
                    </div>
                </header>
                <div class="content">
                    <div id="notes-canvas-container"></div>
                </div>
            </div>
        </div>
    <footer>
        <p>&copy; SmileAndLearn2026</p>
    </footer>
</body>
</html>