// OPEN INVITATION

function openInvitation(){

    document.getElementById("opening").style.display = "none";

    document.getElementById("invitation").style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

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
