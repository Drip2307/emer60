alert("script.js loaded");

function openInvitation() {
    alert("Button clicked!");

    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

function openMap() {
    window.open(
        "https://www.google.com/maps/search/?api=1&query=V2J3%2BQQV%20Nabas%2C%20Aklan",
        "_blank"
    );
}

function shareInvitation() {
    if (navigator.share) {
        navigator.share({
            title: "60th Birthday Invitation",
            text: "You're invited to the 60th Birthday Celebration of Emer Gallos!",
            url: window.location.href
        });
    } else {
        alert(window.location.href);
    }
}

const eventDate = new Date("2026-08-13T16:00:00");

setInterval(() => {

    const countdown = document.getElementById("countdown");

    if(!countdown) return;

    const now = new Date();

    const diff = eventDate - now;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const minutes = Math.floor((diff/(1000*60))%60);
    const seconds = Math.floor((diff/1000)%60);

    countdown.innerHTML =
    `⏳ ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);
