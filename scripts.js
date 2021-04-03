var sound;
function playSound(filePath){
    stopSound();
    sound = new Audio(filePath);
    sound.play();
}

function stopSound() {
    if (sound != 'undefined' && sound != null && !sound.paused){
        sound.pause();
        sound.currentTime = 0;
    }
}

function backToMainPage() {
    stopSound();
    location.replace("../index.html");
}