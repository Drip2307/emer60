// ===========================
// OPEN INVITATION
// ===========================

function openInvitation(){

    document.getElementById("welcome").style.display="none";

    document.getElementById("mainContent").style.display="block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// ===========================
// COUNTDOWN
// ===========================

const eventDate = new Date("August 13, 2026 16:00:00").getTime();

const countdown = setInterval(function(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    "⏳ " +
    days + " Days " +
    hours + " Hours " +
    minutes + " Minutes " +
    seconds + " Seconds";

    if(distance<0){

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
        "🎉 The Celebration Has Started!";

    }

},1000);

// ===========================
// GOOGLE MAPS
// ===========================

function openMap(){

    window.open(
    "https://www.google.com/maps/search/?api=1&query=V2J3%2BQQV%20Nabas%2C%20Aklan",
    "_blank"
    );

}

// ===========================
// SHARE BUTTON
// ===========================

function shareInvitation(){

    if(navigator.share){

        navigator.share({

            title:"60th Birthday Invitation",

            text:"You're invited to the 60th Birthday Celebration of Emer Gallos!",

            url:window.location.href

        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        alert("Invitation link copied!");

    }

}
