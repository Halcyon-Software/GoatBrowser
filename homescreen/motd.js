async function loadMotd() {
    const el = document.getElementById("motd");

    if (!get("motd", true)) {
        el.style.display = "none";
        return;
    }

    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();

        el.innerHTML = `
            <div class="quote">"${data[0].q}"</div>
            <div class="author">— ${data[0].a}</div>
        `;
    } catch {
        el.textContent = "Welcome back to Goat Browser.";
    }
}