//
// function playRandomSound(){
//     var sounds = [
//         "audio/1.mp3",
//         "audio/2.mp3",
//         "audio/3.mp3",
//         "audio/4.mp3",
//
//     ];
//
//
//     var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
//     document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
//     console.log(soundFile)
// }

function playRandomSound() {
    var sounds = [
        "audio/1.mp3",
        "audio/2.mp3",
        "audio/3.mp3",
        "audio/4.mp3",
    ];

    var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
    document.getElementById("player").innerHTML = "<embed src=\"" + soundFile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}


function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-volume-xmark');
    icon.classList.toggle('fa-volume-high');

    anchor.querySelector("span").textContent = icon.classList.contains('fa-volume-xmark') ? " " : " ";
}