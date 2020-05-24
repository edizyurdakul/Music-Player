const musicContainer = document.getElementById('container');
const btnPlay = document.getElementById('play');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const music = ['Herbal Tea','Heroes Tonight']
 
let musicIndex = 1;

loadMusic(music[musicIndex]);

function loadMusic(music) {
    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src = `images/${music}.jpg`;
}

function playMusic() {
    musicContainer.classList.add('play');
    btnPlay.querySelector('i.fa').classList.remove('fa-play')
    btnPlay.querySelector('i.fa').classList.add('fa-pause')
    audio.play(); 
}

function pauseMusic() {
    musicContainer.classList.remove('play');
    btnPlay.querySelector('i.fa').classList.add('fa-play')
    btnPlay.querySelector('i.fa').classList.remove('fa-pause')
    audio.pause(); 
}

function prevMusic() {
    musicIndex--;
    if(musicIndex < 0){
        musicIndex = music.length - 1;
    }

    loadMusic(music[musicIndex]);
}

function nextMusic() {
    musicIndex++;
    if(musicIndex > music.length - 1){
        musicIndex = 0;
    }

    loadMusic(music[musicIndex]);
}



btnPlay.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseMusic()
    }else {
        playMusic()
    }
})

btnPrev.addEventListener('click', prevMusic);
btnNext.addEventListener('click', nextMusic)