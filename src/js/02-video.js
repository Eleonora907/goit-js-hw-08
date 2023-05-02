import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let currentSeconds = null;
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(reloadPlay, 1000));

function reloadPlay(ev) {
  localStorage.setItem('videoplayer-current-time', ev.seconds);
}

try {
    const savedTime = +localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(savedTime);
} catch (e) {
    console.error(`Error setting current time: ${e.message}`);
}

