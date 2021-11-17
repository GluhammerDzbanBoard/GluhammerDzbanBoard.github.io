var sound;
function playSound(filePath){
    var video = $("#102MetryVideo");
    if (video.get(0) !== undefined){
        video.get(0).pause();
        video.get(0).currentTime = 0;
        video.hide();
    }

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

function playRandomSound(){
    $.getJSON("/Data/sounds.json", function(json) {
        playSound(json[getRndInteger(0, json.length)].FilePath);
    });
}

function setRandomEmote(){
    $.getJSON("/Data/gachiEmotes.json", function(json) {
        $("*[id*=gachiGifEmote]:visible").each(function() {
            $(this).attr("src", json[getRndInteger(0, json.length)].FilePath);
          });
    });
}

function backToMainPage() {
    stopSound();
    location.replace("../index.html");
}

function openRandomGlu(){
    openGluPage(getRndInteger(1,9));
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
        case 7: 
            location.replace("Views/weebHammer.html")
        break;
        case 8: 
            location.replace("Views/hotsKing.html")
        break;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
    document.getElementById("main").style.marginRight = "260px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    $("#changeLogMinimize").hide();
    $("#changeLogMaximize").show();
    $("#closeNavButton").css("padding-right", "5%");
}

function minimizeNav(){
    $("#mySidenav").css("width","260px");
    $("#changeLogMinimize").hide();
    $("#changeLogMaximize").show();
    $("#closeNavButton").css("padding-right", "5%");
}

function maximizeNav(){
    $("#mySidenav").css("width", "100%");
    $("#changeLogMaximize").hide();
    $("#changeLogMinimize").show();
    $("#closeNavButton").css("padding-right", "1%");
}

function openLeftNav() {
    document.getElementById("mySidenav2").style.width = "250px";
    document.getElementById("leftMain").style.marginLeft = "250px";
}
  
function closeLeftNav() {
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("leftMain").style.marginLeft = "0";
}

function showVideo(id){
    $('#' + id).show();
}

