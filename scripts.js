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

function openRandomGlu(){

    openGluPage(getRndInteger(1,6));
}

function selectGlu(){
    var id = $("#selectedGlu").children(":selected").attr("id");
    openGluPage(parseInt(id));
}

function openGluPage(id){
    switch(id) {
        case 1:
            location.replace("Views/calmGlu.html")
            break;
        case 2: 
            location.replace("Views/specGlu.html")
            break;
        case 3: 
            location.replace("Views/gachiGlu.html")
            break;
        case 4: 
            location.replace("Views/classicGlu.html")
            break;
        case 5: 
            location.replace("Views/partyGlu.html")
            break;
        case 6: 
            location.replace("Views/friendGlu.html")
            break;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function playRandomSound(){
    $.getJSON("test.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

function playRandomSound(){
    $.getJSON("/sounds.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
}

