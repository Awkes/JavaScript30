/* get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('[name=fullscreen]')

/* build our functions */
function togglePlay() {
    (video.paused) ? video.play() : video.pause();
}

function updateToggle() {
    (video.paused) ? toggle.innerHTML = '►' : toggle.innerHTML = '&#9208;';
}

function skip() {
    video.currentTime += parseFloat(this.getAttribute('data-skip'));
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent+'%';
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function goFullscreen() {
    (document.fullscreenElement) ? document.exitFullscreen() : player.requestFullscreen();
}

function hideCursor() {
    console.log('stopped')
}

/* hook up event listeners */
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);

skipButtons.forEach(btn => btn.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
let rangedown = false;
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress);
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true );
progress.addEventListener('mouseup', () => mousedown = false );

fullscreen.addEventListener('click', goFullscreen);