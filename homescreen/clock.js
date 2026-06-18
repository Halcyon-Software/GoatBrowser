function startClock() {
    const el = document.getElementById("clock");

    function update() {
        const d = new Date();
        el.textContent = d.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    update();
    setInterval(update, 1000);
}