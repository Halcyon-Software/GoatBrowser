function getGreeting(name) {
    const h = new Date().getHours();

    if (h >= 1 && h <= 3) return `Not sleeping yet, ${name}? 👀🌙`;
    if (h <= 11) return `Good morning, ${name}! 🌅`;
    if (h <= 17) return `Good afternoon, ${name}! ☀️`;
    if (h <= 22) return `Good evening, ${name}! 🌇`;
    return `Good night, ${name}! 🌙`;
}

function renderGreeting() {
    const name = get("username", "User");
    document.getElementById("welcome").textContent =
        getGreeting(name);
}