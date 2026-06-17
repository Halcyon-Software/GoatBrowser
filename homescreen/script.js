const userName = localStorage.getItem("username") || "User";

document.getElementById("welcome").innerText =
    `Welcome to Goat Browser, ${userName}!`;

function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();