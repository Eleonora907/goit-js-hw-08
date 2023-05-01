import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle'; 

const playerContainer = document.querySelector('#vimeo-player');

const player = new Player(playerContainer); 

player.getVideoTitle().then(title => {
  console.log('title:', title);
});

player.on('timeupdate', throttle(function() { 
  localStorage.setItem('videoplayer-current-time', player.getCurrentTime()); 
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime); 
}
