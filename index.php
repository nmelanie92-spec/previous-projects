<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    <title>Index</title>
</head>
<body>
    <div class="container">
        <div class = 'top-buttons'>
            <div class = 'child inline-block-child'>
                <audio id="myAudio">
                    <source src="game_music.mp3" type="audio/mpeg">
                </audio>
                <button id="music-button" class="music-button" type="button"><span>Musica</span></button>
            </div>
            <div class = 'child inline-block-child'>
                <div class="language-dropdown">
                    <button onclick="toggleLangDrop()" class="lang-button"><span>Idiomas</span></button>
                    <div id="langDrop" class="lang-content">
                        <a href="#">English</a>
                        <a href="#">Espanol (Espana)</a>
                        <a href="#">Francais</a>
                        <a href="#">Portugues</a>
                        <a href="#">Italiano</a>
                        <a href="#">Catala</a>
                    </div>
                </div>
            </div>
            <div class = 'child inline-block-child'>
                <header>
                    <h1>Comparando Fracciones</h1>
                </header>
            </div>
            <div class = 'child inline-block-child'>
                <a href="index.php" class="log-out-button"><span>Salir</span></a>
            </div>
        </div>
        <section class = 'content'>
            <a href="tutorial.php" class="play-button"><span>Jugar</span></a>
        </section>
    </div>
    <footer>
        <p>&copy;SmileAndLearn2026</p>
    </footer>
</body>
</html>