import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle'; 

const playerContainer = document.querySelector('#vimeo-player');
const player = new Player(playerContainer); 

player.on('timeupdate', throttle(function() { 
  const currentTime = player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime.toString()); 
}, 1000));


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const time = parseFloat(savedTime);
  if (!isNaN(time) && time <= player.getDuration()) {
    player.setCurrentTime(time);
  }
}
