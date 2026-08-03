// OPEN INVITATION

function openInvitation(){

    document.getElementById("opening").style.display = "none";

    const secret = document.getElementById("secretScreen");

    secret.style.display = "flex";

    music.play();

    playing = true;

    musicBtn.textContent = "🎵";

    confetti({

        particleCount:120,

        spread:90,

        origin:{y:.6},

        colors:[
            "#D4AF37",
            "#FFD700",
            "#FFF8DC"
        ]

    });

    setTimeout(() => {

        secret.classList.add("hide");

        setTimeout(() => {

            secret.style.display = "none";

            secret.classList.remove("hide");

            document.getElementById("invitation").style.display = "block";

        },800);

    },2200);

}
// GOOGLE MAP LOCATION

function openMap(){

    window.open(
        "https://www.google.com/maps/search/?api=1&query=V2J3%2BQQV%20Nabas%2C%20Aklan",
        "_blank"
    );

}


// COUNTDOWN

const eventDate = new Date("August 13, 2026 16:00:00").getTime();


setInterval(function(){

    const now = new Date().getTime();

    const distance = eventDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );


    document.getElementById("countdown").innerHTML =
    days + " Days • " +
    hours + " Hours • " +
    minutes + " Minutes • " +
    seconds + " Seconds";


},1000);
function openImage(img){

    const viewer = document.getElementById("imageViewer");

    document.getElementById("fullImage").src = img.src;

    viewer.style.display = "flex";

}

function closeImage(){

    document.getElementById("imageViewer").style.display = "none";

}
// BACK TO TOP BUTTON


window.onscroll=function(){

    let btn=document.getElementById("topButton");


    if(document.documentElement.scrollTop > 400){

        btn.style.display="block";

    }

    else{

        btn.style.display="none";

    }

};



function goTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
// REMOVE LOADER AFTER PAGE LOAD
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 800);

});
// BACKGROUND MUSIC

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

function toggleMusic(){

    if(playing){

        music.pause();

        musicBtn.innerHTML = "🔇";

    }else{

        music.play();

        musicBtn.innerHTML = "🎵";

    }

    playing = !playing;

}
