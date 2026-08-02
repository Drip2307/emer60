// Countdown to August 13, 2026, 4:00 PM
const eventDate = new Date("August 13, 2026 16:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML =
        "⏳ " + days + " Days " + hours + " Hours " + minutes + " Minutes Left";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML =
            "🎉 The celebration has started!";
    }

}, 1000);

function openMap() {
    window.open(
        "https://www.google.com/maps/search/?api=1&query=V2J3%2BQQV%20Nabas%2C%20Aklan",
        "_blank"
    );
}
