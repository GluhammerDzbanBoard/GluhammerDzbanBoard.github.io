var soundsQueue = new Array();
var i = -1;


function addSoundToQueue(filePath, letter){
    i = -1;
    soundsQueue.push(new Audio(filePath));
    $("#text").append(letter);
}

function playSoundQueue(){
    i++;

    if (i >= soundsQueue.length){
        i = -1;
    }

    if (i == soundsQueue.length && soundsQueue.length < 1) return;
    soundsQueue[i].addEventListener('ended', playSoundQueue);
    soundsQueue[i].play();
}


function clearSoundQueue(){
    i = -1;
    soundsQueue = new Array();
    $("#text").text("");
}