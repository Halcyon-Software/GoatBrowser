const defaultWidgets = [
    { name: "Google", url: "https://google.com" },
    { name: "Wikipedia", url: "https://wikipedia.org" },
    { name: "Twitter", url: "https://x.com" },
    { name: "Reddit", url: "https://reddit.com" },
    { name: "ChatGPT", url: "https://chat.openai.com" },
    { name: "GitHub", url: "https://github.com" }
];

function loadWidgets() {
    let widgets = JSON.parse(localStorage.getItem("widgets"));

    if (!widgets) {
        widgets = defaultWidgets;
        localStorage.setItem("widgets", JSON.stringify(widgets));
    }

    const container = document.getElementById("widgets");
    container.innerHTML = "";

    widgets.forEach(w => {
        const div = document.createElement("div");
        div.className = "widget";
        div.innerText = w.name[0];

        div.onclick = () => window.location.href = w.url;

        container.appendChild(div);
    });
}

function removeWidget(name) {
    let widgets = JSON.parse(localStorage.getItem("widgets")) || [];
    widgets = widgets.filter(w => w.name !== name);
    localStorage.setItem("widgets", JSON.stringify(widgets));
    loadWidgets();
}