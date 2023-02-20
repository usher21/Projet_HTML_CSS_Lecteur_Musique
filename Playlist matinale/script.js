let music = document.querySelector('.audio');
let btnPlay = document.querySelector('.btn-play');

btnPlay.onclick = () => {
	if (music.paused) {
		music.play();
		btnPlay.setAttribute('src', 'img/icones/pause(1).png');
    } else {
    	music.pause();
    	btnPlay.setAttribute('src', 'img/icones/play(1).png');
    }
}
