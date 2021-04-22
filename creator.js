var soundsQueue = new Array();
var i = -1;


function addSoundToQueue(filePath, letter, volume){
    i = -1;
    soundsQueue.push(new Audio(filePath));
    $("#text").append(letter);
}

function playSoundQueue(){
    i++;

    if (i >= soundsQueue.length){
        i = -1;
    }

    if ((i == soundsQueue.length && soundsQueue.length < 1) || i < 0) return;
    soundsQueue[i].addEventListener('ended', playSoundQueue);
    soundsQueue[i].play();
}


function clearSoundQueue() {
    i = -1;
    soundsQueue = new Array();
    $("#text").text("");
}

function removeLastLetter() {
    i = -1;
    soundsQueue.pop();
    $("#text").text(function(i, text) {
        return text.slice(0, -1);
    });
}